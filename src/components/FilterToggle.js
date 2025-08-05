import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const FilterToggle = ({ isVegOnly, onToggle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Veg Only</Text>
      <Switch
        value={isVegOnly}
        onValueChange={onToggle}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isVegOnly ? '#007AFF' : '#f4f3f4'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    marginRight: 10,
    fontSize: 16,
  },
});

export default FilterToggle;
