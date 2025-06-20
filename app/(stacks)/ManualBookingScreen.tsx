import { Fontisto, MaterialIcons } from '@expo/vector-icons' // or react-native-vector-icons/Ionicons
import { router } from 'expo-router'
import React, { useState } from 'react'
import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ManualBookingScreen = () => {
  const [tripType, setTripType] = useState('one-way')
  const [from, setFrom] = useState('London')
  const [to, setTo] = useState('To')
  // const [date, setDate] = useState('')
  // const [adults, setAdults] = useState(1)

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='#000' />
      <Text style={styles.title}>Where you want {'\n'}to travel?</Text>
      <View
        style={{
          backgroundColor: '#fff',
          padding: 10,
          borderRadius: 10
        }}
      >
        <View style={styles.tabContainer}>
          <Pressable
            style={[styles.tab, tripType === 'one-way' && styles.activeTab]}
            onPress={() => setTripType('one-way')}
          >
            <Text
              style={[
                styles.tabText,
                tripType === 'one-way' && styles.activeTabText
              ]}
            >
              One-Way
            </Text>
          </Pressable>

          <Pressable
            style={[styles.tab, tripType === 'round-trip' && styles.activeTab]}
            onPress={() => setTripType('round-trip')}
          >
            <Text
              style={[
                styles.tabText,
                tripType === 'round-trip' && styles.activeTabText
              ]}
            >
              Round Trip
            </Text>
          </Pressable>
        </View>

        <TextInput
          style={styles.input}
          placeholder='From'
          value={from}
          onChangeText={setFrom}
        />
        <TextInput
          style={styles.input}
          placeholder='To'
          value={to}
          onChangeText={setTo}
        />
        <View style={styles.tabContainer}>
          <TouchableOpacity style={styles.dateTab}>
            <Fontisto name='date' size={24} color='black' />
            <Text style={styles.dateTab}>Date</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.dateTab}>
            <MaterialIcons name='person-pin' size={24} color='black' />
            <Text style={styles.dateTab}>Adult</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => router.push('/(stacks)/BookingListScreen')}
        >
          <Text style={styles.searchButtonText}>Search Flights</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  dateTab: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    padding: 10,
    justifyContent: 'center'
  },
  container: {
    padding: 10,
    backgroundColor: '#fc8403',
    flex: 1
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
    fontWeight: '800',
    lineHeight: 40
  },
  tabContainer: {
    // height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f1f1f1',
    borderRadius: 40,
    marginBottom: 15,
    padding: 5,
    alignItems: 'center',
    overflow: 'hidden'
  },
  tab: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    borderRadius: 30
  },
  activeTab: {
    backgroundColor: '#000'
  },
  tabText: {
    fontWeight: '800',
    color: '#000',
    paddingVertical: 10
  },
  activeTabText: {
    color: '#fff'
  },
  input: {
    backgroundColor: '#eee',
    padding: 12,
    height: 50,
    borderRadius: 8,
    marginBottom: 12
  },
  searchButton: {
    backgroundColor: '#fc8403',
    padding: 20,
    borderRadius: 18,
    alignItems: 'center',
    marginTop: 10
  },
  searchButtonText: {
    fontWeight: '700',
    fontSize: 16,
    color: '#000'
  }
})

export default ManualBookingScreen
