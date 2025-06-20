import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
  // ScrollView
} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
// import { router } from 'expo-router'

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

export default function FlightDetailScreen () {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#1a555c', paddingBottom: -40 }}
    >
      <View>
        <View style={styles.container}>
          {/* Top bar */}
          <View style={styles.topBar} />

          {/* Header: NRT <-> TPE */}
          <View style={styles.header}>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.airportCode}>NRT</Text>
              <Text style={styles.cityName}>Tokyo</Text>
            </View>
            <View style={styles.flightMiddle}>
              <Ionicons name='airplane' size={20} color='#cfcfcf' />
              <Text style={styles.flightDuration}>1h 25min, 11:15 AM</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.airportCode}>TPE</Text>
              <Text style={styles.cityName}>Taiwan</Text>
            </View>
          </View>

          {/* Progress Bar */}
          <View style={styles.progressSection}>
            <Text style={styles.departedText}>Depart 01:00</Text>
            <View style={styles.progressBarContainer}>
              <View style={styles.progressBarLine} />
              {/* Airplane icon at progress */}
              <Ionicons
                name='airplane'
                size={35}
                color='#1a555c'
                style={styles.progressPlane}
              />
            </View>
            <Text style={styles.arrivingText}>Arrive 00:25</Text>
          </View>

          {/* Plane image */}
          <View style={styles.planeImageContainer}>
            <Image
              source={{
                uri: 'https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=600'
              }}
              style={styles.planeImage}
              resizeMode='cover'
            />
          </View>

          {/* Aircraft Info */}
          <View style={styles.aircraftInfoRow}>
            <View style={styles.infoBlock}>
              <Text style={styles.infoLabel}>AIRCRAFT</Text>
              <Text style={styles.infoValue}>Boeing 787</Text>
            </View>
            <View style={styles.infoBlock}>
              <Text style={styles.infoLabel}>SERIAL NUMBER</Text>
              <Text style={styles.infoValue}>32413</Text>
            </View>
            <View style={styles.infoBlock}>
              <Text style={styles.infoLabel}>REGISTRATION</Text>
              <Text style={styles.infoValueBold}>RG-REF</Text>
            </View>
          </View>

          {/* Weather & Flight Condition */}
          <View style={styles.flightConditionRow}>
            <View style={styles.conditionBlock}>
              <Ionicons name='cloudy' size={28} color='#b0bed9' />
              <Text style={styles.conditionLabel}>Condition</Text>
              <Text style={styles.conditionValue}>Cloudy</Text>
            </View>
            <View style={styles.conditionBlock}>
              <MaterialCommunityIcons
                name='weather-windy'
                size={28}
                color='#b0bed9'
              />
              <Text style={styles.conditionLabel}>Wind</Text>
              <Text style={styles.conditionValue}>120° 10 kts</Text>
            </View>
            <View style={styles.conditionBlock}>
              <Ionicons name='thermometer' size={28} color='#b0bed9' />
              <Text style={styles.conditionLabel}>Temp</Text>
              <Text style={styles.conditionValue}>30°C</Text>
            </View>
          </View>

          {/* Bottom navigation */}
          <View style={styles.bottomNav}>
            {/* <TouchableOpacity
              style={styles.navBtn}
              onPress={() => router.back()}
            >
              <Ionicons name='arrow-back-sharp' size={24} color='black' />
            </TouchableOpacity> */}

            <TouchableOpacity
              style={{
                width: '70%',
                height: 48,
                backgroundColor: '#000',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                elevation: 3,
                shadowColor: '#e1e6ee',
                shadowOpacity: 0.18,
                shadowOffset: { width: 0, height: 3 },
                shadowRadius: 8
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: '600', color: '#fff' }}>
                Book Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    // backgroundColor: '#f7f8fa',
    // borderRadius: 2,
    overflow: 'hidden',
    paddingBottom: 24,
    minHeight: SCREEN_HEIGHT * 0.98,
    width: SCREEN_WIDTH,
    alignSelf: 'center'
  },
  topBar: {
    backgroundColor: '#1a555c',
    height: SCREEN_HEIGHT * 0.07,
    width: '100%',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2
  },
  header: {
    marginTop: SCREEN_HEIGHT * 0.045,
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 24,
    paddingVertical: 8,
    zIndex: 3
  },
  airportCode: {
    fontSize: SCREEN_WIDTH * 0.1,
    fontWeight: '700',
    color: '#222',
    letterSpacing: 2,
    lineHeight: SCREEN_WIDTH * 0.11
  },
  cityName: {
    fontSize: 15,
    color: '#b0bed9',
    marginTop: -2,
    fontWeight: '500'
  },
  flightMiddle: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    marginHorizontal: 10
  },
  flightDuration: {
    fontSize: 13,
    color: '#b0bed9',
    marginTop: 2,
    fontWeight: '600'
  },
  progressSection: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 24,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative'
  },
  departedText: {
    fontSize: 12,
    color: '#000',
    flex: 1,
    fontWeight: '400'
  },
  arrivingText: {
    fontSize: 12,
    color: '#000',
    flex: 1,
    textAlign: 'right',
    fontWeight: '400'
  },
  progressBarContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginHorizontal: 12,
    height: 26,
    justifyContent: 'center'
  },
  progressBarLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 12,
    height: 2,
    backgroundColor: '#1a555c',
    borderRadius: 1,
    zIndex: 1
  },
  progressPlane: {
    zIndex: 2,
    alignSelf: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: -4.5
  },
  planeImageContainer: {
    alignItems: 'center',
    width: '100%',
    height: 450
  },
  planeImage: {
    width: '100%',
    height: '100%'
  },
  aircraftInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 8,
    paddingVertical: 14,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#ececec',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8
  },
  infoBlock: {
    alignItems: 'center',
    flex: 1
  },
  infoLabel: {
    color: '#000',
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 3
  },
  infoValue: {
    color: '#222',
    fontWeight: '700',
    fontSize: 15
  },
  infoValueBold: {
    color: '#222',
    fontWeight: '900',
    fontSize: 15
  },
  flightConditionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    marginHorizontal: 8,
    marginBottom: 0,
    marginTop: 8
  },
  conditionBlock: {
    alignItems: 'center',
    // backgroundColor: '#eaf0fc',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginHorizontal: 4,
    minWidth: 80
  },
  conditionLabel: {
    fontSize: 12,
    color: '#b0bed9',
    fontWeight: '500',
    marginTop: 2
  },
  conditionValue: {
    fontSize: 14,
    color: '#222',
    fontWeight: '700',
    marginTop: 2
  },
  showMoreBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 8,
    marginBottom: 8
  },
  showMoreText: {
    color: '#d12b2b',
    fontWeight: '500',
    fontSize: 15,
    marginRight: 3
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 14,
    marginHorizontal: 25
  },
  navBtn: {
    width: 48,
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#e1e6ee',
    shadowOpacity: 0.18,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8
  }
})
