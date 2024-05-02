import React from 'react';
import { Animated, Easing, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import PermissionsScreen from "../components/Permissions";
import { useEffect, useMemo, useRef, useState } from "react";
import { primaryColor, secondaryColor } from "../assets/constants";
import AppButton from "../components/PrimaryButton";
import Swiper from "react-native-swiper";
import UploadingScreen from "../components/Uploading";
import AcceptanceScreen from "../components/Acceptance";

export default function UploadPage({ navigation }) {
  const [step, setStep] = useState(1);
  const swiperRef = useRef<any>(null);
  const screen2Ref = useRef<any>(null);

  const progressBarWidth = useMemo(() => 120, []);
  const widthAnimation = useMemo(() => new Animated.Value(progressBarWidth / 3), []);
  const actionText = useMemo(() => {
    if (step === 1) {
      return 'Next';
    }

    if (step === 2) {
      return 'Upload M-Pesa Statement';
    }

    return 'Accept & Continue';
  }, [step]);

  useEffect(() => {
    Animated.timing(widthAnimation, {
      toValue: (progressBarWidth / 3) * step,
      duration: 200,
      useNativeDriver: false,
      easing: Easing.cubic,
    }).start();    

    swiperRef.current!.scrollBy(step - 1, true);
  }, [step]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF9EE', paddingVertical: 40, paddingHorizontal: 20}}>
      <View style={{flex: 1}}>
        <Swiper ref={swiperRef} loop={false} showsButtons={false} showsPagination={false} scrollEnabled={false}>
          <PermissionsScreen />
          
          <UploadingScreen ref={screen2Ref} />

          <AcceptanceScreen />
        </Swiper>
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center', marginVertical: 40}}>
        <Text style={{color: 'black', fontFamily: 'Barlow-Medium', fontWeight: '500', fontSize: 14, lineHeight: 16}}>Step {step}/3</Text>
        
        <View style={{backgroundColor: primaryColor, width: progressBarWidth, height: 15, borderRadius: 8, marginTop: 10}}>
          <Animated.View style={{width: widthAnimation, height: '100%', borderRadius: 8, backgroundColor: secondaryColor}} />
        </View>
      </View>

      <AppButton
        text={actionText}
        onPress={() => {
          if (step === 2 && !screen2Ref.current.isOkToProceed()) {
            return;
          }

          if (step < 3) {
            setStep(step + 1);
          } else {
            navigation.replace('Home', { accepted: true });
          }
        }}
      />

      <View style={{alignItems: 'center', marginTop: 15}}>
        <TouchableOpacity
          style={{padding: 10}}
          onPress={() => navigation.replace('Home', { accepted: false })}
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
            {step < 3 ? 'Back to Login' : 'Deny Access'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}