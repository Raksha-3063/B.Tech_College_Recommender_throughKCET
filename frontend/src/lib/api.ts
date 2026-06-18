import axios from 'axios';
import { CollegeRecommendation, RecommendationRequest } from '../types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';

const api = axios.create({
  baseURL: API_URL,
});

export const getRecommendations = async (
  params: RecommendationRequest
): Promise<CollegeRecommendation[]> => {
  const response = await api.get('/recommend', { params });
  return response.data;
};
