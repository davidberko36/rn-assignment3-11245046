import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './Components/Searchbar.js';

export default function App() {
  return (
    <View style={styles.container}>
    <SearchBar  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef7eb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
