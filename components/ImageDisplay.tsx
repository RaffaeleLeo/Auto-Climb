import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import { Detection } from '../types/Detection';

interface Props {
  imageUri: string;
  detections: Detection[];
}

export default function ImageDisplay({ imageUri, detections = [] }: Props) {
  const { width } = Dimensions.get('window');
  const IMAGE_WIDTH = width - 24;
  const IMAGE_HEIGHT = IMAGE_WIDTH * (4 / 3); // assume 4:3 image aspect ratio

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={{ width: IMAGE_WIDTH, height: IMAGE_HEIGHT }} />
      <Svg style={StyleSheet.absoluteFill}>
      {detections.map((det, i) => {
        const [x, y, boxWidth, boxHeight] = det.bbox;

        // Compute scale ratios
        const scaleX = IMAGE_WIDTH / det.imageWidth; 
        const scaleY = IMAGE_HEIGHT / det.imageHeight;

        console.log("IMAGE_WIDTH", IMAGE_WIDTH);
        console.log("imageWidth", det.imageWidth);
        console.log("ScaleX", scaleX, "ScaleY", scaleY);
        console.log("Box", det.bbox);

        return (
          <Rect
            key={i}
            x={x * scaleX}
            y={y * scaleY}
            width={boxWidth * scaleX}
            height={boxHeight * scaleY}
            stroke="red"
            strokeWidth="2"
            fill="transparent"
          />
        );
      })}

      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    alignItems: 'center',
  },
});
