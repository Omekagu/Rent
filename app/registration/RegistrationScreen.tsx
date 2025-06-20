import { Ionicons } from '@expo/vector-icons'
import Checkbox from 'expo-checkbox'
import { router } from 'expo-router'
import React, { useState } from 'react'
import {
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

const { width } = Dimensions.get('window')

const RegistrationScreen = () => {
  const [isChecked, setChecked] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [fullname, setFullname] = useState('')
  const [password, setPassword] = useState('')

  return (
    <ImageBackground
      source={{
        uri: 'https://images.pexels.com/photos/1262304/pexels-photo-1262304.jpeg?auto=compress&cs=tinysrgb&w=600'
      }}
      style={styles.background}
      resizeMode='cover'
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps='handled'
        >
          <StatusBar
            translucent
            backgroundColor='transparent'
            barStyle='light-content'
          />

          {/* Header image */}
          <View style={styles.header}>
            <Image
              source={{
                uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/education-7065687-5756963.png'
              }}
              style={styles.headerImage}
              resizeMode='contain'
            />
          </View>

          <View style={styles.formContainer}>
            <Text style={styles.title}>Create Your Account</Text>
            <Text style={styles.subtitle}>
              Create your account to start your journey
            </Text>

            {/* Fullname */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Full Name</Text>
              <TextInput
                style={styles.input}
                placeholder='Enter your full name'
                placeholderTextColor='#999'
                value={fullname}
                onChangeText={setFullname}
              />
            </View>

            {/* Email */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder='Enter your email address'
                placeholderTextColor='#999'
                keyboardType='email-address'
                value={email}
                onChangeText={setEmail}
              />
            </View>

            {/* Password */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.passwordWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder='Enter your password'
                  placeholderTextColor='#999'
                  secureTextEntry={!passwordVisible}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setPasswordVisible(prev => !prev)}
                >
                  <Ionicons
                    name={passwordVisible ? 'eye' : 'eye-off'}
                    size={20}
                    color='#666'
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Checkbox */}
            <View style={styles.checkboxRow}>
              <Checkbox
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#fc8403' : undefined}
              />
              <Text style={styles.checkboxText}>
                I agree to the{' '}
                <Text style={styles.link}>Terms & Conditions</Text> and{' '}
                <Text style={styles.link}>Privacy Policy</Text>
              </Text>
            </View>

            {/* Sign Up Button */}
            <TouchableOpacity style={styles.signupBtn}>
              <Text style={styles.signupText}>Sign Up</Text>
            </TouchableOpacity>

            {/* Already have account */}
            <Text style={styles.footerText}>
              Already have an account?{' '}
              <Text
                style={styles.link}
                onPress={() => router.push('/registration/LoginScreen')}
              >
                Sign in
              </Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

export default RegistrationScreen

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  container: {
    flexGrow: 1,
    paddingBottom: 30
  },
  header: {
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 10
  },
  headerImage: {
    width: 160,
    height: 160
  },
  formContainer: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    marginHorizontal: width * 0.05,
    borderRadius: 20,
    padding: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 6
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    color: '#333',
    marginBottom: 4
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
    marginBottom: 20
  },
  inputContainer: {
    marginBottom: 16
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 6
  },
  input: {
    backgroundColor: '#eee',
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    color: '#000'
  },
  passwordWrapper: {
    position: 'relative'
  },
  eyeIcon: {
    position: 'absolute',
    top: 14,
    right: 14
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  checkboxText: {
    marginLeft: 10,
    color: '#444',
    flexShrink: 1
  },
  link: {
    color: '#fc8403',
    fontWeight: '600'
  },
  signupBtn: {
    backgroundColor: '#fc8403',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 18
  },
  signupText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
  footerText: {
    textAlign: 'center',
    color: '#444',
    fontSize: 14
  }
})
