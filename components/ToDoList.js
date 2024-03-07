import React from 'react';
import { Text, View } from 'react-native';

export default function ToDoList({ task }) {
  return (
    <View>
      {task.map((tasks, index) => <Text key={index}>{tasks}</Text>)}
    </View>
  );
}