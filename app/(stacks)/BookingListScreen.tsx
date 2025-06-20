import React from 'react'
import SearchedFlightComponent from '../components/SearchedFlightComponent'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'

export default function BookingListScreen () {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#1a555c', paddingBottom: -30 }}
    >
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 10,
          borderRadius: 50,
          width: 50,
          height: 50,
          alignItems: 'center',
          padding: 10,
          backgroundColor: '#1a555c',
          elevation: 2
        }}
        onTouchEnd={() => {
          router.back()
        }}
      >
        <Ionicons name='arrow-back-sharp' size={34} color='#fff' />
      </View>

      <ScrollView>
        <SearchedFlightComponent />
        <SearchedFlightComponent />
        <SearchedFlightComponent />
        <SearchedFlightComponent />
        <SearchedFlightComponent />
        <SearchedFlightComponent />
        <SearchedFlightComponent />
        <SearchedFlightComponent />
        <SearchedFlightComponent />
        <SearchedFlightComponent />
        <SearchedFlightComponent />
      </ScrollView>
    </SafeAreaView>
  )
}
