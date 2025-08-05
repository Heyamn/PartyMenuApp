import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Octicons from 'react-native-vector-icons/Ionicons';

const SearchBar = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search dish for your party......"
        placeholderTextColor="#888"
        value={value}
        onChangeText={onChangeText}
      />
      <Octicons name="search" size={24} color="#000" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderRadius: 25,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    marginHorizontal: 16,
    marginVertical: 10,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },
  searchIcon: {
    marginLeft: 8,
  },
});

export default SearchBar;
