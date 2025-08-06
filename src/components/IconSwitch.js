import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';

const IconSwitch = ({ icon, value, onToggle, trackColor = '#eee', activeColor = '#FF941A' }) => {
  const anim = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [value]);

 
  const translateX = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 22],
  });

  const trackBgColor = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [trackColor, activeColor],
  });

  return (
    <TouchableWithoutFeedback onPress={() => onToggle(!value)}>
      <View style={styles.container}>
        <Animated.View style={[styles.track, { backgroundColor: trackBgColor }]} />
        <Animated.View style={[styles.iconWrapper, { transform: [{ translateX }] }]}> 
          {icon}
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 54,
    height: 32,
    justifyContent: 'center',
    position: 'relative',
  },
  track: {
    width: 54,
    height: 8,
    borderRadius: 4,
    position: 'absolute',
    top: '50%',
    marginTop: -4,
  },
  iconWrapper: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
  },
});

export default IconSwitch;