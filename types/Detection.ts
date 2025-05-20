export interface Detection {
    bbox: [number, number, number, number]; // x, y, width, height
    score: number;
    class: string;
  }
  