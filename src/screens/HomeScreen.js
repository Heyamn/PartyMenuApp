import { useState } from 'react';
import { View, StyleSheet, Modal, TouchableOpacity, Text, ScrollView } from 'react-native';
import DishList from '../components/DishList';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import SelectionSummary from '../components/SelectionSummary';

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [ingredientsModalVisible, setIngredientsModalVisible] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);

  const [mainCourseTabCount, setMainCourseTabCount] = useState(0);
  const [mainCoursesSelected, setMainCoursesSelected] = useState(0);

  const handleMainCourseCountsChange = ({ tabCount, selectedCount }) => {
    setMainCourseTabCount(tabCount);
    setMainCoursesSelected(selectedCount);
  };

  const handleViewIngredients = (dish) => {
    setSelectedDish(dish);
    setIngredientsModalVisible(true);
  };

  const closeIngredientsModal = () => {
    setIngredientsModalVisible(false);
    setSelectedDish(null);
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
      <View style={styles.dishListContainer}>
        <DishList
          activeTab={activeTab}
          searchTerm={searchTerm}
          onMainCourseCountsChange={handleMainCourseCountsChange}
          onViewIngredients={handleViewIngredients}
        />
      </View>
      <View style={styles.summaryContainer}>
        <SelectionSummary
          totalSelectedDishes={mainCoursesSelected}
          // onContinuePress={handleContinuePress}
        />
      </View>

      {/* Ingredients Modal */}
      <Modal
        visible={ingredientsModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeIngredientsModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Ingredients</Text>
              <TouchableOpacity onPress={closeIngredientsModal}>
                <Text style={styles.closeButton}>✕</Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.ingredientsList}>
              {selectedDish?.ingredients?.map((ingredient, index) => (
                <View key={index} style={styles.ingredientItem}>
                  <Text style={styles.ingredientText}>• {ingredient}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 16,
  },
  dishListContainer: {
    flex: 1,
    marginBottom: 100, // Space for the summary
  },
  summaryContainer: {
    position: 'absolute', 
    bottom: 0, 
    left: 0,
    right: 0,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '365', // 1/3 of screen height
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1C1C1C',
  },
  closeButton: {
    fontSize: 24,
    color: '#7E7E7E',
    fontWeight: 'bold',
  },
  ingredientsList: {
    flex: 1,
  },
  ingredientItem: {
    paddingVertical: 8,
  },
  ingredientText: {
    fontSize: 16,
    color: '#1C1C1C',
    lineHeight: 22,
  },
});

export default HomeScreen;
