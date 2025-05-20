import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import { Detection } from '../types/Detection';

interface Props {
  imageUri: string;
  detections: Detection[];
}

export default function ImageDisplay({ imageUri, detections }: Props) {
  const { width } = Dimensions.get('window');
  const IMAGE_WIDTH = width - 24;
  const IMAGE_HEIGHT = IMAGE_WIDTH * (4 / 3); // assume 4:3 image aspect ratio

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={{ width: IMAGE_WIDTH, height: IMAGE_HEIGHT }} />
      <Svg style={StyleSheet.absoluteFill}>
        {detections.map((det, i) => (
          <Rect
            key={i}
            x={det.bbox[0]}
            y={det.bbox[1]}
            width={det.bbox[2]}
            height={det.bbox[3]}
            stroke="red"
            strokeWidth="2"
            fill="transparent"
          />
        ))}
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
