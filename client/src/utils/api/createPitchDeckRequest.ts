import { apiInstance } from 'utils/api';

export async function createPitchDeckRequest(companyName: string, file: File) {
  var formData = new FormData();
  formData.append('companyName', companyName);
  formData.append('file', file);
  const response = await apiInstance.post('/pitch-deck', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
}
