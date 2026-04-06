from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
import os

app = Flask(__name__)
CORS(app)

DATA_PATH = os.path.join(os.path.dirname(__file__), 'data', 'majors.json')

def load_majors():
    with open(DATA_PATH, 'r') as f:
        return json.load(f)

@app.route('/api/recommend', methods=['POST'])
def recommend():
    try:
        user_data = request.json
        user_scores = user_data.get('scores', [])
        
        if len(user_scores) != 20:
            return jsonify({'error': 'Invalid number of scores. Expected 20.'}), 400
            
        majors_data = load_majors()
        
        user_vector = np.array([user_scores])
        major_vectors = np.array([m['profile'] for m in majors_data])
        
        similarities = cosine_similarity(user_vector, major_vectors)[0]
        
        results = []
        for idx, similarity in enumerate(similarities):
            results.append({
                'id': majors_data[idx]['id'],
                'name': majors_data[idx]['name'],
                'description': majors_data[idx]['description'],
                'similarity': float(similarity) * 100
            })
            
        results.sort(key=lambda x: x['similarity'], reverse=True)
        
        return jsonify({'recommendations': results})
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
