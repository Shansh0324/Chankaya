export interface BentoCardData {
  id: string;
  imageSrc: string;
  imageAlt: string;
  labelText: string;
  accentText: string;
  accentPosition: 'before' | 'after' | 'middle';
  className: string;
}

export const bentoCardsData: BentoCardData[] = [
  {
    id: "true-beauty",
    imageSrc: "assets/img4.png",
    imageAlt: "Abstract Metallic Sculpture",
    labelText: "True",
    accentText: "Beauty",
    accentPosition: "after",
    className: "bento1"
  },
  {
    id: "real-view",
    imageSrc: "assets/image.png",
    imageAlt: "Neon Number 3",
    labelText: "Real",
    accentText: "View",
    accentPosition: "after",
    className: "bento2"
  },
  {
    id: "Warmth",
    imageSrc: "assets/img5.png",
    imageAlt: "Futuristic Human Portrait",
    labelText: "W",
    accentText: "a",
    accentPosition: "middle",
    className: "bento3"
  },
  {
    id: "loved-moments",
    imageSrc: "assets/img6.png",
    imageAlt: "Virtual Reality Experience",
    labelText: "Moments",
    accentText: "Loved",
    accentPosition: "before",
    className: "bento4"
  }
];