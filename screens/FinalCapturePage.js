import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function FinalCapturePage({ navigation }) {
  const [finalImage, setFinalImage] = useState(null);

  const captureFinalImage = async () => {
    // Request permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera is required!");
      return;
    }

    // Launch the camera to capture an image
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Ensure we only capture images
      allowsEditing: true, // Allow the user to edit the image before using it
      aspect: [4, 3], // Aspect ratio of the image
      quality: 1, // Set image quality (1 = high)
    });

    if (!result.canceled) {
      setFinalImage(result.assets[0].uri); // Access the correct property for URI
    }
  };

  const handleNext = () => {
    navigation.navigate("NOTIS BARU");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Final Capture</Text>
      <TouchableOpacity style={styles.button} onPress={captureFinalImage}>
        <Text style={styles.buttonText}>Capture Final Image</Text>
      </TouchableOpacity>

      {finalImage && (
        <Image
          source={{ uri: finalImage }}
          style={styles.image}
          resizeMode="cover" // Ensure the image covers the given dimensions
        />
      )}

      <TouchableOpacity style={styles.submitButton} onPress={handleNext}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// Styles for a modern and aesthetically pleasing look
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f0f2f5",
    alignItems: "center",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#4a90e2",
    paddingVertical: 14,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
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
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    borderColor: "#ddd",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  submitButton: {
    backgroundColor: "#1E90FF",
    paddingVertical: 14,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
