import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import axios from "axios"; // Import axios

export default function FormPage({ navigation }) {
  const [formData, setFormData] = useState({
    platenumber: "",
    roadtax: "",
    jenisbadan: "",
    jenamakereta: "",
    modelkereta: "",
  });

  const [verify, setVerify] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = () => {
    navigation.navigate("GAMBAR_SEBELUM_KOMPAUN", { formData });
  };

  const verifyPlate = async () => {
    setError(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>BUTIRAN KENDERAAN</Text>
      <TextInput
        placeholder="Nombor Plat"
        value={formData.platenumber}
        onChangeText={(text) => setFormData({ ...formData, platenumber: text })}
        style={styles.input}
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity style={styles.button} onPress={verifyPlate}>
        <Text style={styles.buttonText}>SEMAK</Text>
      </TouchableOpacity>
      {/* Additional input fields */}
      <TextInput
        placeholder="No Cukai Jalan"
        value={formData.roadtax}
        onChangeText={(text) => setFormData({ ...formData, roadtax: text })}
        style={styles.input}
        placeholderTextColor="#aaa"
      />
      <TextInput
        placeholder="Jenis Badan"
        value={formData.jenisbadan}
        onChangeText={(text) => setFormData({ ...formData, jenisbadan: text })}
        style={styles.input}
        placeholderTextColor="#aaa"
      />
      <TextInput
        placeholder="Jenama Kereta"
        value={formData.jenamakereta}
        onChangeText={(text) =>
          setFormData({ ...formData, jenamakereta: text })
        }
        style={styles.input}
        placeholderTextColor="#aaa"
      />
      <TextInput
        placeholder="Model Kereta"
        value={formData.modelkereta}
        onChangeText={(text) => setFormData({ ...formData, modelkereta: text })}
        style={styles.input}
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>SETERUSNYA</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles for a modern and aesthetic look
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2f5",
    padding: 20,
    justifyContent: "center",
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
  resultContainer: {
    marginVertical: 16,
  },
  itemContainer: {
    backgroundColor: "#f8f8f8",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
    marginBottom: 10,
  },
});
