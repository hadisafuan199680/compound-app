import React, { useState } from "react";
import {
  View,
  Button,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ImageCapturePage({ navigation, route }) {
  const [images, setImages] = useState([]);
  const { formData } = route.params;
  const [isLoading, setIsLoading] = useState(false);

  const captureImage = async () => {
    // Request camera permission
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Camera permission is required!");
      return;
    }

    setIsLoading(true); // Start loading when capturing image
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Specify to capture images
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    setIsLoading(false); // Stop loading after capturing image

    if (!result.canceled) {
      setImages([...images, result.assets[0].uri]); // Ensure to access uri correctly
    }
  };

  const handleNext = () => {
    navigation.navigate("PERUNTUKKAN_UNDANG_UNDANG", { formData, images });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={captureImage}>
        <Text style={styles.buttonText}>KAMERA</Text>
      </TouchableOpacity>
      {isLoading ? (
        <ActivityIndicator color="blue" size="large" />
      ) : (
        <ScrollView contentContainerStyle={styles.imageContainer}>
          {images.length > 0 ? (
            images.map((img, index) => (
              <Image key={index} source={{ uri: img }} style={styles.image} />
            ))
          ) : (
            <Text style={styles.noImageText}>Tiada gambar. </Text> // No image captured
          )}
        </ScrollView>
      )}
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>SETERUSNYA</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles for a modern look
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2f5",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#4a90e2",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  noImageText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginTop: 20,
  },
});
