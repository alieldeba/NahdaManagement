import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
      <Text style={styles.text}>Nahda Management System</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#1f2937",
    fontSize: 20,
    marginBottom: 30,
  },
});
