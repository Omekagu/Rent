import { useEffect, useRef, useState } from 'react'
import { EvilIcons, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Animated,
  Dimensions,
  PanResponder,
  Modal
} from 'react-native'
import SearchedFlightComponent from '../components/SearchedFlightComponent'
import { SafeAreaView } from 'react-native-safe-area-context'

const { width, height } = Dimensions.get('window')

const FlightCard = ({ route, date, terminal, gate, code }) => (
  <TouchableOpacity
    style={styles.card}
    onPress={() => router.push('/(stacks)/BookingDetailScreen')}
  >
    <View style={{ flex: 1 }}>
      <Text style={styles.cardRoute}>{route}</Text>
      <Text style={styles.cardDetails}>{date}</Text>
    </View>
    <View style={{ alignItems: 'flex-end' }}>
      <View style={styles.planeCodeContainer}>
        <Ionicons name='airplane-outline' size={24} color='#000' />
        <Text style={styles.planeCode}>{code}</Text>
      </View>
      <Text style={styles.airportCode}>
        {route.split(' to ')[1].split(' ')[0]} -{' '}
        {route.split(' to ')[1].split(' ')[1]}
      </Text>
      <Text style={styles.terminalInfo}>Terminal {terminal}</Text>
      <Text style={styles.terminalInfo}> {}</Text>
      <Text style={styles.terminalInfo}>Gate {gate}</Text>
    </View>
  </TouchableOpacity>
)

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false)

  const pan = useRef(
    new Animated.ValueXY({ x: width - 140, y: height / 2 })
  ).current

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        console.log('GRANT')
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        })
        pan.setValue({ x: 0, y: 0 })
      },
      onPanResponderMove: (evt, gestureState) => {
        console.log('MOVE', gestureState.dx, gestureState.dy)
        pan.setValue({ x: gestureState.dx, y: gestureState.dy })
      },
      onPanResponderRelease: () => {
        console.log('RELEASE')
        pan.flattenOffset()
      }
    })
  ).current

  return (
    <>
      <StatusBar barStyle='#000' />
      <SafeAreaView
        style={{ flex: 1, backgroundColor: '#fff', position: 'relative' }}
      >
        {/* Floating Pen Button */}
        <View>
          <Animated.View
            {...panResponder.panHandlers}
            style={[
              {
                transform: pan.getTranslateTransform(),
                position: 'absolute',
                zIndex: 999,
                elevation: 5
              }
            ]}
          >
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={{
                width: '100%',
                height: 50,
                backgroundColor: '#000',
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: '#000',
                shadowOpacity: 0.3,
                shadowRadius: 10,
                elevation: 10,
                paddingBottom: 10,
                paddingLeft: 10
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    paddingTop: 10,
                    color: '#fff'
                  }}
                >
                  Book Flight
                </Text>
                <EvilIcons name='pencil' size={30} color='#fff' />
              </View>
            </TouchableOpacity>
          </Animated.View>
        </View>

        {/* Modal */}
        <Modal
          transparent
          visible={modalVisible}
          animationType='slide'
          onRequestClose={() => setModalVisible(false)}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.5)',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            activeOpacity={1}
            onPressOut={() => setModalVisible(false)}
          >
            <View
              style={{
                width: '80%',
                backgroundColor: '#fff',
                padding: 20,
                borderRadius: 16
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: '#2a9aa8',
                  padding: 15,
                  borderRadius: 8,
                  marginBottom: 10
                }}
                onPress={() => {
                  setModalVisible(false)
                  router.push('/(stacks)/AiBookingScreen')
                }}
              >
                <Text
                  style={{
                    color: '#fff',
                    textAlign: 'center',
                    fontSize: 16,
                    fontWeight: 'bold'
                  }}
                >
                  Ai Flight Booking
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: '#94a3b8',
                  padding: 15,
                  borderRadius: 8
                }}
                onPress={() => {
                  setModalVisible(false)
                  router.push('/(stacks)/ManualBookingScreen')
                  // Navigate or handle manual booking
                }}
              >
                <Text
                  style={{
                    color: '#fff',
                    textAlign: 'center',
                    fontSize: 16,
                    fontWeight: 'bold'
                  }}
                >
                  Manual Flight Booking
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>

        {/* Header and Image Background */}
        <View style={styles.section}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => router.push('/(stacks)/ProfileScreen')}
            >
              <Image
                source={{
                  uri: 'https://i.postimg.cc/wvZrFxDG/Whats-App-Image-2025-05-22-at-16-06-27-0a4576f9.jpg'
                }}
                style={styles.avatar}
                resizeMode='cover'
              />
            </TouchableOpacity>

            <View>
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  width: 50,
                  backgroundColor: '#000',
                  padding: 10,
                  borderRadius: 50
                }}
                onPress={() => router.push('/(stacks)/NotificationScreen')}
              >
                <MaterialIcons
                  name='notifications-active'
                  size={30}
                  color='#fff'
                />
              </TouchableOpacity>
              <Text style={styles.greeting}>Good Morning 🌞</Text>
              <Text style={styles.name}>Omekagu Joseph.</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri: 'https://images.pexels.com/photos/1262304/pexels-photo-1262304.jpeg?auto=compress&cs=tinysrgb&w=600'
            }}
            style={styles.imageBackground}
            imageStyle={{ borderRadius: 16 }}
          >
            <View style={styles.imageBackgroundContainer}>
              <Text style={styles.sectionTitle}>My Flight</Text>
              <Text style={styles.sectionSubTitle}>Today</Text>
              <Text style={styles.flightCode}>YVR - JFK</Text>
              <Text style={styles.flightDetails}>
                Vancouver - New York 15 Oct 2023
              </Text>
              <Text style={styles.time}>12:40AM</Text>
            </View>
          </ImageBackground>
          <View style={styles.monthSection}>
            <Text style={styles.monthTitle}>This Month</Text>
            <Text style={styles.seeAll}>See All</Text>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <ScrollView contentContainerStyle={styles.container}>
            <FlightCard
              code='AR715'
              route='London to New York'
              date='15 Oct 23 | 03:20 PM'
              terminal='B'
              gate='B45'
            />
            <FlightCard
              code='AR513'
              route='Dabaca to Almedy'
              date='22 Oct 23 | 08:40 PM'
              terminal='A'
              gate='A4'
            />
            <FlightCard
              code='DL887'
              route='Los Angeles to Tokyo'
              date='10 Nov 23 | 01:15 PM'
              terminal='C'
              gate='C12'
            />
            <FlightCard
              code='EK231'
              route='Dubai to Washington'
              date='25 Dec 23 | 11:45 PM'
              terminal='D'
              gate='D5'
            />
            <FlightCard
              code='BA149'
              route='Paris to Cairo'
              date='30 Nov 23 | 05:50 AM'
              terminal='E'
              gate='E3'
            />
            <FlightCard
              code='LH760'
              route='Frankfurt to Delhi'
              date='12 Dec 23 | 09:00 AM'
              terminal='F'
              gate='F7'
            />
            <FlightCard
              code='AA789'
              route='Chicago to Miami'
              date='18 Jan 24 | 02:25 PM'
              terminal='G'
              gate='G10'
            />
            <FlightCard
              code='SQ927'
              route='Singapore to Sydney'
              date='20 Feb 24 | 06:00 AM'
              terminal='H'
              gate='H4'
            />
            <FlightCard
              code='AF198'
              route='Amsterdam to Nairobi'
              date='05 Mar 24 | 08:35 PM'
              terminal='J'
              gate='J9'
            />
            <FlightCard
              code='QF433'
              route='Melbourne to Brisbane'
              date='01 Apr 24 | 04:15 PM'
              terminal='K'
              gate='K2'
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    height: '100%',
    margin: 10,
    paddingTop: 10,
    // backgroundColor: '#1a555c',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 16,
    paddingBottom: 350
  },
  container: {
    // backgroundColor: '#1a555c',
    // height: '100%',
    paddingBottom: 50,
    paddingHorizontal: 2
  },
  imageBackground: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    marginBottom: 20
  },
  imageBackgroundContainer: {
    padding: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 20
  },
  greeting: {
    alignSelf: 'flex-end',
    fontSize: 25,
    fontWeight: '200',
    color: '#334155'
  },
  name: {
    fontSize: 25,
    fontWeight: '900',
    color: '#0f172a'
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  section: {
    // flexDirection: ',
    width: '100%',
    backgroundColor: '#fff',
    padding: 10,
    overflow: 'hidden'
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#fff'
  },
  sectionSubTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#f1f5f9',
    marginBottom: 10
  },
  flightCode: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff'
  },
  planeCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    width: 150,
    marginBottom: 10,
    backgroundColor: '#f1f5f9',
    borderLeftWidth: 2,
    justifyContent: 'flex-end',
    padding: 8
  },
  planeCode: {
    fontSize: 16,
    fontWeight: '600',
    color: '#dcdee0',
    marginLeft: 8
  },
  flightDetails: {
    fontSize: 14,
    fontWeight: '700',
    color: '#f1f5f9',
    marginTop: 5
  },
  time: {
    fontSize: 14,
    color: '#f8fafc',
    marginTop: 8
  },
  monthSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3
  },
  monthTitle: {
    fontSize: 12,
    fontWeight: '800',
    color: '#1e293b'
  },
  seeAll: {
    fontSize: 14,
    color: '#3b82f6'
  },
  card: {
    backgroundColor: '#edeef0',
    padding: 10,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3
  },
  cardRoute: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a'
  },
  cardDetails: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 4
  },
  airportCode: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e293b'
  },
  terminalInfo: {
    fontSize: 12,
    color: '#475569'
  }
})

export default Home
