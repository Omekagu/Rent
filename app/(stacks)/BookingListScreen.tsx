import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchedFlightComponent from '../components/SearchedFlightComponent'

export default function BookingListScreen () {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#fc8403', paddingBottom: -30 }}
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
          backgroundColor: '#fc8403',
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
