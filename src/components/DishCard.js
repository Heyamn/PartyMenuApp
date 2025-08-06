import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import VegIcon from '../assets/veg';
import NonVegIcon from '../assets/nonVeg';

const DishCard = ({ dish, onToggleSelect, onViewIngredients, onReadMore }) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.content}>
          <View style={styles.nameRow}>
            <Text style={styles.name}>{dish.name}</Text>
            {dish.type === 'VEG' ? (
              <VegIcon size={16} />
            ) : (
              <NonVegIcon size={16} />
            )}
          </View>
          <TouchableOpacity onPress={onReadMore}>
            <Text style={styles.description} numberOfLines={2}>
              {dish.description}

              <Text style={styles.readMore}> Read more</Text>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.category} onPress={onViewIngredients}>
            <Image
              height={18}
              width={18}
              style={{ marginTop: 2 }}
              source={require('../assets/ingredient.png')}
            />
            <Text style={styles.ingreText}>Ingredient</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.actions}>
          {dish?.category?.image && (
            <Image source={{ uri: dish.category.image }} style={styles.image} />
          )}
          <TouchableOpacity
            style={styles.button}
            onPress={() => onToggleSelect(dish.id)}
          >
            <Text
              style={[styles.buttonText, dish.selected && { color: '#FF941A' }]}
            >
              {dish.selected ? 'Remove' : 'Add'}
            </Text>
            {!dish.selected && (
              <Image
                source={require('../assets/Vector.png')}
                style={styles.icon}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: '#e0e0e0',
          width: '98%',
          marginTop: 25,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    paddingRight: 8,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  name: {
    fontSize: 14,
    color: '#1C1C1C',
    fontFamily: 'Open Sans',
    fontWeight: '700',
  },
  description: {
    display: 'flex',
    alignItems: 'center',
    color: '#7E7E7E',
    marginTop: 4,
    fontFamily: 'Open Sans',
    fontWeight: '600',
    fontSize: 12,
  },
  readMore: {
    fontFamily: 'Open Sans',
    fontWeight: '600',
    color: '#1C1C1C',
  },
  category: {
    color: '#FF8800',
    fontFamily: 'Open Sans',
    marginTop: 8,
    fontWeight: '700',
    fontSize: 12,
    gap: 4,
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
  },
  actions: {
    marginTop: -15,
    position: 'relative',
  },
  button: {
    width: 74,
    height: 30,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
    position: 'absolute',
    bottom: -10,
    left: 13,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 6,
    paddingTop: 6,
    paddingRight: 8,
    paddingBottom: 6,
    paddingLeft: 8,
    shadowColor: '#1C1C1C',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: '#73AE78',
    fontWeight: '600',
    fontSize: 14,
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: '#eee',
  },
  ingreText: {
    fontFamily: 'Open Sans',
    color: '#FF8800',
    fontSize: 12,
    fontWeight: 700,
  },
});

export default DishCard;
