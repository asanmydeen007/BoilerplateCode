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
import { faSearch, faHeart, faBell } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '@/Hooks'
import { navigate } from '@/Navigators/utils'

export default function HomePage() {
  const { Layout, Images } = useTheme()
  return (
    <ScrollView style={{ backgroundColor: '#fff', flex: 1 }}>
      <View style={{ margin: 30 }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: -10,
          }}
        >
          <View style={styles.inputView}>
            <FontAwesomeIcon
              style={{ marginLeft: 20 }}
              icon={faSearch}
              size={24}
              color="#555"
            />
            <TextInput
              style={styles.TextInput}
              placeholder="Search clothes.."
              PlaceholderTextColor="#555555"
            />
          </View>
          <View
            style={{
              marginLeft: 5,
              backgroundColor: '#f3f3f3',
              borderRadius: 8,
              width: '16%',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FontAwesomeIcon icon={faBell} size={24} color="#555" />
          </View>
        </View>
        <View
          style={{
            marginTop: 35,
            elevation: 60,
            shadowColor: '#000',
          }}
        >
          <Image
            style={{
              height: 160,
              borderRadius: 9,
              width: '100%',
            }}
            source={{
              uri:
                'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/bright-red-sale-banner-design-template-065ce7aa410c2f73c5d76cd6e4ac88c3_screen.jpg?ts=1561429000',
            }}
          />
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{ marginVertical: 35 }}
        >
          <Scrollbtn title="Recommend" />
          <Scrollbtn title="Outer" />
          <Scrollbtn title="Shirt" />
          <Scrollbtn title="Sweater" />
          <Scrollbtn title="Jeans" />
        </ScrollView>
        <View
          //   showsVerticalScrollIndicator={false}
          style={{ flexDirection: 'row', flexWrap: 'wrap' }}
        >
          <ImageView
            img={Images.shirt}
            productName="Casual Shirt"
            price="$243"
          />
          <ImageView img={Images.jean} productName="Skiny Jeans" price="$190" />
          <ImageView
            img={Images.jackets}
            productName="Buffer Jacket"
            price="$328"
          />
          <ImageView img={Images.bag} productName="Shoulder Bag" price="$160" />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputView: {
    marginTop: 20,
    backgroundColor: '#f3f3f3',
    borderRadius: 8,
    width: '75%',
    height: 50,
    marginBottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },

  TextInput: {
    width: '100%',
    height: 50,
    // flex: 1,
    padding: 10,
    marginLeft: 10,
  },
})
const Scrollbtn = ({ title }) => {
  const [btnActive, setBtnActive] = useState('')
  return (
    <TouchableOpacity
      onPress={() => setBtnActive(title)}
      style={{
        height: 52,
        padding: 13.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: btnActive ? '#000' : '#fff',
        borderRadius: 7,
        marginRight: 15,
        borderColor: '#ddd',
        borderWidth: 1,
      }}
    >
      <Text
        style={{
          color: btnActive ? '#ddd' : '#555',
          fontSize: 17,
          fontWeight: '500',
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const ImageView = props => {
  return (
    <View style={{ margin: 12, flexDirection: 'column' }}>
      <TouchableOpacity onPress={() => navigate('MyCart')}>
        <Image
          style={{ height: 200, width: 140, borderRadius: 9, marginBottom: 10 }}
          source={props.img}
        />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          // alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 17,
              fontWeight: '700',
              marginBottom: 3,
              color: '#555555',
            }}
          >
            {props.productName}
          </Text>
          <Text style={{ fontSize: 15, fontWeight: '600', color: '#d74f50' }}>
            {props.price}
          </Text>
        </View>
        <View>
          <FontAwesomeIcon icon={faHeart} size={24} color="#000" />
        </View>
      </View>
    </View>
  )
}
