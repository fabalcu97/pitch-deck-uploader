import { useQuery } from 'react-query';
import { getPitchDecksRequest } from 'utils/api/getPitchDecksRequest';
import { PitchDeckType } from 'utils/types/pitchDeck';

function useGetPitchDecks(companyName?: string) {
  return useQuery<PitchDeckType[]>(['get-pitch-decks', companyName], () =>
    getPitchDecksRequest(companyName),
  );
}

export default useGetPitchDecks;
