export interface CollegeRecommendation {
  college_code: string;
  college_name: string;
  branch: string;
  category: string;
  cutoff_rank: number;
}

export interface RecommendationRequest {
  rank: number;
  category: string;
  branch?: string;
  top_n?: number;
}
