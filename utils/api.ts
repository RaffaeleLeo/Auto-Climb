import { Detection } from '../types/Detection';

const API_URL = 'http://192.168.68.105:4999/detect';

export async function detectHolds(imageUri: string): Promise<Detection[]> {
  const formData = new FormData();
  formData.append("image", {
    uri: imageUri,
    name: "climb.jpg",
    type: "image/jpeg",
  } as any);

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });

  const json = await res.json();
  console.log(json)
  return json as Detection[];
}
