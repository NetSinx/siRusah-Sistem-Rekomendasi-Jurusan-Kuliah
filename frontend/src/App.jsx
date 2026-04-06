import React from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Progress,
  Card,
  CardBody,
  Badge,
  Spinner,
  Flex,
  SimpleGrid,
  Icon,
  Avatar,
  Divider
} from '@chakra-ui/react';
import { ArrowRight, ArrowLeft, Send, RefreshCcw, Quote, Star, Trophy, GraduationCap, Code, Stethoscope, Scale, Palette, Briefcase, Calculator, FlaskConical, HardHat, Globe, BookOpen } from 'lucide-react';
import { QUESTIONS, OPTIONS } from './utils/constants';
import { useAppHandlers } from './utils/useAppHandlers';

function App() {
  const {
    step,
    currentQuestionIndex,
    answers,
    recommendations,
    loading,
    handleStart,
    handleNext,
    handlePrev,
    handleAnswerChange,
    handleSubmit,
    handleReset
  } = useAppHandlers();

  const isCurrentAnswerEmpty = answers[currentQuestionIndex] === null;

  if (step === 'intro') {
    return (
      <Box w="100%" bg="gray.50" minH="100vh">
        <Flex 
          py={{ base: 20, md: 32 }}
          w="100%" 
          bgGradient="linear(to-br, cyan.500, brand.600, purple.700)"
          align="center" 
          justify="center"
          position="relative"
          overflow="hidden"
        >
          <Box position="absolute" top="10%" left="5%" opacity="0.15" transform="rotate(-15deg)" display={{ base: "none", md: "block" }}>
            <Icon as={GraduationCap} w={16} h={16} color="white" />
          </Box>
          <Box position="absolute" top="20%" right="10%" opacity="0.15" transform="rotate(20deg)">
            <Icon as={Code} w={20} h={20} color="white" />
          </Box>
          <Box position="absolute" bottom="15%" left="15%" opacity="0.15" transform="rotate(10deg)">
            <Icon as={Stethoscope} w={24} h={24} color="white" />
          </Box>
          <Box position="absolute" bottom="10%" right="5%" opacity="0.15" transform="rotate(-25deg)" display={{ base: "none", md: "block" }}>
            <Icon as={Scale} w={16} h={16} color="white" />
          </Box>
          <Box position="absolute" top="40%" left="2%" opacity="0.15" transform="rotate(45deg)">
            <Icon as={Palette} w={12} h={12} color="white" />
          </Box>
          <Box position="absolute" top="50%" right="2%" opacity="0.15" transform="rotate(-10deg)">
            <Icon as={Briefcase} w={14} h={14} color="white" />
          </Box>
          <Box position="absolute" bottom="5%" left="40%" opacity="0.15" transform="rotate(15deg)" display={{ base: "none", md: "block" }}>
            <Icon as={FlaskConical} w={16} h={16} color="white" />
          </Box>
          <Box position="absolute" top="5%" right="35%" opacity="0.15" transform="rotate(-20deg)">
            <Icon as={Globe} w={20} h={20} color="white" />
          </Box>

          <Container maxW="4xl" zIndex="1" centerContent>
            <VStack spacing={8} textAlign="center" color="white">
              <Badge colorScheme="whiteAlpha" bg="whiteAlpha.300" px={4} py={2} rounded="full" fontSize="sm" fontWeight="bold" letterSpacing="wide">
                MASA DEPANMU DIMULAI DI SINI
              </Badge>
              <Heading size={{ base: "2xl", md: "4xl" }} fontWeight="extrabold" textShadow="0 2px 4px rgba(0,0,0,0.2)" lineHeight="tight">
                Temukan Jurusan Kuliahmu!
              </Heading>
              <Text fontSize={{ base: "lg", md: "2xl" }} maxW="2xl" textShadow="0 1px 2px rgba(0,0,0,0.2)" opacity={0.9}>
                Sistem rekomendasi ini menggunakan analisis kecerdasan majemuk dan minat untuk menemukan program studi yang paling sesuai dengan potensimu.
              </Text>
              <Button
                mt={4}
                bg="white"
                color="brand.600"
                size="lg"
                fontSize="xl"
                px={12}
                py={8}
                rounded="full"
                rightIcon={<ArrowRight size={24} />}
                onClick={handleStart}
                boxShadow="2xl"
                _hover={{ transform: 'translateY(-4px)', boxShadow: 'dark-lg', bg: 'gray.50' }}
                transition="all 0.3s"
              >
                Mulai Kuisioner
              </Button>
            </VStack>
          </Container>
          
          <Box position="absolute" top="-10%" left="-5%" w={{base: "200px", md: "300px"}} h={{base: "200px", md: "300px"}} bg="whiteAlpha.200" rounded="full" filter="blur(40px)" />
          <Box position="absolute" bottom="-10%" right="-5%" w={{base: "200px", md: "300px"}} h={{base: "200px", md: "300px"}} bg="purple.500" opacity="0.3" rounded="full" filter="blur(40px)" />
        </Flex>

        <Container maxW="5xl" py={{ base: 16, md: 24 }}>
          <VStack spacing={{ base: 12, md: 16 }}>
            <VStack spacing={4} textAlign="center" maxW="2xl">
              <Heading size="xl" color="gray.800">Cara Kerja Aplikasi</Heading>
              <Text color="gray.600" fontSize="lg">Hanya butuh 3 langkah mudah untuk menemukan jurusan yang sesuai dengan kepribadian dan minatmu.</Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="full">
              <Card bg="white" shadow="md" borderWidth="1px" borderColor="gray.100" rounded="2xl" transition="all 0.3s" _hover={{ transform: 'translateY(-5px)', shadow: 'xl' }}>
                <CardBody p={8} textAlign="center">
                  <Flex w={16} h={16} bg="brand.50" color="brand.600" rounded="full" align="center" justify="center" mx="auto" mb={6}>
                    <Text fontSize="2xl" fontWeight="bold">1</Text>
                  </Flex>
                  <Heading size="md" mb={4} color="gray.800">Isi Kuisioner</Heading>
                  <Text color="gray.600">Jawab 20 pertanyaan sederhana mengenai minat, kebiasaan, dan kemampuanmu sehari-hari.</Text>
                </CardBody>
              </Card>

              <Card bg="white" shadow="md" borderWidth="1px" borderColor="gray.100" rounded="2xl" transition="all 0.3s" _hover={{ transform: 'translateY(-5px)', shadow: 'xl' }}>
                <CardBody p={8} textAlign="center">
                  <Flex w={16} h={16} bg="brand.50" color="brand.600" rounded="full" align="center" justify="center" mx="auto" mb={6}>
                    <Text fontSize="2xl" fontWeight="bold">2</Text>
                  </Flex>
                  <Heading size="md" mb={4} color="gray.800">Sistem Menganalisis</Heading>
                  <Text color="gray.600">Algoritma kami akan mencocokkan profilmu dengan database program studi yang ada.</Text>
                </CardBody>
              </Card>

              <Card bg="white" shadow="md" borderWidth="1px" borderColor="gray.100" rounded="2xl" transition="all 0.3s" _hover={{ transform: 'translateY(-5px)', shadow: 'xl' }}>
                <CardBody p={8} textAlign="center">
                  <Flex w={16} h={16} bg="brand.50" color="brand.600" rounded="full" align="center" justify="center" mx="auto" mb={6}>
                    <Text fontSize="2xl" fontWeight="bold">3</Text>
                  </Flex>
                  <Heading size="md" mb={4} color="gray.800">Dapatkan Rekomendasi</Heading>
                  <Text color="gray.600">Terima 3 rekomendasi jurusan kuliah terbaik beserta tingkat kecocokannya dengan potensimu.</Text>
                </CardBody>
              </Card>
            </SimpleGrid>
          </VStack>
        </Container>

        <Divider borderColor="gray.200" />

        <Box bg="white" py={{ base: 16, md: 24 }}>
          <Container maxW="4xl" textAlign="center">
            <Icon as={Quote} w={12} h={12} color="brand.300" mb={6} />
            <Heading size={{ base: "md", md: "lg" }} color="gray.800" lineHeight="tall" mb={6} fontWeight="medium" fontStyle="italic">
              "Pendidikan adalah senjata paling mematikan di dunia, karena dengan pendidikan, Anda dapat mengubah dunia."
            </Heading>
            <Text fontSize="lg" color="gray.500" fontWeight="bold">— Nelson Mandela</Text>
          </Container>
        </Box>

        <Divider borderColor="gray.200" />

        <Container maxW="5xl" py={{ base: 16, md: 24 }}>
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center">
              <Heading size="xl" color="gray.800">Cerita Mereka</Heading>
              <Text color="gray.600" fontSize="lg">Apa kata mereka yang sudah mencoba sistem ini?</Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
              <Card bg="gray.50" shadow="none" borderWidth="1px" borderColor="gray.200" rounded="2xl">
                <CardBody p={8}>
                  <HStack spacing={1} color="yellow.400" mb={4}>
                    <Icon as={Star} fill="currentColor" />
                    <Icon as={Star} fill="currentColor" />
                    <Icon as={Star} fill="currentColor" />
                    <Icon as={Star} fill="currentColor" />
                    <Icon as={Star} fill="currentColor" />
                  </HStack>
                  <Text color="gray.700" fontSize="md" mb={6} fontStyle="italic" lineHeight="tall">
                    "Awalnya saya bingung mau masuk jurusan apa karena suka seni tapi juga suka hitung-hitungan. Setelah mengisi kuisioner ini, saya mendapat rekomendasi Arsitektur, dan ternyata itu sangat cocok dengan saya!"
                  </Text>
                  <HStack spacing={4}>
                    <Avatar name="Budi Santoso" bg="brand.500" color="white" />
                    <Box>
                      <Text fontWeight="bold" color="gray.800">Budi Santoso</Text>
                      <Text fontSize="sm" color="gray.500">Calon Mahasiswa Baru</Text>
                    </Box>
                  </HStack>
                </CardBody>
              </Card>

              <Card bg="gray.50" shadow="none" borderWidth="1px" borderColor="gray.200" rounded="2xl">
                <CardBody p={8}>
                  <HStack spacing={1} color="yellow.400" mb={4}>
                    <Icon as={Star} fill="currentColor" />
                    <Icon as={Star} fill="currentColor" />
                    <Icon as={Star} fill="currentColor" />
                    <Icon as={Star} fill="currentColor" />
                    <Icon as={Star} fill="currentColor" />
                  </HStack>
                  <Text color="gray.700" fontSize="md" mb={6} fontStyle="italic" lineHeight="tall">
                    "Hasilnya sangat akurat! Sistem merekomendasikan Ilmu Komputer, yang memang selama ini menjadi ketertarikan terpendam saya. Penjelasannya juga membantu saya meyakinkan orang tua."
                  </Text>
                  <HStack spacing={4}>
                    <Avatar name="Andi Wijaya" bg="purple.500" color="white" />
                    <Box>
                      <Text fontWeight="bold" color="gray.800">Andi Wijaya</Text>
                      <Text fontSize="sm" color="gray.500">Siswa SMA Kelas 12</Text>
                    </Box>
                  </HStack>
                </CardBody>
              </Card>
            </SimpleGrid>
          </VStack>
        </Container>

        <Box bgGradient="linear(to-br, cyan.500, brand.600, purple.700)" color="white" py={{ base: 16, md: 24 }} textAlign="center" position="relative" overflow="hidden">
          <Box position="absolute" top="-20%" left="-5%" w={{base: "150px", md: "250px"}} h={{base: "150px", md: "250px"}} bg="whiteAlpha.200" rounded="full" filter="blur(30px)" />
          <Box position="absolute" bottom="-20%" right="-5%" w={{base: "150px", md: "250px"}} h={{base: "150px", md: "250px"}} bg="purple.500" opacity="0.3" rounded="full" filter="blur(30px)" />
          
          <Container maxW="3xl" position="relative" zIndex="1">
            <Heading size="xl" mb={6}>Sudah Siap Mengetahui Jurusanmu?</Heading>
            <Text fontSize="lg" color="whiteAlpha.900" mb={10}>
              Jangan biarkan kebingungan menghalangi potensi besarmu. Mulai tes sekarang, gratis!
            </Text>
            <Button
              bg="white"
              color="brand.600"
              size="lg"
              fontSize="xl"
              px={10}
              py={8}
              rounded="full"
              rightIcon={<ArrowRight size={24} />}
              onClick={handleStart}
              boxShadow="xl"
              _hover={{ transform: 'scale(1.05)', bg: 'gray.50', boxShadow: '2xl' }}
              transition="all 0.3s"
            >
              Coba Tes Sekarang
            </Button>
          </Container>
        </Box>
      </Box>
    );
  }

  return (
    <Box 
      h={step === 'quiz' ? "100vh" : "auto"}
      minH={step === 'quiz' ? "none" : "100vh"}
      bg="gray.50" 
      py={{ base: 4, md: 15 }} 
      display="flex" 
      alignItems={step === 'quiz' ? "center" : "flex-start"} 
      overflow={step === 'quiz' ? "hidden" : "visible"}
    >
      <Container 
        maxW="3xl" 
        w="full" 
        h={step === 'quiz' ? "full" : "auto"} 
        display="flex" 
        alignItems={step === 'quiz' ? "center" : "flex-start"} 
        justifyContent="center"
      >
        
        {step === 'quiz' && (
          <Card w="full" h="full" maxH="full" display="flex" flexDirection="column" shadow="2xl" rounded="2xl" overflow="hidden" borderWidth="1px" borderColor="gray.100" bg="white">
            <Progress 
              value={((currentQuestionIndex + 1) / QUESTIONS.length) * 100} 
              colorScheme="brand" 
              size="sm" 
              bg="gray.100" 
              flexShrink={0}
            />
            <CardBody flex="1" display="flex" flexDirection="column" overflow="hidden" py={{ base: 6, md: 10 }} px={{ base: 6, md: 10 }}>
              <Box mb={3} textAlign="center" flexShrink={0}>
                <Heading size="lg" lineHeight="tall" color="gray.800">
                  {QUESTIONS[currentQuestionIndex]}
                </Heading>
              </Box>

              <Box flex="1" overflowY="auto" bg="gray.50" borderWidth="1px" borderColor="gray.200" p={8} rounded="2xl" mb={2} height={1000}>
                <Text textAlign="center" mb={6} fontSize="md" color="gray.600" fontWeight="medium">
                  Seberapa setuju kamu dengan pernyataan di atas?
                </Text>
                
                <VStack spacing={3} w="full" align="stretch">
                  {OPTIONS.map((option) => {
                    const isSelected = answers[currentQuestionIndex] === option.value;
                    return (
                      <Button
                        key={option.value}
                        w="full"
                        size="lg"
                        justifyContent="flex-start"
                        px={6}
                        py={6}
                        variant={isSelected ? "solid" : "outline"}
                        colorScheme={isSelected ? "brand" : "gray"}
                        borderColor={isSelected ? "brand.500" : "gray.300"}
                        bg={isSelected ? "brand.500" : "white"}
                        color={isSelected ? "white" : "gray.700"}
                        _hover={{ 
                          bg: isSelected ? "brand.600" : "gray.50",
                          borderColor: isSelected ? "brand.600" : "gray.400"
                        }}
                        onClick={() => handleAnswerChange(option.value)}
                        fontWeight="medium"
                        fontSize="md"
                        boxShadow={isSelected ? "md" : "none"}
                      >
                        <Flex w="full" justify="space-between" align="center">
                          <Text>{option.label}</Text>
                          {isSelected && (
                            <Box w={3} h={3} rounded="full" bg="white" />
                          )}
                        </Flex>
                      </Button>
                    );
                  })}
                </VStack>
              </Box>

              <HStack justify="space-between" mt="auto" flexShrink={0}>
                <Button 
                  variant="outline" 
                  size="lg"
                  leftIcon={<ArrowLeft size={18} />} 
                  onClick={handlePrev}
                  isDisabled={currentQuestionIndex === 0}
                >
                  Kembali
                </Button>

                {currentQuestionIndex === QUESTIONS.length - 1 ? (
                  <Button 
                    colorScheme="brand" 
                    size="lg"
                    rightIcon={loading ? <Spinner size="sm"/> : <Send size={18} />} 
                    onClick={handleSubmit}
                    isLoading={loading}
                    loadingText="Menganalisis..."
                    isDisabled={isCurrentAnswerEmpty}
                  >
                    Lihat Hasil
                  </Button>
                ) : (
                  <Button 
                    colorScheme="brand" 
                    size="lg"
                    rightIcon={<ArrowRight size={18} />} 
                    onClick={handleNext}
                    isDisabled={isCurrentAnswerEmpty}
                  >
                    Selanjutnya
                  </Button>
                )}
              </HStack>
            </CardBody>
          </Card>
        )}

        {step === 'result' && (
          <Card w="full" shadow="2xl" rounded="2xl" overflow="hidden" borderWidth="1px" borderColor="gray.100" bg="white">
            <Box h="3" bg="brand.500" />
            <CardBody py={{ base: 6, md: 10 }} px={{ base: 6, md: 10 }}>
              <VStack spacing={2} mb={10}>
                <Heading size="xl" textAlign="center" color="gray.800">
                  Rekomendasi Jurusan
                </Heading>
                <Text textAlign="center" color="gray.600" fontSize="lg">
                  Berdasarkan profil yang kamu isi, berikut adalah rekomendasi jurusan yang paling sesuai:
                </Text>
              </VStack>

              <VStack spacing={6} align="stretch" mb={10}>
                {recommendations.slice(0, 3).map((rec, index) => {
                  const isFirst = index === 0;
                  const isSecond = index === 1;
                  const isThird = index === 2;
                  
                  let iconColor = "";
                  if (isFirst) iconColor = "yellow.400";
                  else if (isSecond) iconColor = "gray.400";
                  else if (isThird) iconColor = "#8B4513";

                  return (
                    <Box 
                      key={rec.id} 
                      p={8} 
                      borderWidth="2px" 
                      borderColor={isFirst ? "brand.300" : isSecond ? "gray.300" : isThird ? "orange.200" : "gray.100"} 
                      rounded="2xl" 
                      bg={isFirst ? "brand.50" : isSecond ? "gray.50" : isThird ? "orange.50" : "white"}
                      position="relative"
                      overflow="hidden"
                      boxShadow={isFirst ? "md" : "sm"}
                      transition="all 0.2s"
                      _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                    >
                      {isFirst && (
                        <Box position="absolute" top="0" right="0" bg="brand.500" color="white" px={4} py={1.5} fontSize="sm" fontWeight="bold" borderBottomLeftRadius="xl">
                          PALING COCOK
                        </Box>
                      )}
                      <HStack justify="space-between" mb={3} align="start">
                        <HStack align="center" spacing={3}>
                          <Icon as={Trophy} w={8} h={8} color={iconColor} />
                          <Heading size="lg" color={isFirst ? "brand.800" : "gray.800"}>
                            {index + 1}. {rec.name}
                          </Heading>
                        </HStack>
                        <Badge colorScheme={isFirst ? "brand" : "gray"} fontSize="md" px={3} py={1.5} rounded="lg">
                          {rec.similarity.toFixed(1)}% Cocok
                        </Badge>
                      </HStack>
                      <Text color="gray.600" fontSize="md" lineHeight="tall">
                        {rec.description}
                      </Text>
                    </Box>
                  );
                })}
              </VStack>

              {recommendations.length > 3 && (
                <Box mb={10}>
                  <Heading size="md" mb={6} color="gray.700" textAlign="center">
                    Leaderboard Rekomendasi Lainnya
                  </Heading>
                  <VStack spacing={3} align="stretch">
                    {recommendations.slice(3).map((rec, index) => (
                      <HStack 
                        key={rec.id} 
                        p={4} 
                        bg="gray.50" 
                        borderWidth="1px" 
                        borderColor="gray.200" 
                        rounded="xl" 
                        justify="space-between"
                        _hover={{ bg: "gray.100", transform: 'translateX(4px)' }}
                        transition="all 0.2s"
                      >
                        <HStack spacing={4}>
                          <Flex w={8} h={8} bg="white" rounded="full" align="center" justify="center" shadow="sm" borderWidth="1px" borderColor="gray.200">
                            <Text fontWeight="bold" color="gray.500">
                              {index + 4}
                            </Text>
                          </Flex>
                          <Text fontWeight="bold" color="gray.800">{rec.name}</Text>
                        </HStack>
                        <Badge colorScheme="blue" variant="subtle">
                          {rec.similarity.toFixed(1)}%
                        </Badge>
                      </HStack>
                    ))}
                  </VStack>
                </Box>
              )}

              <Box textAlign="center">
                <Button colorScheme="gray" variant="outline" onClick={handleReset} size="lg" px={8}>
                  Ulangi Kuisioner
                </Button>
              </Box>
            </CardBody>
          </Card>
        )}

      </Container>
    </Box>
  );
}

export default App;