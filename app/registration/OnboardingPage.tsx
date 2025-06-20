import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'
import { useRouter } from 'expo-router'

const OnboardingPage = () => {
  const router = useRouter()

  const renderImage = (uri: string) => (
    <ImageBackground
      source={{ uri }}
      resizeMode='cover'
      style={styles.fullScreenImage}
    >
      {/* Optional overlay or caption */}
    </ImageBackground>
  )

  return (
    <Onboarding
      onSkip={() => router.replace('/registration/RegistrationOptionScreen')}
      onDone={() => router.replace('/registration/RegistrationOptionScreen')}
      bottomBarHighlight={false}
      containerStyles={{ paddingBottom: 0 }} // removes padding below buttons
      controlStatusBar={false}
      pages={[
        {
          backgroundColor: '#000', // fallback color while image loads
          image: renderImage(
            'https://images.pexels.com/photos/63991/pexels-photo-63991.jpeg?auto=compress&cs=tinysrgb&w=600'
          ),
          title: 'Book Flights Fast',
          subtitle: 'Get the best deals and compare prices in seconds.'
        },
        {
          backgroundColor: '#000',
          image: renderImage(
            'https://images.pexels.com/photos/6700143/pexels-photo-6700143.jpeg?auto=compress&cs=tinysrgb&w=600'
          ),
          title: 'Travel Smart',
          subtitle:
            'Add travel extras, track your flights, and manage bookings easily.'
        },
        {
          backgroundColor: '#000',
          image: renderImage(
            'https://images.pexels.com/photos/2253921/pexels-photo-2253921.jpeg?auto=compress&cs=tinysrgb&w=600'
          ),
          title: 'Feel the Experience',
          subtitle: 'Built for modern travelers. Good thinking, good feeling.'
        }
      ]}
    />
  )
}

const styles = StyleSheet.create({
  fullScreenImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})

export default OnboardingPage
