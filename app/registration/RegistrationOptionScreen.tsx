import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useRouter } from 'expo-router'

const RegistrationOptionScreen = () => {
  const router = useRouter()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        {/* Logo */}
        {/* <Image
          source={require('../../assets/images/Logo.png')}
          alt='Logo'
          resizeMode='contain'
          style={styles.logo}
        /> */}

        {/* Welcome Text */}
        <Text style={styles.title}>Welcome to SpahTravels ! 👋🏼</Text>
        <Text style={styles.subtitle}>Travelers Main Companion</Text>

        {/* Sign Up Buttons */}
        <View style={styles.buttonGroup}>
          <SocialButton icon='apple' text='Sign Up with Apple' onPress={''} />
          <SocialButton
            icon='facebook'
            text='Sign Up with Facebook'
            color='#1877F2'
            onPress={() => router.push('/registration/PinScreen')}
          />
          <SocialButton
            icon='google'
            text='Sign Up with Google'
            color='#EA4335'
            onPress={() => router.push('/registration/VerificationScreen')}
          />
          <SocialButton
            icon='envelope'
            text='Sign Up with Email'
            color='#333'
            onPress={() => router.push('/registration/RegistrationScreen')}
          />
        </View>

        {/* Divider */}
        <Text style={styles.orText}>OR</Text>

        {/* Log In Button */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log In to my Account</Text>
        </TouchableOpacity>

        {/* Footer */}
        <Text style={styles.footerText}>
          By continuing, you agree to SpahTravels{' '}
          <Text style={styles.linkText}>Terms of Service</Text> and{' '}
          <Text style={styles.linkText}>Privacy Policy</Text>.
        </Text>
      </View>
    </SafeAreaView>
  )
}

const SocialButton = ({ icon, text, onPress, color = '#000' }) => (
  <TouchableOpacity style={styles.socialButton} onPress={onPress}>
    <Icon name={icon} size={20} color={color} style={styles.socialIcon} />
    <Text style={styles.socialText}>{text}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  innerContainer: {
    padding: 20,
    flex: 1,
    justifyContent: 'center'
  },
  logo: {
    height: 50,
    width: 50,
    alignSelf: 'center',
    marginBottom: 30
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 19,
    fontWeight: '800',
    color: '#2a9aa8',
    textAlign: 'center',
    marginVertical: 10
  },
  buttonGroup: {
    marginTop: 20
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#eee',
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
    marginBottom: 10
  },
  socialIcon: {
    marginRight: 10,
    width: 24,
    textAlign: 'center'
  },
  socialText: {
    // alignSelf: 'center',
    fontSize: 16,
    color: '#000'
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    color: '#aaa'
  },
  loginButton: {
    backgroundColor: '#2a9aa8',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600'
  },
  footerText: {
    fontSize: 13,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
    lineHeight: 18
  },
  linkText: {
    color: '#2a9aa8',
    textDecorationLine: 'underline'
  }
})

export default RegistrationOptionScreen
