import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native'
import { useRouter } from 'expo-router'

const index = () => {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1585484930098-0c978ecd8a68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFpcnBsYW5lfGVufDB8fDB8fHww'
        }}
        style={styles.backgroundImage}
        resizeMode='cover'
      >
        <View style={styles.overlay}>
          {/* Headline */}
          <View style={styles.headingContainer}>
            <Text style={styles.headingText}>
              SAFE FLIGHT {'\n'}
              <Text style={styles.highlighted}>SAFE THNKING</Text>
              {'\n'}SAFE FEELING.
            </Text>
          </View>

          {/* Subtext */}
          <Text style={styles.subText}>
            Streamlines where{'\n'}reservations with a{'\n'}wide range hassle.
          </Text>

          {/* Start Button */}
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => router.push('/registration/OnboardingPage')}
            // onPress={() => router.push('/(tabs)/Home')}
          >
            <Text style={styles.startButtonText}>START</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 60,
    paddingHorizontal: 20
  },
  headingContainer: {
    marginTop: 40
  },
  headingText: {
    fontSize: 25,
    fontWeight: '800',
    fontFamily: 'Poppins_800ExtraBold',
    color: '#000',
    lineHeight: 42
  },
  highlighted: {
    backgroundColor: '#2a9aa8',
    color: '#fff',
    paddingHorizontal: 6
  },
  subText: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 20,
    lineHeight: 20
  },
  startButton: {
    backgroundColor: '#2a9aa8',
    width: 100,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginBottom: 30
  },
  startButtonText: {
    color: '#000',
    fontWeight: '900'
  }
})

export default index
