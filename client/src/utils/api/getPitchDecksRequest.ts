import { apiInstance } from 'utils/api';

export async function getPitchDecksRequest(companyName?: string) {
  const response = await apiInstance.get('/pitch-deck', {
    params: {
      companyName,
    },
  });
  return response.data;
}
