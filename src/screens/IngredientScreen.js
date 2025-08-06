import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const IngredientScreen = () => {
  const navigation = useNavigation();
  const dish = {
    name: 'Fried Avocado Tacos...... ',
    description:
      'Panco fried avocado, Mayo, panco fried avocado, Mayo, Panco fried avocado, avocado, Mayo, Panco fried avocado...',
    image: require('../assets/ingre.png'),
  };

  const ingredients = [
    { name: 'Cauliflower', quantity: '01 Pc' },
    { name: 'Mustard oil', quantity: '1/2 litres' },
     { name: 'Cauliflower', quantity: '01 Pc' },
    { name: 'Tomato', quantity: '01 Pc' },
    
  ];

  return (
    <SafeAreaView style={styles.container}>
    <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:10, marginTop:30, marginLeft:20}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={require('../assets/Group1000007397.png')}
        size={12} 
        style={styles.leftIcon}
      />
      </TouchableOpacity>
      <Text style={{fontSize:17, fontWeight:'700', color:'#242424'}}>Ingredient list</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerSection}>
          <View style={styles.leftColumn}>
            <Text style={styles.dishName}>{dish.name}</Text>
            <Text style={styles.description} numberOfLines={3}>
              {dish.description}
            </Text>
            <View style={{marginTop:70}}>
               <Text style={styles.ingredientsTitle}>Ingredients</Text>
          <Text style={styles.servesText}>For 2 people</Text>
             <View
                style={{
                  height: 1,
                  backgroundColor: '#e0e0e0',
                  width:'180%'
                }}
              />
            </View>
          </View>

          <Image
            source={dish.image}
            style={styles.dishImage}
            resizeMode='contain'
          />
        </View>
        <View style={styles.ingredientsBox}>
           
          {ingredients.map((item, index) => (
            <View key={index} style={styles.ingredientRow}>
              <Text style={styles.ingredientName}>{item.name}</Text>
              <Text style={styles.ingredientQuantity}>{item.quantity}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerSection: {
    flexDirection: 'row',
    marginVertical: 16,
    paddingVertical: 16,
    marginLeft:20
  },
  leftColumn: {
    flex: 1,
    justifyContent: 'center',
    marginTop:30,
  
  },
  dishName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 13,
    color: '#666',
    lineHeight: 20,
    width:'100%'
  },
 dishImage: {
  width: 180,
  height: 260,
  
},
  ingredientsBox: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  ingredientsTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 6,
  },
  servesText: {
    fontSize: 14,
    color: 'black',
    marginBottom: 16,
  },
  ingredientRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  
  },
  ingredientName: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  ingredientQuantity: {
    fontSize: 16,
    color: '#555',
    fontWeight: '500',
  },
});

export default IngredientScreen;
