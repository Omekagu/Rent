import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const messages = [
  {
    id: '1',
    type: 'ai',
    text: 'Hello! How can I assist you with your flight today?'
  },
  { id: '2', type: 'user', text: 'Find me a cheap flight to Paris.' },
  {
    id: '3',
    type: 'ai',
    text: 'Got it! Looking for best deals to Paris for you...'
  },
  { id: '4', type: 'user', text: 'Find me a cheap flight to Paris.' },
  {
    id: '5',
    type: 'ai',
    text: 'Got it! Looking for best deals to Paris for you...'
  },
  { id: '6', type: 'user', text: 'Find me a cheap flight to Paris.' },
  {
    id: '7',
    type: 'ai',
    text: 'Got it! Looking for best deals to Paris for you...'
  },
  { id: '8', type: 'user', text: 'Find me a cheap flight to Paris.' },
  {
    id: '9',
    type: 'ai',
    text: 'Got it! Looking for best deals to Paris for you...'
  },
  { id: '10', type: 'user', text: 'Find me a cheap flight to Paris.' },
  {
    id: '11',
    type: 'ai',
    text: 'Got it! Looking for best deals to Paris for you...'
  },
  { id: '12', type: 'user', text: 'Find me a cheap flight to Paris.' },
  {
    id: '13',
    type: 'ai',
    text: 'Got it! Looking for best deals to Paris for you...'
  },
  { id: '14', type: 'user', text: 'Find me a cheap flight to Paris.' },
  {
    id: '15',
    type: 'ai',
    text: 'Got it! Looking for best deals to Paris for you...'
  },
  { id: '16', type: 'user', text: 'Find me a cheap flight to Paris.' },
  {
    id: '17',
    type: 'ai',
    text: 'Got it! Looking for best deals to Paris for you...'
  },
  { id: '18', type: 'user', text: 'Find me a cheap flight to Paris.' },
  {
    id: '19',
    type: 'ai',
    text: 'Got it! Looking for best deals to Paris for you...'
  },
  { id: '20', type: 'user', text: 'Find me a cheap flight to Paris.' },
  {
    id: '21',
    type: 'ai',
    text: 'Got it! Looking for best deals to Paris for you...'
  },
  { id: '22', type: 'user', text: 'Find me a cheap flight to Paris.' },
  {
    id: '23',
    type: 'ai',
    text: 'Got it! Looking for best deals to Paris for you...'
  }
]

const AiBookingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={90}
      >
        <FlatList
          data={messages}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.messageBubble,
                item.type === 'user' ? styles.userBubble : styles.aiBubble
              ]}
            >
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
          )}
          contentContainerStyle={styles.chatContainer}
        />

        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Type your message...'
            style={styles.textInput}
            placeholderTextColor='#aaa'
          />
          <TouchableOpacity style={styles.sendButton}>
            <Ionicons name='send' size={22} color='#fff' />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fc8403',
    marginTop: -50
  },
  chatContainer: {
    padding: 10,
    paddingBottom: 100
  },
  messageBubble: {
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    maxWidth: '75%'
  },
  aiBubble: {
    backgroundColor: '#fc8403',
    alignSelf: 'flex-start'
  },
  userBubble: {
    backgroundColor: '#4e4e4e',
    alignSelf: 'flex-end'
  },
  messageText: {
    color: '#fff',
    fontSize: 15
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center'
  },
  textInput: {
    flex: 1,
    height: 45,
    paddingHorizontal: 15,
    backgroundColor: '#2c2c2c',
    borderRadius: 25,
    color: '#fff',
    marginRight: 10
  },
  sendButton: {
    backgroundColor: '#fc8403',
    padding: 10,
    borderRadius: 30
  }
})

export default AiBookingScreen
