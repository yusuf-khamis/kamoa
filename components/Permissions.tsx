import React, { useMemo } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";

import Header from "./Header";

const listItems = [
  {
    title: 'Unlock the power of Kamoa with your M-Pesa',
    description: 'Get access to the marketplace and help lenders see the real you by uploading a six month m-pesa statement',
  },
  {
    title: 'Get insights on your spending habits',
    description: 'Kamoa helps you understand your spending  and track your finances every time you upload a statement',
  },
  {
    title: 'Secure a higher loan limit',
    description: 'Users that share more information get access to higher loan limits with flexible payments and low interest rates',
  },
];

const textStyles = StyleSheet.create({
  listTitle: {
    color: 'black',
    fontWeight: '700',
    fontFamily: 'Barlow-Bold',
    fontSize: 16,
    lineHeight: 20,
    paddingBottom: 3,
  },
  listDescription: {
    color: '#4d4d4d',
    fontWeight: '400',
    fontFamily: 'Barlow-Regular',
    fontSize: 14,
    lineHeight: 16,
  },
});

export default function PermissionsScreen(): React.JSX.Element {
  const imgWidth = useMemo(() => {
    const dimensions = Dimensions.get('window');

    return dimensions.width * 0.5;
  }, []);

  return (
    <ScrollView>
      <Header title="Upload a 6 month M-Pesa Statement" />

      <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 30}}>
        <Image source={require('../assets/images/statements.png')} resizeMode="contain" style={{width: 203, height: 135}} />
      </View>
      
      <View style={{paddingHorizontal: 20}}>
        {
          listItems.map((item, index) => (
            <View key={item.title} style={{borderTopWidth: Number(!!index), borderColor: '#d1d1d1', paddingVertical: 8}}>
              <Text style={textStyles.listTitle}>{item.title}</Text>
              <Text style={textStyles.listDescription}>{item.description}</Text>
            </View>
          ))
        }
      </View>
    </ScrollView>
  );
}