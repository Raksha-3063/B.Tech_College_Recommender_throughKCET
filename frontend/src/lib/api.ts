
import axios from 'axios';
import { CollegeRecommendation, RecommendationRequest } from '../types';

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  'https://b-tech-college-recommender-throughkcet-6.onrender.com';

const api = axios.create({
  baseURL: API_URL,
});

export const getRecommendations = async (
  params: RecommendationRequest
): Promise<CollegeRecommendation[]> => {
  const response = await api.get('/recommend', { params });
  return response.data;
};
