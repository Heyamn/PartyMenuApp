import { FlatList, Text } from 'react-native';
import DishCard from './DishCard';
import dishesData from '../data/dishes.json';

const DishList = ({ onMainCourseCountsChange, onReadMore, onViewIngredients, selectedIds, setSelectedIds }) => {

  const handleToggleSelect = (id) => {
    const updated = selectedIds.includes(id)
      ? selectedIds.filter((dishId) => dishId !== id)
      : [...selectedIds, id];

    setSelectedIds(updated);

    const selectedMainCourseDishes = dishesData.filter(
      (dish) => dish.mealType === 'MAIN COURSE' && updated.includes(dish.id)
    );

    const totalMainCourseDishes = dishesData.filter(
      (dish) => dish.mealType === 'MAIN COURSE'
    ).length;

    onMainCourseCountsChange({
      tabCount: totalMainCourseDishes,
      selectedCount: selectedMainCourseDishes.length,
    });
  };

  const enrichedDishes = dishesData.map((dish) => ({
    ...dish,
    selected: selectedIds.includes(dish.id),
  }));

  return (
    <>
    <Text>North Indian</Text>
    <FlatList
      data={enrichedDishes}
      keyExtractor={(item) => item.id.toString()}
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

export default DishList;
