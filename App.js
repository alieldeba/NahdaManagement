import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./src/components/Header"
import Card from "./src/components/Card"

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Card title="Blogs" />
      <Card title="Doctors" />
      <Card title="Videos" />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    margin: "auto",
    marginTop: 60,
  },
});
