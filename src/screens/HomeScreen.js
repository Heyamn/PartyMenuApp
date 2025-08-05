import  { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DishList from '../components/DishList';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';   

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <View style={styles.container}>
    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <DishList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 16,
  },
});

export default HomeScreen;
