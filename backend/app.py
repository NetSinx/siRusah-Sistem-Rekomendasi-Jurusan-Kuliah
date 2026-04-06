from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

DATA_PATH = os.path.join(os.path.dirname(__file__), 'data', 'majors.json')

def load_majors():
    with open(DATA_PATH, 'r') as f:
        return json.load(f)

def calculate_expert_match(user_scores, major_profile):
    score = 0.0
    max_score = 0.0
    
    for u_val, m_val in zip(user_scores, major_profile):
        weight = 0.0
        if m_val == 5:
            weight = 5.0
        elif m_val == 4:
            weight = 3.0
        elif m_val == 3:
            weight = 1.0
            
        if weight > 0:
            max_score += weight * 5.0
            
            if m_val >= 4 and u_val < m_val:
                deficit = m_val - u_val
                penalty = deficit * (1.5 if m_val == 5 else 1.0)
                earned = max(0, u_val - penalty)
                score += weight * earned
            else:
                score += weight * u_val
                
    if max_score == 0:
        return 0.0
        
    return (score / max_score) * 100

@app.route('/api/recommend', methods=['POST'])
def recommend():
    try:
        user_data = request.json
        user_scores = user_data.get('scores', [])
        
        if len(user_scores) != 26:
            return jsonify({'error': 'Invalid number of scores. Expected 26.'}), 400
            
        majors_data = load_majors()
        
        results = []
        for major in majors_data:
            similarity = calculate_expert_match(user_scores, major['profile'])
            results.append({
                'id': major['id'],
                'name': major['name'],
                'description': major['description'],
                'similarity': round(similarity, 2)
            })
            
        # Urutkan berdasarkan nilai kecocokan tertinggi
        results.sort(key=lambda x: x['similarity'], reverse=True)
        
        return jsonify({'recommendations': results})
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
