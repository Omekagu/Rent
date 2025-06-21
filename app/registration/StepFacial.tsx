import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function StepFacial ({
  onNext,
  onBack
}: {
  onNext: () => void
  onBack: () => void
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Facial Verification</Text>
      <Text>Take a selfie to verify your identity (demo step).</Text>
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
  row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }
})
