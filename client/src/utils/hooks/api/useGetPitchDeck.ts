import { useQuery } from 'react-query';
import { getPitchDeckRequest } from 'utils/api/getPitchDeckRequest';
import { PitchDeckType } from 'utils/types/pitchDeck';

function useGetPitchDeck(id: string) {
  return useQuery<PitchDeckType>(
    ['get-pitch-deck', id],
    () => getPitchDeckRequest(id),
    { enabled: !!id },
  );
}

export default useGetPitchDeck;
