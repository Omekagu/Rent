// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Animated, StyleSheet } from 'react-native'

export default function _layout () {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#1a555c',
          elevation: 0,
          borderTopWidth: 0,
          paddingTop: 10,
          height: 100
        },
        tabBarIcon: ({ focused }) => {
          let iconName = ''

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline'
              break
            case 'Explore':
              iconName = focused ? 'globe' : 'globe-outline'
              break
            case 'Status':
              iconName = focused ? 'planet' : 'airplane-outline'
              break
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline'
              break
            case 'Booking':
              iconName = focused ? 'book' : 'book-outline'
              break
          }

          return (
            <Animated.View style={focused ? styles.focusedIcon : null}>
              <Ionicons
                name={iconName as any}
                size={20}
                style={{ marginBottom: -3 }}
                color={focused ? '#2a9aa8' : '#fff'}
              />
            </Animated.View>
          )
        }
      })}
    >
      <Tabs.Screen name='Home' />
      <Tabs.Screen name='Explore' />
      <Tabs.Screen name='Booking' />
      <Tabs.Screen name='Status' />
      <Tabs.Screen name='Profile' />
    </Tabs>
  )
}

const styles = StyleSheet.create({
  focusedIcon: {
    transform: [{ scale: 1.2 }]
  }
})
