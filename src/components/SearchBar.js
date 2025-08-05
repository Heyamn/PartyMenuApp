import { View, TextInput, StyleSheet, Image } from 'react-native';

const SearchBar = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Group1000007397.png')}
        size={12} 
        style={styles.leftIcon}
      />
      <TextInput
        style={styles.input}
        placeholder="Search dish for your party..."
        placeholderTextColor="#606060"
        value={value}
        onChangeText={onChangeText}
      />
      <Image
        source={require('../assets/fi_711319.png')} 
        size={20}
        style={styles.rightIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ADADAD',
    marginHorizontal: 16,
    height: 48,
    paddingHorizontal: 18,
  },
  leftIcon: {
    width: 16,
    height: 16,
    marginRight: 12,
  },
  rightIcon: {
    width: 20,
    height: 20,
    marginLeft: 12,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#000000',
    fontFamily: 'Open Sans',
    fontWeight: '500',
  },
});

export default SearchBar;