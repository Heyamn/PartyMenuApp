// src/screens/IngredientScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IngredientScreen = ({ route }) => {
  const { dish } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{dish.name}</Text>
      <Text style={styles.description}>{dish.description}</Text>
      {/* You can expand this with ingredients, category, etc. */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#555',
  },
});

export default IngredientScreen;
