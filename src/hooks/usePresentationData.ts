const adjectives = ['Cool', 'Smart', 'Bright', 'Fun', 'Dynamic', 'Creative'];
const nouns = ['Presentation', 'Session', 'Talk', 'Lecture', 'Deck', 'Show'];

const randomArrayElement = (arr: Array<string>): string =>
  arr[Math.floor(Math.random() * arr.length)];

const generatePresentationName = () => {
  const adj = randomArrayElement(adjectives);
  const noun = randomArrayElement(nouns);
  return `${adj} ${noun}`;
};

const generateImageUrl = (id: number) => {
  return `/slides/slide0${id}.png`;
};

export interface Slide {
  id: string;
  imageUrl: string;
}

export interface PresentationData {
  name: string;
  slides: Slide[];
}

/**
 * Hook that generates a random presentation data object.
 * Generates a new random name every call.
 * Slides are memoized to avoid regeneration on re-render.
 */
export function usePresentationData(): PresentationData {
  const name = generatePresentationName();
  const slides = Array.from({ length: 8 }, (_, i) => ({
    id: 'slide' + (i + 1),
    imageUrl: generateImageUrl(i + 1),
  }));

  return { name, slides };
}
