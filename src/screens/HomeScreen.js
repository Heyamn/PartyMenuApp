import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DishList from '../components/DishList';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const [mainCourseTabCount, setMainCourseTabCount] = useState(0);
  const [mainCoursesSelected, setMainCoursesSelected] = useState(0);

  const handleMainCourseCountsChange = ({ tabCount, selectedCount }) => {
    setMainCourseTabCount(tabCount);
    setMainCoursesSelected(selectedCount);
  };

  return (
    <View style={styles.container}>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <HeaderTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        mainCourseTabCount={mainCourseTabCount}
        mainCoursesSelected={mainCoursesSelected}
      />
      <DishList
        activeTab={activeTab}
        searchTerm={searchTerm}
        onMainCourseCountsChange={handleMainCourseCountsChange}
      />
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
