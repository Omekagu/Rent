import { MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView
        style={{ flex: 1, backgroundColor: '#fff', position: 'relative' }}
      >
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
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    height: '100%',
    margin: 10,
    paddingTop: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 16,
    paddingBottom: 350
  },
  container: {
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
    alignItems: 'flex-start',
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
    width: 50,
    height: 50,
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
