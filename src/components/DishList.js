import { useState } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DishCard from './DishCard';
import dishesData from '../data/dishes.json';

const DishList = () => {
  const navigation = useNavigation();
  const [selectedIds, setSelectedIds] = useState([]);

  const handleToggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((dishId) => dishId !== id) : [...prev, id]
    );
  };

  const enrichedDishes = dishesData.map((dish) => ({
    ...dish,
    selected: selectedIds.includes(dish.id),
  }));

  return (
    <View style={{ padding: 16 }}>
      <FlatList
        data={enrichedDishes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <DishCard
            dish={item}
            onToggleSelect={handleToggleSelect}
            onViewIngredients={() =>
              navigation.navigate('Ingredients', { dish: item })
            }
          />
        )}
      />
    </View>
  );
};

export default DishList;
