import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  PermissionsAndroid,
  Platform,
} from "react-native";
// import BleManager from "react-native-ble-manager";

export default function SummaryPage({ navigation, route }) {
  const { formData, images, additionalData } = route.params;

  // useEffect(() => {
  //   const startBluetooth = async () => {
  //     if (Platform.OS === "android" && Platform.Version >= 31) {
  //       try {
  //         const granted = await PermissionsAndroid.requestMultiple([
  //           PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
  //           PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
  //           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //         ]);

  //         if (
  //           granted["android.permission.BLUETOOTH_SCAN"] ===
  //             PermissionsAndroid.RESULTS.GRANTED &&
  //           granted["android.permission.BLUETOOTH_CONNECT"] ===
  //             PermissionsAndroid.RESULTS.GRANTED &&
  //           granted["android.permission.ACCESS_FINE_LOCATION"] ===
  //             PermissionsAndroid.RESULTS.GRANTED
  //         ) {
  //           BleManager.start({ showAlert: false });
  //         } else {
  //           Alert.alert(
  //             "Permission Denied",
  //             "Bluetooth permissions are required."
  //           );
  //         }
  //       } catch (err) {
  //         console.warn(err);
  //       }
  //     } else {
  //       BleManager.start({ showAlert: false });
  //     }
  //   };

  //   startBluetooth();
  // }, []);

  // const handlePrint = async () => {
  //   try {
  //     const printerId = "0017E9D82DB8"; // Replace with your printer's MAC address F0F8F299C8CB

  //     // Connect to the printer
  //     await BleManager.connect(printerId);

  //     // Prepare data to print
  //     const printData = `
  //       Nombor Plat: ${formData.platenumber}
  //       No Cukai Jalan: ${formData.roadtax}
  //       Jenis Badan: ${formData.jenisbadan}
  //       Jenama Kereta: ${formData.jenamakereta}
  //       Model Kereta: ${formData.modelkereta}
  //       Perintah: ${additionalData.perintah}
  //       Butiran Undang-Undang: ${additionalData.butiranundang}
  //       Jalan: ${additionalData.jalan}
  //     `;

  //     // Replace 'SERVICE_UUID' and 'CHARACTERISTIC_UUID' with actual UUIDs for your printer
  //     const serviceUUID = "38EB4A80C57011E395070002A5D5C51B";
  //     const characteristicUUID = "38EB4A81C57011E395070002A5D5C51B";

  //     // Send data to the printer
  //     await BleManager.write(
  //       printerId,
  //       serviceUUID,
  //       characteristicUUID,
  //       printData
  //     );

  //     Alert.alert("Success", "Print job sent to the printer.");
  //   } catch (error) {
  //     console.error(error);
  //     Alert.alert("Error", "Failed to connect to the printer.");
  //   }
  // };

  const handlePrint = () => {
    navigation.navigate("FinalCapture");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>RUMUSAN KOMPAUN</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nombor Plat:</Text>
        <Text style={styles.value}>{formData.platenumber}</Text>

        <Text style={styles.label}>No Cukai Jalan:</Text>
        <Text style={styles.value}>{formData.roadtax}</Text>

        <Text style={styles.label}>Jenis Badan:</Text>
        <Text style={styles.value}>{formData.jenisbadan}</Text>

        <Text style={styles.label}>Jenama Kereta:</Text>
        <Text style={styles.value}>{formData.jenamakereta}</Text>

        <Text style={styles.label}>Model Kereta:</Text>
        <Text style={styles.value}>{formData.modelkereta}</Text>

        <Text style={styles.label}>Perintah:</Text>
        <Text style={styles.value}>{additionalData.perintah}</Text>

        <Text style={styles.label}>Butiran Undang-Undang:</Text>
        <Text style={styles.value}>{additionalData.butiranundang}</Text>

        <Text style={styles.label}>Jalan:</Text>
        <Text style={styles.value}>{additionalData.jalan}</Text>
      </View>

      <View style={styles.imageSection}>
        <Text style={styles.imageHeader}>Gambar</Text>
        <View style={styles.imageContainer}>
          {images.length > 0 ? (
            images.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image }}
                style={styles.image}
                resizeMode="cover"
              />
            ))
          ) : (
            <Text style={styles.noImageText}>Tiada Gambar Ditangkap</Text>
          )}
        </View>
      </View>

      <TouchableOpacity style={styles.printButton} onPress={handlePrint}>
        <Text style={styles.printButtonText}>Cetak</Text>
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
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: "#555",
    marginBottom: 15,
    marginLeft: 10,
  },
  imageSection: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 5,
    elevation: 2,
  },
  noImageText: {
    color: "#777",
    textAlign: "center",
    marginTop: 10,
  },
  printButton: {
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
  printButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
