import React from "react";
import { View, Text, StyleSheet } from "react-native";

const tasks = [
  { key: 1, name: 'Practice coding' },
  { key: 2, name: 'Cook' },
  { key: 3, name: 'Excercise' },
  { key: 4, name: 'Read my Bible' },
  { key: 5, name: 'Go through my emails' },
  { key: 6, name: 'Clean my room' },
  { key: 7, name: 'Take a walk' },
  { key: 8, name: 'Do my laundry' },
  { key: 9, name: 'Water the Plants' },
  { key: 10, name: 'Yoga Session' },
  { key: 11, name: 'Email Correspondence' },
  { key: 12, name: 'Plan a Trip' },
  { key: 13, name: 'Budget Review' },
  { key: 14, name: 'Workout Routine' },
  { key: 15, name: 'Try a new project' },
];

export default function OngoingTasks() {
    return (
        <View style={styles.container}>
            <Text style={styles.biggerText}>Ongoing Tasks</Text>
            <View style={styles.listContainer}>
                {tasks.map(task => (
                    <View style={styles.itemTaskContainer} key={task.key}>
                        <Text style={styles.bigText}>{task.name}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
    },
    listContainer: {
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "space-between",
    },
    itemTaskContainer: {
        width: 380,
        marginBottom: 20,
        padding: 25,
        backgroundColor: "#fff",
        borderWidth: 3,
        borderColor: '#E8D1BA',
        borderRadius: 20,
        height: 100
    },
    bigText: {
        fontWeight: "bold",
        fontSize: 15,
    },
    biggerText: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 6,
    },
});
