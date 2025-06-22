import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React, { useState } from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import RoomCard from '../components/RoomCard'

export const roomList = [
  {
    image: 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg',
    name: 'Dhanmondi',
    location: 'Lagos, NG',
    price: '150',
    rating: '4.9'
  },
  {
    image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg',
    name: 'Gulshan',
    location: 'Enugu, NG',
    price: '200',
    rating: '4.8'
  },
  {
    image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg',
    name: 'Banani',
    location: 'Abuja, NG',
    price: '180',
    rating: '4.7'
  },
  {
    image: 'https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg',
    name: 'Uttara',
    location: 'Nasarawa, NG',
    price: '130',
    rating: '4.6'
  },
  {
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
    name: 'Mirpur',
    location: 'Gobe, NG',
    price: '120',
    rating: '4.4'
  },
  {
    image: 'https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg',
    name: 'Mohakhali',
    location: 'Oyo, NG',
    price: '140',
    rating: '4.5'
  },
  {
    image: 'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg',
    name: 'Baridhara',
    location: 'Kano, NG',
    price: '220',
    rating: '4.8'
  },
  {
    image: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg',
    name: 'Bashundhara',
    location: 'Niger, NG',
    price: '170',
    rating: '4.7'
  },
  {
    image: 'https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg',
    name: 'Motijheel',
    location: 'Kogi, NG',
    price: '160',
    rating: '4.5'
  },
  {
    image: 'https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg',
    name: 'Shyamoli',
    location: 'Kubwa, NG',
    price: '110',
    rating: '4.3'
  }
]

const Home = () => {
  const [search, setSearch] = useState('')

  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f7f6f2' }}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={{
              uri: 'https://i.postimg.cc/wvZrFxDG/Whats-App-Image-2025-05-22-at-16-06-27-0a4576f9.jpg'
            }}
            style={styles.avatar}
            resizeMode='cover'
          />
          <View style={{ flex: 1, marginLeft: 15 }}>
            <Text style={styles.welcomeText}>WELCOME</Text>
            <Text style={styles.username}>Omekagu Joseph.</Text>
          </View>
          <TouchableOpacity
            style={styles.notifBtn}
            onPress={() => router.push('/(stacks)/NotificationScreen')}
          >
            <Ionicons name='notifications-outline' size={26} color='#232323' />
          </TouchableOpacity>
        </View>

        {/* Search Box */}
        <View style={styles.searchContainer}>
          <Ionicons
            name='search'
            size={18}
            color='#b1b1b1'
            style={{ marginRight: 8 }}
          />
          <TextInput
            placeholder='Search'
            placeholderTextColor='#b1b1b1'
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
            autoCapitalize='none'
          />
          <TouchableOpacity style={styles.searchFilterBtn}>
            <Ionicons name='options-outline' size={20} color='#b1b1b1' />
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={{}}>
          {/* NEWLY ADDED */}
          <Text
            style={{
              paddingHorizontal: 16,
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: 12,
              color: '#232323',
              marginTop: 16
            }}
          >
            Popular Houses
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ padding: 16 }}
          >
            {roomList.map((room, idx) => (
              <RoomCard key={idx} {...room} />
            ))}
          </ScrollView>
          {/* BASED ON YOUR LOCATION */}
          <Text
            style={{
              paddingHorizontal: 16,
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: 12,
              color: '#232323'
            }}
          >
            BASED ON YOUR LOCATION
          </Text>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? 8 : 0,
    marginBottom: 18,
    paddingHorizontal: 16
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#e9e4df'
  },
  welcomeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#b1b1b1',
    letterSpacing: 0.6
  },
  username: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#232323',
    marginTop: 2
  },
  notifBtn: {
    backgroundColor: '#f3eee9',
    borderRadius: 50,
    padding: 10,
    marginLeft: 'auto'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#edeae4',
    borderRadius: 14,
    marginHorizontal: 16,
    paddingHorizontal: 13,
    paddingVertical: 9,
    shadowColor: '#cdc6bc',
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 1
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#232323',
    paddingVertical: 0,
    backgroundColor: 'transparent'
  },
  searchFilterBtn: {
    marginLeft: 8,
    backgroundColor: '#ece4d8',
    padding: 6,
    borderRadius: 14
  }
})

export default Home
