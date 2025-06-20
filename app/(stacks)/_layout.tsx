// app/_layout.tsx
import { Stack } from 'expo-router'

export default function Layout () {
  return (
    <Stack>
      <Stack.Screen
        name='AiBookingScreen'
        options={{
          title: 'Fast AI Flight Booking',
          headerShown: true,
          headerStyle: { backgroundColor: '#144045' },
          headerTitleStyle: { color: '#eee', fontSize: 13, fontWeight: '700' }
        }}
      />
      <Stack.Screen
        name='ManualBookingScreen'
        options={{ title: 'manualBookingScreen', headerShown: false }}
      />
      <Stack.Screen
        name='BookingListScreen'
        options={{ title: 'BookingListScreen', headerShown: false }}
      />
      <Stack.Screen
        name='FlightDetailScreen'
        options={{ title: 'FlightDetailScreen', headerShown: false }}
      />
      <Stack.Screen
        name='ProfileScreen'
        options={{ title: 'ProfileScreen', headerShown: true }}
      />
      <Stack.Screen
        name='SettingsScreen'
        options={{ title: 'SettingsScreen', headerShown: true }}
      />
      <Stack.Screen
        name='BookingDetailScreen'
        options={{ title: 'BookingDetailScreen', headerShown: true }}
      />
      <Stack.Screen
        name='NotificationScreen'
        options={{ title: 'NotificationScreen', headerShown: true }}
      />
      <Stack.Screen
        name='ProfileDetails'
        options={{ title: 'ProfileDetails', headerShown: false }}
      />
      <Stack.Screen
        name='PrivacyScreen'
        options={{ title: 'PrivacyScreen', headerShown: false }}
      />
      <Stack.Screen
        name='LegalScreen'
        options={{ title: 'LegalScreen', headerShown: false }}
      />
      <Stack.Screen
        name='SupportScreen'
        options={{ title: 'SupportScreen', headerShown: false }}
      />
      <Stack.Screen
        name='ThemeScreen'
        options={{ title: 'ThemeScreen', headerShown: false }}
      />
    </Stack>
  )
}
