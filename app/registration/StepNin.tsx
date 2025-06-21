import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function StepNin ({
  onNext,
  onBack
}: {
  onNext: () => void
  onBack: () => void
}) {
  const [nin, setNin] = useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NIN Verification</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter NIN'
        keyboardType='numeric'
        value={nin}
        onChangeText={setNin}
      />
      <View style={styles.row}>
        <Button title='Back' onPress={onBack} />
        <Button title='Next' onPress={onNext} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: { padding: 24, flex: 1 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 14 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20
  },
  row: { flexDirection: 'row', justifyContent: 'space-between' }
})
