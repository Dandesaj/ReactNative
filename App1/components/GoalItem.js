import { View, Text, StyleSheet, Pressable } from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.goalListItem}>
      <Pressable
        android_ripple={{ color: "red" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => {
          pressed && styles.pressedItem;
        }}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalListItem: {
    margin: 8,
    backgroundColor: "purple",
    borderRadius: 6,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    fontSize: 16,
    padding: 8,
  },
});
