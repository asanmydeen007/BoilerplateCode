import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ExampleContainer } from '@/Containers'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faCoffee,
  faSearch,
  faHeart,
  faShoppingCart,
  faArchive,
  faUser,
  faHome,
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import CartPage from '@/Containers/CartPage'
import Favourites from '@/Containers/Favourites'
import Profile from '@/Containers/Profile'
import HomePage from '@/Containers/HomePage'
const Tab = createBottomTabNavigator()
library.add(
  faSearch,
  faCoffee,
  faHeart,
  faShoppingCart,
  faArchive,
  faUser,
  faHome,
)
// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          if (route.name === 'HomePage') {
            iconName = 'home'
            size = focused ? 25 : 20
            color = focused ? '#000' : '#C1A3A3'
          } else if (route.name === 'Favourites') {
            iconName = 'heart'
            size = focused ? 25 : 20
            color = focused ? '#000' : '#C1A3A3'
          } else if (route.name === 'MyCart') {
            iconName = 'shopping-cart'
            size = focused ? 25 : 20
            color = focused ? '#000' : '#C1A3A3'
          } else if (route.name === 'User') {
            iconName = 'user'
            size = focused ? 25 : 20
            color = focused ? '#000' : '#C1A3A3'
          }
          return <FontAwesomeIcon icon={iconName} size={size} color={color} />
        },
      })}
    >
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="MyCart"
        component={CartPage}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="User"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator
