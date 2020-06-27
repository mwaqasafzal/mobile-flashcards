import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { white } from '../utils/colors'

const CustomBtn = ({ title, style, onPress, titleStyle, disabled }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={style}
      disabled={disabled}>
      <Text
        style={[{ color: white, textAlign: "center", fontSize: 20 }, titleStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );

}

export default CustomBtn