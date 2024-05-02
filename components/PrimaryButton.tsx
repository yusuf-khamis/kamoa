import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { primaryColor } from "../assets/constants";

const styles = StyleSheet.create({
  button: {
    backgroundColor: primaryColor,
    color: 'black',
    padding: 20,
    borderRadius: 8,
    width: '100%'
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    textTransform: 'uppercase',
    fontFamily: 'BarlowCondensed-Bold'
  },
});

export default function AppButton({text, onPress, alternate}: {text: string, onPress?: () => void, alternate?: boolean}) {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        paddingHorizontal: alternate ? 30 : styles.button.padding,
        paddingVertical: alternate ? 15 : styles.button.padding,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          ...styles.text,
          color: alternate ? 'white' : styles.text.color,
          fontSize: alternate ? 16 : styles.text.fontSize,
          lineHeight: alternate ? 18 : styles.text.lineHeight,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}