import { Detection } from '../types/Detection';

export async function detectHolds(imageUri: string): Promise<Detection[]> {
  console.log('Mocking detection for image:', imageUri);

  // Simulated bounding boxes
  return [
    {
      bbox: [60, 80, 100, 100], // [x, y, width, height]
      score: 0.95,
      class: 'hold',
    },
    {
      bbox: [180, 220, 80, 80],
      score: 0.87,
      class: 'hold',
    },
  ];
}

// const API_URL = 'http://localhost:5000/detect'; // Replace with actual server

// export async function detectHolds(imageUri: string): Promise<Detection[]> {
//   const formData = new FormData();
//   formData.append('image', {
//     uri: imageUri,
//     name: 'climb.jpg',
//     type: 'image/jpeg',
//   } as any);

//   const res = await fetch(API_URL, {
//     method: 'POST',
//     body: formData,
//     headers: { 'Content-Type': 'multipart/form-data' },
//   });

//   if (!res.ok) {
//     console.error('Failed to detect holds');
//     return [];
//   }

//   const json = await res.json();
//   return json.detections as Detection[];
// }
