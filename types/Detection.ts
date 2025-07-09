export interface Detection {
  bbox: [number, number, number, number];
  score: number;
  class: number;
  imageWidth: number;
  imageHeight: number;
}
