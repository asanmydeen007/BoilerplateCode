import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faSearch,
  faHeart,
  faBell,
  faArrowLeft,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '@/Hooks'
import { navigate } from '@/Navigators/utils'

export default function CartPage(params) {
  const { Layout, Images } = useTheme()
  // console.log(params.route.params.img)
  return (
    <ScrollView style={{ backgroundColor: '#fff', flex: 1 }}>
      <View
        style={{
          margin: 15,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              marginTop: 5,
              backgroundColor: '#f3f3f3',
              borderRadius: 8,
              width: '16%',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TouchableOpacity onPress={() => navigate('HomePage')}>
              <FontAwesomeIcon icon={faArrowLeft} size={24} color="#555" />
            </TouchableOpacity>
          </View>

          <Text style={{ fontSize: 20, fontWeight: '700', color: '#555' }}>
            Product Detail
          </Text>
          <View
            style={{
              marginTop: 5,
              backgroundColor: '#f3f3f3',
              borderRadius: 8,
              width: '16%',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FontAwesomeIcon icon={faHeart} size={24} color="#d74f50" />
          </View>
        </View>
        <View style={{ marginTop: 20, padding: 20, width: '100%' }}>
          <Image
            style={{
              height: 310,
              width: '100%',
              borderRadius: 12,
            }}
            source={params.route.params.img}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View>
              <Text
                style={{
                  marginVertical: 8,
                  fontSize: 18,
                  fontWeight: '600',
                  color: '#555',
                }}
              >
                Outer
              </Text>
              <Text style={{ fontSize: 25, fontWeight: '700', color: '#000' }}>
                {params.route.params.productName}
              </Text>
              <View
                style={{
                  alignItems: 'center',
                  padding: 4,
                  height: 32,
                  width: 110,
                  borderRadius: 8,
                  backgroundColor: '#e91e63',
                  marginTop: 9,
                }}
              >
                <Text
                  style={{
                    fontSize: 17,
                    color: '#fff',
                    fontWeight: '700',
                  }}
                >
                  Save 20%
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 81 }}>
              <FontAwesomeIcon icon={faStar} size={19} color="#ebcb7d" />
              <Text
                style={{
                  color: '#000',
                  fontSize: 17,
                  fontWeight: '700',
                  marginHorizontal: 5,
                }}
              >
                4.3
              </Text>
              <Text
                style={{
                  color: '#555',
                  fontSize: 16,
                  fontWeight: '500',
                }}
              >
                (342 Reviews)
              </Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            color: '#000',
            fontSize: 18,
            fontWeight: '600',
            margin: 15,
          }}
        >
          Information
        </Text>
        <Text
          style={{
            color: '#555',
            fontSize: 15,
            fontWeight: '500',
            marginHorizontal: 15,
          }}
        >
          Shopy offers a wide variety collection of shirts for men. Search for
          your piece from brands like Allen Solly,Lee, John Players, Park
          Avenue, United Colors of shirts.
        </Text>
      </View>
    </ScrollView>
  )
}
