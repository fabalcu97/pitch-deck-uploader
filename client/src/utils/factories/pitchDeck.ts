// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from '@faker-js/faker';
import { PitchDeckType } from 'utils/types/pitchDeck';

export function generatePitchDeck(): PitchDeckType {
  return {
    companyName: faker.company.companyName(),
    createdDate: faker.date.recent().toISOString(),
    id: faker.datatype.uuid(),
    images: [
      faker.image.business(),
      faker.image.business(),
      faker.image.business(),
      faker.image.business(),
      faker.image.business(),
      faker.image.business(),
    ],
  };
}

export function generatePitchDecks(amount = 20): PitchDeckType[] {
  return Array.from(new Array(amount)).map(generatePitchDeck);
}
