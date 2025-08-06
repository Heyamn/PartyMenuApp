import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SelectionSummary = ({ totalSelectedDishes, onContinuePress }) => {
  return (
    <View style={styles.container}>
     
      <TouchableOpacity style={styles.summaryRow} onPress={onContinuePress}>
        <Text style={styles.summaryText}>Total Dish Selected {totalSelectedDishes}</Text>
        <Image style={styles.image} source={require('../assets/Path.png')}/>
      </TouchableOpacity>

      
      <View style={styles.separator} />

      
      <TouchableOpacity style={styles.continueButton} onPress={onContinuePress}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 5, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 }, 
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    color:'#FFFFFF',
    shadowColor: '#1C1C1C', 
    shadowOffset: { width: 1, height: 0 }, 
    shadowOpacity: 0.20, 
    shadowRadius: 5, 
    elevation: 5,
  },
  summaryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginBottom: 15,
  },
  continueButton: {
    backgroundColor: '#1C1C1C', 
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily:'Open Sans',
    fontWeight:'700',
  },
  image:{
    color:'#3D3D3D',
    width:6.3749957084656,
    height:10.857494354248088,
    marginRight:10
  }
});

export default SelectionSummary;
