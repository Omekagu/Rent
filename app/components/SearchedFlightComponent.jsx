import { router } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

export default function SearchedFlightComponent () {
  return (
    <TouchableOpacity
      onPress={() => {
        router.push('/(stacks)/FlightDetailScreen')
      }}
    >
      <View
        style={{
          backgroundColor: '#fff',
          borderRadius: 5,
          padding: 16,
          margin: 10,
          shadowColor: '#000',
          shadowOpacity: 0.04,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 8,
          elevation: 1
        }}
      >
        {/* From/To/Time/Schdule */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start'
          }}
        >
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 2
              }}
            >
              <View
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: '#d11a1a',
                  marginRight: 8
                }}
              />
              <Text style={{ color: '#888', fontSize: 13 }}>From</Text>
            </View>
            <View
              style={{
                // height: 20,
                paddingLeft: 15,
                borderLeftWidth: 2,
                borderColor: '#000',
                borderStyle: 'dashed',
                marginBottom: 6
              }}
            >
              <Text
                style={{
                  fontWeight: '700',
                  color: '#444',
                  fontSize: 15
                }}
              >
                Surabaya ( SUB )
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 2
              }}
            >
              <View
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: '#d11a1a',
                  marginRight: 8
                }}
              />
              <Text style={{ color: '#888', fontSize: 13 }}>To</Text>
            </View>
            <Text
              style={{
                fontWeight: '700',
                color: '#444',
                fontSize: 15,
                marginLeft: 15
              }}
            >
              Jakarta ( CGK )
            </Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text
              style={{
                color: '#6ad13b',
                fontWeight: '600',
                fontSize: 15,
                marginBottom: 12
              }}
            >
              Schdule
            </Text>
            <Text style={{ fontWeight: '700', fontSize: 32, color: '#444' }}>
              08:50
            </Text>
          </View>
        </View>
        {/* Dashed Divider */}
        <View
          style={{
            borderBottomWidth: 1,
            borderStyle: 'dashed',
            borderBottomColor: '#EAEAEA',
            marginVertical: 14
          }}
        />
        {/* Airlines & Flight Number */}
        <View
          style={{
            backgroundColor: '#eee',
            padding: 10,
            borderWidth: 1,
            borderStyle: 'dashed',
            borderColor: '#000',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Text style={{ fontSize: 13, color: '#888' }}>
            Airlines :{' '}
            <Text
              style={{
                color: '#d11a1a',
                fontWeight: '800',
                fontFamily: 'cursive'
              }}
            >
              Batik air
            </Text>
          </Text>
          <Text style={{ fontSize: 13, color: '#888' }}>
            No. Penerbangan :{' '}
            <Text style={{ color: '#444', fontWeight: '700' }}>SGH61</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
