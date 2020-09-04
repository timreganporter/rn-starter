import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 15 },
    { name: 'Friend #2', age: 18 },
    { name: 'Friend #3', age: 22 },
    { name: 'Friend #4', age: 24 },
    { name: 'Friend #5', age: 25 },
    { name: 'Friend #6', age: 26 },
    { name: 'Friend #7', age: 26 },
    { name: 'Friend #8', age: 27 },
    { name: 'Friend #9', age: 28 },
  ];

  return (
    <FlatList
      data={friends}
      keyExtractor={friend => friend.name}
      renderItem={ ({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;