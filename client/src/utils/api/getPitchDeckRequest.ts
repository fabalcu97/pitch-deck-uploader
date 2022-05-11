import { apiInstance } from 'utils/api';

export async function getPitchDeckRequest(id: string) {
  const response = await apiInstance.get(`/pitch-deck/${id}`);
  return response.data;
}
