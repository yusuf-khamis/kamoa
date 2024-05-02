import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import Header from "./Header";

const listItems = [
  {
    title: 'Personal info',
    description: 'We collect personal info to prevent fraud and also protect you from it. ie Phone number, email, name',
  },
  {
    title: 'Approximate location',
    description: 'We look at the approximate location to help us show you relevant infomation. ',
  },
  {
    title: 'App info and performance',
    description: 'Our app runs in many devices and this help us optimise for every type of device.',
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

export default function AcceptanceScreen() {
  return (
    <ScrollView>
      <Header title="Accept Permissions" />

      <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 30}}>
        <Image source={require('../assets/images/accept.png')} resizeMode="contain" style={{width: 203, height: 135}} />
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

      <TouchableOpacity
          style={{padding: 10, marginHorizontal: 10}}
          onPress={() => {
            Linking.openURL('https://play.google.com/store/apps/details?id=com.akrod.kamoa');
          }}
        >
          <Text style={{
            color: 'black',
            fontSize: 16,
            lineHeight: 16,
            fontFamily: 'BarlowCondensed-Regular',
            fontWeight: '400',
            textDecorationLine: 'underline',
          }}
          >
            Get more info from Google Play
          </Text>
        </TouchableOpacity>
    </ScrollView>
  );
}
