import React, { useState } from 'react'
import {
  View,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text
} from 'react-native'
import { Video } from 'expo-av'
import { FontAwesome5 } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'

const { width } = Dimensions.get('window')
const numColumns = 3
const baseSize = width / numColumns

const media = [
  {
    type: 'image',
    uri: 'https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizeType: 'small'
  },
  {
    type: 'video',
    uri: 'https://videos.pexels.com/video-files/1751261/1751261-sd_360_640_30fps.mp4',
    sizeType: 'wide'
  },
  {
    type: 'image',
    uri: 'https://images.pexels.com/photos/1458302/pexels-photo-1458302.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizeType: 'small'
  },
  {
    type: 'image',
    uri: 'https://images.pexels.com/photos/1154619/pexels-photo-1154619.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizeType: 'tall'
  },
  {
    type: 'video',
    uri: 'https://videos.pexels.com/video-files/4684101/4684101-sd_640_360_25fps.mp4',
    sizeType: 'large'
  },

  {
    type: 'video',
    uri: 'https://videos.pexels.com/video-files/1751261/1751261-sd_360_640_30fps.mp4',
    sizeType: 'wide'
  },
  {
    type: 'image',
    uri: 'https://images.pexels.com/photos/1458302/pexels-photo-1458302.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizeType: 'small'
  },
  {
    type: 'image',
    uri: 'https://images.pexels.com/photos/1154619/pexels-photo-1154619.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizeType: 'tall'
  },
  {
    type: 'video',
    uri: 'https://videos.pexels.com/video-files/4684101/4684101-sd_640_360_25fps.mp4',
    sizeType: 'large'
  },
  {
    type: 'image',
    uri: 'https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizeType: 'small'
  },
  {
    type: 'video',
    uri: 'https://videos.pexels.com/video-files/1751261/1751261-sd_360_640_30fps.mp4',
    sizeType: 'wide'
  },
  {
    type: 'image',
    uri: 'https://images.pexels.com/photos/1458302/pexels-photo-1458302.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizeType: 'small'
  },
  {
    type: 'image',
    uri: 'https://images.pexels.com/photos/1154619/pexels-photo-1154619.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizeType: 'tall'
  },
  {
    type: 'video',
    uri: 'https://videos.pexels.com/video-files/4684101/4684101-sd_640_360_25fps.mp4',
    sizeType: 'large'
  },
  {
    type: 'image',
    uri: 'https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizeType: 'small'
  },
  {
    type: 'video',
    uri: 'https://videos.pexels.com/video-files/1751261/1751261-sd_360_640_30fps.mp4',
    sizeType: 'wide'
  },
  {
    type: 'image',
    uri: 'https://images.pexels.com/photos/1458302/pexels-photo-1458302.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizeType: 'small'
  },
  {
    type: 'image',
    uri: 'https://images.pexels.com/photos/1154619/pexels-photo-1154619.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizeType: 'tall'
  },
  {
    type: 'video',
    uri: 'https://videos.pexels.com/video-files/4684101/4684101-sd_640_360_25fps.mp4',
    sizeType: 'large'
  },
  {
    type: 'image',
    uri: 'https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizeType: 'small'
  },
  {
    type: 'video',
    uri: 'https://videos.pexels.com/video-files/1751261/1751261-sd_360_640_30fps.mp4',
    sizeType: 'wide'
  },
  {
    type: 'image',
    uri: 'https://images.pexels.com/photos/1458302/pexels-photo-1458302.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizeType: 'small'
  },
  {
    type: 'image',
    uri: 'https://images.pexels.com/photos/1154619/pexels-photo-1154619.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizeType: 'tall'
  },
  {
    type: 'video',
    uri: 'https://videos.pexels.com/video-files/4684101/4684101-sd_640_360_25fps.mp4',
    sizeType: 'large'
  },
  {
    type: 'image',
    uri: 'https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizeType: 'small'
  },
  {
    type: 'video',
    uri: 'https://videos.pexels.com/video-files/1751261/1751261-sd_360_640_30fps.mp4',
    sizeType: 'wide'
  },
  {
    type: 'image',
    uri: 'https://images.pexels.com/photos/1458302/pexels-photo-1458302.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizeType: 'small'
  },
  {
    type: 'image',
    uri: 'https://images.pexels.com/photos/1154619/pexels-photo-1154619.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizeType: 'tall'
  },
  {
    type: 'video',
    uri: 'https://videos.pexels.com/video-files/4684101/4684101-sd_640_360_25fps.mp4',
    sizeType: 'large'
  },
  {
    type: 'image',
    uri: 'https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizeType: 'small'
  },
  {
    type: 'video',
    uri: 'https://videos.pexels.com/video-files/1751261/1751261-sd_360_640_30fps.mp4',
    sizeType: 'wide'
  },
  {
    type: 'image',
    uri: 'https://images.pexels.com/photos/1458302/pexels-photo-1458302.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizeType: 'small'
  },
  {
    type: 'image',
    uri: 'https://images.pexels.com/photos/1154619/pexels-photo-1154619.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizeType: 'tall'
  },
  {
    type: 'video',
    uri: 'https://videos.pexels.com/video-files/4684101/4684101-sd_640_360_25fps.mp4',
    sizeType: 'large'
  },
  {
    type: 'image',
    uri: 'https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizeType: 'small'
  },
  {
    type: 'video',
    uri: 'https://videos.pexels.com/video-files/1751261/1751261-sd_360_640_30fps.mp4',
    sizeType: 'wide'
  },
  {
    type: 'image',
    uri: 'https://images.pexels.com/photos/1458302/pexels-photo-1458302.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizeType: 'small'
  },
  {
    type: 'image',
    uri: 'https://images.pexels.com/photos/1154619/pexels-photo-1154619.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizeType: 'tall'
  },
  {
    type: 'video',
    uri: 'https://videos.pexels.com/video-files/4684101/4684101-sd_640_360_25fps.mp4',
    sizeType: 'large'
  },
  {
    type: 'image',
    uri: 'https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizeType: 'small'
  },
  {
    type: 'video',
    uri: 'https://videos.pexels.com/video-files/1751261/1751261-sd_360_640_30fps.mp4',
    sizeType: 'wide'
  },
  {
    type: 'image',
    uri: 'https://images.pexels.com/photos/1458302/pexels-photo-1458302.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizeType: 'small'
  },
  {
    type: 'image',
    uri: 'https://images.pexels.com/photos/1154619/pexels-photo-1154619.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizeType: 'tall'
  },
  {
    type: 'video',
    uri: 'https://videos.pexels.com/video-files/4684101/4684101-sd_640_360_25fps.mp4',
    sizeType: 'large'
  }
]

