import React, { PropsWithChildren, forwardRef, useCallback, useImperativeHandle, useState } from "react"
import { Image, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, View } from "react-native";
import { primaryColor } from "../assets/constants";
import Header from "./Header";
import AppButton from "./PrimaryButton";
import { pickSingle, types } from "react-native-document-picker";

const styles = StyleSheet.create({
  container: {
    borderColor: primaryColor,
    borderRadius: 20,
    borderWidth: 1,
    padding: 20,
    marginVertical: 30,
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
    fontFamily: 'Barlow-Regular',
    fontWeight: '400',
  },
  bullet: {
    color: 'black',
    marginRight: 5,
    fontSize: 24,
  },
  picker: {
    alignItems: 'center',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    backgroundColor: '#fbfbfb',
    marginTop: 20
  },
  inputTitle: {
    textAlign: 'center',
    fontWeight: '500',
    fontFamily: 'Barlow-Medium',
    color: 'black',
    fontSize: 16,
    lineHeight: 18,
  },
  inputInfo: {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Barlow-Regular',
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '400',
  },
  textfield: {
    fontFamily: 'Barlow-Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 18,
    borderBottomWidth: 1,
    borderColor: '#adadad',
    color: 'black',
  },
  textfieldLabel: {
    marginTop: 20,
    fontFamily: 'Barlow-Medium',
    fontWeight: '500',
    color: 'black',
    fontSize: 16,
    lineHeight: 18,
  },
});

function ListItem({children}: PropsWithChildren) {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Text style={styles.bullet}>{'\u2022'}</Text>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const UploadingScreen = forwardRef((_, ref) => {
  const [file, setFile] = useState<any>(null);
  const [code, setCode] = useState<string>('');

  const uploadFile = useCallback(async () => {
    const pickerResult = await pickSingle({
      type: types.pdf,
    });

    if (pickerResult) {
      setFile(pickerResult);
    }
  }, []);

  useImperativeHandle(ref, () => ({
    isOkToProceed: () => {
      if (!file || !code.trim().length) {
        ToastAndroid.showWithGravity(
          'Please verify that file is selected and code provided!',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );

        return false;
      }
      
      return true;
    },
  }));

  return (
    <ScrollView>
      <Header title="How to upload your M-Pesa Statement" />

      <View style={styles.container}>
        <ListItem>Dial *334#</ListItem>
        <ListItem>Select 7 - My Account</ListItem>
        <ListItem>Select 3 - M-PESA Statement</ListItem>
        <ListItem>Select 1 - M-PESA Statement</ListItem>
        <ListItem>Select 1 - Request Statement</ListItem>
        <ListItem>Select 1 - Full Statement</ListItem>
        <ListItem>Select 4 - 6 Months Statement</ListItem>
        <ListItem>Select 1 - Enter e-mail address</ListItem>
        <ListItem>Enter your M-PESA Pin to receive your statement</ListItem>

        <View style={styles.picker}>
          <Image source={require('../assets/images/document-upload.png')} resizeMode="contain" style={{marginBottom: 5, width: 40}} />
          <Text style={styles.inputTitle}>Upload M-Pesa Statement</Text>
          <Text style={styles.inputInfo}>Select M-Pesa statement from your phone</Text>
          <View style={{marginTop: 10}}>
            <AppButton text="Select" alternate onPress={uploadFile} />
          </View>
          {file && <Text style={{...styles.inputInfo, marginTop: 10}}>{file.name}</Text>}
        </View>

        <Text style={styles.textfieldLabel}>Enter the code you received</Text>

        <TextInput
          style={styles.textfield}
          placeholder="243456"
          keyboardType="numeric"
          placeholderTextColor="#adadad"
          returnKeyLabel="Done"
          returnKeyType="done"
          value={code}
          onChangeText={setCode}
        />
      </View>
    </ScrollView>
  );
});

export default UploadingScreen;
