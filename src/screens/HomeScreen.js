import { useState, useRef } from 'react';
import { View, StyleSheet, Modal, TouchableOpacity, Text, ScrollView, Image } from 'react-native';
import DishList from '../components/DishList';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import SelectionSummary from '../components/SelectionSummary';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [ingredientsModalVisible, setIngredientsModalVisible] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);

  const [mainCourseTabCount, setMainCourseTabCount] = useState(0);
  const [mainCoursesSelected, setMainCoursesSelected] = useState(0);
  const [selectedIds, setSelectedIds] = useState([]);

  const handleMainCourseCountsChange = ({ tabCount, selectedCount }) => {
    setMainCourseTabCount(tabCount);
    setMainCoursesSelected(selectedCount);
  };

  // Open popup for Read More
  const handleReadMore = (dish) => {
    setSelectedDish(dish);
    setIngredientsModalVisible(true);
  };

  // Navigate to IngredientScreen for Ingredients button
  const handleViewIngredients = (dish) => {
    navigation.navigate('Ingredients', { dish });
  };

  // Add this handler to toggle selection for the modal and update counts
  const handleToggleSelect = (dishId) => {
    const updated = selectedIds.includes(dishId)
      ? selectedIds.filter((id) => id !== dishId)
      : [...selectedIds, dishId];
    setSelectedIds(updated);
    setSelectedDish((prev) => prev ? { ...prev, selected: !prev.selected } : prev);

    // Update main course counts as in DishList
    const dishesData = require('../data/dishes.json');
    const selectedMainCourseDishes = dishesData.filter(
      (dish) => dish.mealType === 'MAIN COURSE' && updated.includes(dish.id)
    );
    const totalMainCourseDishes = dishesData.filter(
      (dish) => dish.mealType === 'MAIN COURSE'
    ).length;
    handleMainCourseCountsChange({
      tabCount: totalMainCourseDishes,
      selectedCount: selectedMainCourseDishes.length,
    });
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
          onReadMore={handleReadMore}
          onViewIngredients={handleViewIngredients}
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds}
        />
      </View>
      <View style={styles.summaryContainer}>
        <SelectionSummary
          totalSelectedDishes={mainCoursesSelected}
        />
      </View>
      {/* Read More Modal - Custom UI */}
      <Modal
        visible={ingredientsModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeIngredientsModal}
      >
        <TouchableOpacity
          style={customModalStyles.overlay}
          activeOpacity={1}
          onPress={closeIngredientsModal}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={customModalStyles.bottomSheet}
            onPress={() => {}}
          >
            {selectedDish?.category?.image ? (
              <Image
                source={{ uri: selectedDish.category.image }}
                style={customModalStyles.dishImage}
                resizeMode="contain"
              />
            ) : (
              <Image source={require('../assets/ingre.png')} style={customModalStyles.dishImage} resizeMode="contain" />
            )}
            <View style={customModalStyles.content}>
              <View style={customModalStyles.headerRow}>
                <Text style={customModalStyles.dishName}>{selectedDish?.name}</Text>
                <TouchableOpacity style={customModalStyles.removeButton} onPress={() => handleToggleSelect(selectedDish.id)}>
                  <Text style={customModalStyles.removeButtonText}>{selectedIds.includes(selectedDish?.id) ? 'Remove' : 'Add'}</Text>
                </TouchableOpacity>
              </View>
              <Text style={customModalStyles.categoryText}>{selectedDish?.category?.name}</Text>
              <Text style={customModalStyles.description}><Text style={{fontWeight:'bold'}}>North Indian </Text>{selectedDish?.description}</Text>
              <TouchableOpacity style={customModalStyles.ingredientButton} onPress={() => handleViewIngredients(selectedDish)}>
                <Image source={require('../assets/ingredient.png')} style={customModalStyles.ingredientIcon} />
                <Text style={customModalStyles.ingredientText}>Ingredient</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={closeIngredientsModal} style={customModalStyles.closeButton}>
              <Text style={{ fontSize: 24, color: '#7E7E7E', fontWeight: 'bold' }}>✕</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </TouchableOpacity>
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

const customModalStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
  },
  bottomSheet: {
    width: '100%',
    height: 365,
    backgroundColor: '#fff',
    paddingBottom: 16,
    alignItems: 'center',
    position: 'relative',
    alignSelf: 'flex-end',
    overflow: 'hidden',
  },
  dishImage: {
    width: '100%',
    height: 140,
    marginBottom: 12,
    resizeMode: 'contain',
  },
  content: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 8,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  dishName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1C1C1C',
    flex: 1,
  },
  removeButton: {
    backgroundColor: '#FFF5EA',
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginLeft: 12,
  },
  removeButtonText: {
    color: '#FF941A',
    fontWeight: '700',
    fontSize: 16,
  },
  categoryText: {
    color: '#FF941A',
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 4,
  },
  description: {
    color: '#1C1C1C',
    fontSize: 14,
    marginBottom: 16,
  },
  ingredientButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: 8,
  },
  ingredientIcon: {
    width: 22,
    height: 22,
    marginRight: 6,
    marginTop: 2,
  },
  ingredientText: {
    color: '#FF941A',
    fontWeight: '700',
    fontSize: 16,
  },
  closeButton: {
    position: 'absolute',
    top: 8,
    right: 12,
    zIndex: 10,
  },
});

export default HomeScreen;