export default function Explore () {
  const [isFocused, setIsFocused] = useState(false)

  const getTileStyle = (sizeType: string) => {
    switch (sizeType) {
      case 'wide':
        return { width: baseSize * 2, height: baseSize }
      case 'tall':
        return { width: baseSize, height: baseSize * 2 }
      case 'large':
        return { width: baseSize * 2, height: baseSize * 2 }
      default:
        return { width: baseSize, height: baseSize }
    }
  }

  const renderItem = ({ item }: any) => {
    if (!item || typeof item !== 'object') return null

    return (
      <TouchableOpacity activeOpacity={0.9}>
        <View style={[styles.tile, getTileStyle(item.sizeType)]}>
          {item.type === 'image' ? (
            <Image source={{ uri: item.uri }} style={styles.media} />
          ) : (
            <Video
              source={{ uri: item.uri }}
              isMuted
              resizeMode='cover'
              shouldPlay
              isLooping
              style={styles.media}
            />
          )}
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.searchContainer}> */}
      <View style={styles.searchWrapper}>
        {isFocused && <Text>🔍</Text>}
        <TextInput
          style={[styles.search, isFocused ? styles.searchFocused : {}]}
          placeholder='Ask spahflightAi or Search'
          placeholderTextColor='#aaa'
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {/* </View> */}
      </View>
      <FlatList
        data={media}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        numColumns={3}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
    // marginBottom: 20 // to avoid notch on iOS
  },
  searchContainer: {
    width: '100%',
    backgroundColor: '#000',
    padding: 10,
    paddingTop: 40 // for safe area
  },
  searchWrapper: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10
    // paddingTop: 50
  },
  searchIcon: {
    marginRight: 8
  },
  search: {
    flex: 1,
    height: 40,
    backgroundColor: '#eee',
    borderRadius: 8,
    paddingHorizontal: 12
  },
  searchFocused: {
    marginLeft: 10,
    flexShrink: 0.95
  },
  tile: {
    margin: 1,
    borderRadius: 2,
    overflow: 'hidden'
  },

  media: {
    width: '100%',
    height: '100%'
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopColor: '#222',
    borderTopWidth: 0.5
  }
})
