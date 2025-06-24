// app/_layout.tsx
import { Stack } from 'expo-router'

export default function Layout () {
  return (
    <Stack>
      <Stack.Screen
        name='PropertySearchScreen'
        options={{ title: 'Property Search', headerShown: false }}
      />
      <Stack.Screen
        name='PropertyMapScreen'
        options={{ title: 'Property Map', headerShown: false }}
      />
      <Stack.Screen
        name='PropertyDetailScreen'
        options={{ title: 'Property Detail', headerShown: false }}
      />
      <Stack.Screen
        name='ReviewScreen'
        options={{ title: 'Review', headerShown: false }}
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
        name='NotificationScreen'
        options={{ title: 'NotificationScreen', headerShown: false }}
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
