import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function StepProgressBar ({ steps, currentStep }) {
  return (
    <View style={styles.container}>
      {steps.map((step, idx) => {
        const isCompleted = idx < currentStep
        const isActive = idx === currentStep
        const isLast = idx === steps.length - 1
        return (
          <React.Fragment key={step.label}>
            <View style={styles.stepContainer}>
              <View
                style={[
                  styles.circle,
                  isCompleted && styles.circleCompleted,
                  isActive && styles.circleActive
                ]}
              >
                {isCompleted ? (
                  <Ionicons name='checkmark' size={20} color='#1ec773' />
                ) : (
                  <Text
                    style={[
                      styles.stepNumber,
                      isActive && { color: '#2583cc' }
                    ]}
                  >
                    {idx + 1}
                  </Text>
                )}
              </View>
              <Text
                style={[
                  styles.stepLabel,
                  isCompleted && styles.labelCompleted,
                  isActive && styles.labelActive
                ]}
              >
                {step.label}
              </Text>
            </View>
            {!isLast && (
              <View
                style={[
                  styles.line,
                  isCompleted || isActive
                    ? styles.lineActive
                    : styles.lineInactive
                ]}
              />
            )}
          </React.Fragment>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30
  },
  stepContainer: { alignItems: 'center', width: 90 },
  circle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 2,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6
  },
  circleCompleted: { borderColor: '#1ec773' },
  circleActive: { borderColor: '#2583cc' },
  stepNumber: { fontSize: 16, color: '#aaa', fontWeight: 'bold' },
  stepLabel: {
    fontSize: 14,
    color: '#aaa',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  labelCompleted: { color: '#1ec773' },
  labelActive: { color: '#2583cc' },
  line: {
    height: 2,
    flex: 1,
    alignSelf: 'center',
    marginHorizontal: -8,
    minWidth: 30,
    backgroundColor: '#ccc'
  },
  lineActive: { backgroundColor: '#1ec773' },
  lineInactive: { backgroundColor: '#ccc' }
})
