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

          <View style={styles.category}>
            <Image
              height={18}
              width={18}
              style={{ marginTop: 2 }}
              source={require('../assets/ingredient.png')}
            />
            <Text style={styles.ingreText}>Ingredient</Text>
          </View>
        </View>
        <View style={styles.actions}>
          {dish?.category?.image && (
            <Image source={{ uri: dish.category.image }} style={styles.image} />
          )}
          <TouchableOpacity
            style={styles.button}
            onPress={() => onToggleSelect(dish.id)}
          >
            <View style={styles.button}>
              <Text
                style={[
                  styles.buttonText,
                  dish.selected && { color: '#FF941A' },
                ]}
              >
                {dish.selected ? 'Remove' : 'Add'}
              </Text>

              {!dish.selected && ( 
                <Image
                  source={require('../assets/Vector.png')}
                  style={styles.icon}
                />
              )}
            </View>
          </TouchableOpacity>
        </View>
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
    fontSize: 14,
    color: '#1C1C1C',
    fontFamily: 'Open Sans',
    fontWeight: '700',
  },
  description: {
    color: '#7E7E7E',
    marginTop: 4,
    fontFamily: 'Open Sans',
    fontWeight: '600',
    fontSize: 12,
  },
  readMore: {
    fontWeight: 'bold',
    color:'#1C1C1C'
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
    marginTop: -10,
    position: 'relative',
  },
  button: {
    width: 74,
    height: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    gap: 2,
    position: 'absolute',
    bottom: -10,
    left: 8,
    display: 'flex',
    flexDirection: 'row',
    marginBottom:5
  },
  buttonText: {
    color: '#73AE78',
    fontWeight: '700',
    fontSize: 14,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
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
