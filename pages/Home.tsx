import React from 'react';
import { SafeAreaView, Text } from "react-native";
import AppButton from "../components/PrimaryButton";

export default function HomePage({route: { params }, navigation}) {
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30}}>
      <Text
        style={{
          color: 'black',
          fontFamily: 'Barlow-Medium',
          fontWeight: '500',
          fontSize: 24,
          lineHeight: 24,
          textAlign: 'center',
          marginBottom: 50,
        }}
      >
        {
          params.accepted
            ? 'Your M-Pesa statements have been successfully uploaded for review!'
            : 'You exited the screen without successfully uploading your statements!'
        }
      </Text>

      <AppButton
        text={`${params.accept ? 'Try' : 'Upload'} Again`}
        onPress={() => navigation.replace('Upload')}
      />
    </SafeAreaView>
  );
}