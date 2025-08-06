import { FlatList, Text, Image, View, StyleSheet } from 'react-native';
import DishCard from './DishCard';
import dishesData from '../data/dishes.json';

const DishList = ({
  onMainCourseCountsChange,
  onReadMore,
  onViewIngredients,
  selectedIds,
  setSelectedIds,
  vegFilter,
  nonVegFilter,
}) => {
  const handleToggleSelect = id => {
    const updated = selectedIds.includes(id)
      ? selectedIds.filter(dishId => dishId !== id)
      : [...selectedIds, id];

    setSelectedIds(updated);

    const selectedMainCourseDishes = dishesData.filter(
      dish => dish.mealType === 'MAIN COURSE' && updated.includes(dish.id),
    );

    const totalMainCourseDishes = dishesData.filter(
      dish => dish.mealType === 'MAIN COURSE',
    ).length;

    onMainCourseCountsChange({
      tabCount: totalMainCourseDishes,
      selectedCount: selectedMainCourseDishes.length,
    });
  };

  const enrichedDishes = dishesData
    .filter(dish => {
      if (!vegFilter && !nonVegFilter) return true; // Show all if both are off
      if (vegFilter && nonVegFilter) return true; // Show all if both are on
      if (vegFilter) return dish.type === 'VEG';
      if (nonVegFilter) return dish.type === 'NON-VEG';
      return true;
    })
    .map(dish => ({
      ...dish,
      selected: selectedIds.includes(dish.id),
    }));

  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>North Indian</Text>
        <Image 
          source={require('../assets/upArrow.png')} 
          style={styles.arrowIcon}
        />
      </View>
      <FlatList
        data={enrichedDishes}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <DishCard
            dish={item}
            onToggleSelect={handleToggleSelect}
            onReadMore={() => onReadMore(item)}
            onViewIngredients={() => onViewIngredients(item)}
          />
        )}
        contentContainerStyle={{ padding: 16 }}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  arrowIcon: {
    width: 16,
    height: 16,
    tintColor: '#333',
  },
});

export default DishList;
