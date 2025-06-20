import { FontAwesome } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

const { width } = Dimensions.get('window')

const RegistrationOptionScreen = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor='#fff' />
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>Sign in to House Hunters</Text>

          {/* Email Input */}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder='Email'
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholderTextColor='#888'
              keyboardType='email-address'
              autoCapitalize='none'
            />
            {email.length > 0 && (
              <FontAwesome
                name='check'
                size={16}
                color='green'
                style={styles.icon}
              />
            )}
          </View>

          {/* Password Input */}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder='Password'
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholderTextColor='#888'
            />
            {password.length > 0 && (
              <FontAwesome
                name='check'
                size={16}
                color='green'
                style={styles.icon}
              />
            )}
          </View>

          {/* Remember Me & Forgot Password */}
          <View style={styles.rememberRow}>
            <TouchableOpacity style={styles.forgotPress}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          {/* Sign In Button */}
          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.signInText}>Sign in</Text>
          </TouchableOpacity>

          {/* Divider */}
          <Text style={styles.orContinue}>or continue with</Text>

          {/* Social Buttons */}
          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome name='facebook' size={20} color='#1877F2' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome name='google' size={20} color='#EA4335' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome name='apple' size={20} color='#000' />
            </TouchableOpacity>
          </View>

          {/* Sign Up */}
          <Text style={styles.footerText}>
            Don’t have an account?{' '}
            <Text
              style={styles.signUpText}
              onPress={() => router.push('/registration/RegistrationScreen')}
            >
              Sign up
            </Text>
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default RegistrationOptionScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  flex: {
    flex: 1
  },
  scrollContainer: {
    paddingHorizontal: width * 0.07,
    paddingTop: 150,
    paddingBottom: 30,
    flexGrow: 1
  },
  title: {
    fontSize: 19,
    fontWeight: '900',
    color: '#000',
    marginBottom: 35,
    textAlign: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: 'green',
    borderRadius: 12,
    paddingHorizontal: 14,
    marginBottom: 20,
    height: 55
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000'
  },
  icon: {
    marginLeft: 10
  },
  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25
  },
  rememberText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#000'
  },
  forgotPress: {
    marginLeft: 'auto'
  },
  forgotText: {
    color: '#fc8403',
    fontSize: 13
  },
  signInButton: {
    backgroundColor: '#fc8403',
    paddingVertical: 16,
    borderRadius: 10,
    marginBottom: 30
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center'
  },
  orContinue: {
    textAlign: 'center',
    color: '#aaa',
    marginBottom: 20
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30
  },
  socialButton: {
    backgroundColor: '#f5f5f5',
    padding: 14,
    borderRadius: 10,
    width: 55,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerText: {
    textAlign: 'center',
    fontSize: 13,
    color: '#999'
  },
  signUpText: {
    color: '#fc8403',
    fontWeight: '600'
  }
})
