import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from 'react-native';

const HeaderTabs = () => {
  const [activeCategory, setActiveCategory] = useState('Main Course');
  const [isEnabledGreen, setIsEnabledGreen] = useState(false);
  const [isEnabledRed, setIsEnabledRed] = useState(false);

  const toggleSwitchGreen = () => setIsEnabledGreen(previousState => !previousState);
  const toggleSwitchRed = () => setIsEnabledRed(previousState => !previousState);

  
  const categories = [
    { name: 'Starter', count: 0 },
    { name: 'Main Course', count: 0 },
    { name: 'Desert', count: 0 },
    { name: 'Sides', count: 0 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.name}
            style={[
              styles.categoryButton,
              activeCategory === category.name && styles.activeCategoryButton,
            ]}
            onPress={() => setActiveCategory(category.name)}
          >
            <Text
              style={[
                styles.categoryButtonText,
                activeCategory === category.name && styles.activeCategoryButtonText,
              ]}
            >
              {category.name} {category.count}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.selectionRow}>
        <Text style={styles.selectionText}>Main Courses Selected ({categories.find(cat => cat.name === 'Main Course').count})</Text>
        <View style={styles.toggleContainer}>
          
          <Switch
            trackColor={{ false: '#E0E0E0', true: '#B3E0BD' }}
            thumbColor={isEnabledGreen ? '#4CAF50' : '#FFFFFF'} 
            ios_backgroundColor="#E0E0E0" 
            onValueChange={toggleSwitchGreen}
            value={isEnabledGreen}
            style={styles.switch}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} 
          />
         
          <Switch
            trackColor={{ false: '#E0E0E0', true: '#FFC0CB' }}
            thumbColor={isEnabledRed ? '#F44336' : '#FFFFFF'} 
            ios_backgroundColor="#E0E0E0" 
            onValueChange={toggleSwitchRed}
            value={isEnabledRed}
            style={styles.switch}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} 
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:16,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    paddingHorizontal: 16, 
    fontFamily: 'Open Sans',
    fontWeight: '600',
    color:'#1C1C1C',
    borderRadius:6,
    paddingTop:6,
    paddingRight:8,
    paddingBottom:6,
    paddingLeft:8,
    gap:8
  },
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    borderColor: '#d0d0d0',
    borderWidth: 1,
  },
  activeCategoryButton: {
    backgroundColor: '#FF941A', 
    borderColor: '#FF941A',
  },
  categoryButtonText: {
    color: '#1C1C1C',
    fontWeight: '600',
    fontFamily: 'Open Sans',
  },
  activeCategoryButtonText: {
    color: '#FFFFFF',
    fontWeight: 'semibold',
    fontFamily: 'Open Sans',
  },
  selectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16, 
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    gap:44,
  },
  selectionText: {
    width:177,
    height:19,
    fontSize: 14,
    color: '#1C1C1C',
    fontWeight: '600',
    fontFamily: 'Open Sans',
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:6,
  },
  switchGreen: {
    transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
    marginRight: 5,
  },
  switchRed: {
    transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
  },
});

export default HeaderTabs;
