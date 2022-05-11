import { useMutation } from 'react-query';
import { createPitchDeckRequest } from 'utils/api/createPitchDeckRequest';
import { PitchDeckType } from 'utils/types/pitchDeck';

type PitchDeckVariablesType = { companyName: string; file: File };

function useCreatePitchDeck() {
  return useMutation<PitchDeckType, unknown, PitchDeckVariablesType>(
    'create-pitch-deck',
    (variables: PitchDeckVariablesType) =>
      createPitchDeckRequest(variables.companyName, variables.file),
  );
}

export default useCreatePitchDeck;
