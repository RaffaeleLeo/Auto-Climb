import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { detectHolds } from '../utils/api';
import ImageDisplay from '../components/ImageDisplay';
import { Detection } from '../types/Detection';

export default function HomeScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [holds, setHolds] = useState<Detection[]>([]);
  const [loading, setLoading] = useState(false);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({ base64: false });
    if (!result.canceled && result.assets.length > 0) {
      setImage(result.assets[0].uri);
      setHolds([]);
    }
  };

  const runDetection = async () => {
    if (!image) return;
    setLoading(true);
    const predictions = await detectHolds(image);
    console.log(predictions)
    if (Array.isArray(predictions)){
      setHolds(predictions);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Pick Image" onPress={pickImage} />
      {image && <ImageDisplay imageUri={image} detections={holds} />}
      {image && <Button title="Detect Holds" onPress={runDetection} />}
      {loading && <ActivityIndicator size="large" color="blue" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    justifyContent: 'flex-start',
  },
});
