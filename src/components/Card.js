import { StyleSheet, Text, View } from 'react-native';

export default function Card({title}) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 150,
    backgroundColor: "#eee",
    padding: 30,
    marginTop: 20,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px #4f46e5 dashed"
  },
  text: {
    fontSize: 15,
  }
});
