import React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  logoSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    fontSize: 36,
    fontFamily: 'BarlowCondensed-SemiBold',
  },
});

export default function Header({ title }: { title: string }) {
  return (
    <View>
      <View style={styles.logoSection}>
        <Image source={require('../assets/images/logo.png')} style={{width: 200}} resizeMode="contain" />
      </View>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}