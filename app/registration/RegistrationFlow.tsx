import React, { useState } from 'react'
import { View } from 'react-native'
import RegistrationScreen from './RegistrationScreen'
import StepFacial from './StepFacial'
import StepNin from './StepNin'
import StepProgressBar from './StepProgressBar'
import StepResidence from './StepResidence'
import StepSubmit from './StepSubmit'

const steps = [
  { label: 'Account' },
  { label: 'NIN' },
  { label: 'Facial' },
  { label: 'Residence' },
  { label: 'Submit' }
]

export default function RegistrationFlow () {
  const [step, setStep] = useState(0)

  const goNext = () => setStep(prev => Math.min(prev + 1, steps.length - 1))
  const goBack = () => setStep(prev => Math.max(prev - 1, 0))

  let StepComponent
  switch (step) {
    case 0:
      StepComponent = <RegistrationScreen onNext={goNext} onBack={goBack} />
      break
    case 1:
      StepComponent = <StepNin onNext={goNext} onBack={goBack} />
      break
    case 2:
      StepComponent = <StepFacial onNext={goNext} onBack={goBack} />
      break
    case 3:
      StepComponent = <StepResidence onNext={goNext} onBack={goBack} />
      break
    case 4:
      StepComponent = <StepSubmit />
      break
    default:
      StepComponent = null
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StepProgressBar steps={steps} currentStep={step} />
      <View style={{ flex: 1 }}>{StepComponent}</View>
    </View>
  )
}
