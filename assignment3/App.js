import { View, Text, StyleSheet, ScrollView } from "react-native";
import Frame1 from "./Components/Frame1.js";
import SearchBar from "./Components/Searchbar.js";
import ActivityBox from "./Components/ActivityBox.js";
import OngoingTasks from "./Components/OngoingTask.js"


export default function App() {
  return (
    <>
        <ScrollView>
          <View style={styles.container}>
            <Frame1/>
            <SearchBar/>
            <ActivityBox/>
            <OngoingTasks/>
          </View>
        </ScrollView>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 52,
    padding: 20,
    backgroundColor:"#F7F0E8"
  }
});