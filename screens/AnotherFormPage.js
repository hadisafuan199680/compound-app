import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Text,
} from "react-native";

export default function AnotherFormPage({ navigation, route }) {
  const { formData, images } = route.params;
  const [additionalData, setAdditionalData] = useState({
    perintah: "",
    butiranundang: "",
    jalan: "",
  });

  const handleNext = () => {
    navigation.navigate("RUMUSAN", { formData, images, additionalData });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>BUTIRAN KESALAHAN</Text>
      <TextInput
        placeholder="Perintah"
        value={additionalData.perintah}
        onChangeText={(text) =>
          setAdditionalData({ ...additionalData, perintah: text })
        }
        style={styles.input}
        placeholderTextColor="#aaa"
      />
      <TextInput
        placeholder="Butiran Undang-Undang"
        value={additionalData.butiranundang}
        onChangeText={(text) =>
          setAdditionalData({ ...additionalData, butiranundang: text })
        }
        style={styles.input}
        placeholderTextColor="#aaa"
      />
      <TextInput
        placeholder="Jalan"
        value={additionalData.jalan}
        onChangeText={(text) =>
          setAdditionalData({ ...additionalData, jalan: text })
        }
        style={styles.input}
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>SETERUSNYA</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// Styles for a modern and aesthetic look
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f0f2f5", // Consistent background color
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333", // Dark gray text
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 48,
    borderRadius: 12,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    backgroundColor: "#4a90e2",
    paddingVertical: 14,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
    marginBottom: 16,
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
});
