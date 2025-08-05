import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const DishCard = ({ dish, onToggleSelect, onViewIngredients }) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.content}>
          <Text style={styles.name}>{dish.name}</Text>
          <Text style={styles.description} numberOfLines={2}>
            {dish.description}
            <Text style={styles.readMore}> Read more</Text>
          </Text>

          <Text style={styles.category}>🍲 Ingredient</Text>

          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onToggleSelect(dish.id)}
            >
              <Text style={styles.buttonText}>
                {dish.selected ? 'Remove' : 'Add'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {dish?.category?.image && (
          <Image source={{ uri: dish.category.image }} style={styles.image} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    shadowColor: '#000',
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    paddingRight: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    color: '#444',
    marginTop: 4,
  },
  readMore: {
    fontWeight: 'bold',
  },
  category: {
    color: '#F18F01',
    marginTop: 8,
    fontWeight: '600',
  },
  actions: {
    marginTop: 12,
  },
  button: {
    backgroundColor: '#FF6600',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
});

export default DishCard;
