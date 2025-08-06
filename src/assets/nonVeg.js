import React from 'react';
import Svg, { Rect, Circle } from 'react-native-svg';

const NonVegIcon = ({ size = 17 }) => {
  return (
    <Svg
      width={size}
      height={(size * 16) / 17} 
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect
        x="1.04547"
        y="0.590909"
        width="14.8182"
        height="14.8182"
        rx="4.13636"
        fill="white"
      />
      <Rect
        x="1.04547"
        y="0.590909"
        width="14.8182"
        height="14.8182"
        rx="4.13636"
        stroke="#E2574C"
        strokeWidth="1.18182"
      />
      <Circle cx="8.45457" cy="8" r="3.54545" fill="#E2574C" />
    </Svg>
  );
};

export default NonVegIcon;
