import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function StepSubmit () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration Complete!</Text>
      <Text style={styles.text}>
        Thank you for registering. We will review your information shortly.
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1ec773',
    marginBottom: 20
  },
  text: { fontSize: 16, color: '#444', textAlign: 'center' }
})
