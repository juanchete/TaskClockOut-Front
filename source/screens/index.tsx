import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import Icon from 'react-native-vector-icons/Foundation';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from "./Home";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return <Home/>;
};

const ProfileScreen = () => {
  return <View><Text>Profile Screen</Text></View>;
};

const SettingsScreen = () => {
  return <View><Text>Settings Screen</Text></View>;
};

const NotificationsScreen = () => {
  return <View><Text>Notifications Screen</Text></View>;
};

const App = () => {
  return (
    <Tab.Navigator 
    screenOptions={{
      headerShown: false,
      tabBarStyle:{
        backgroundColor: "#151718",
        height: 100,
      }
    }}
    >
      <Tab.Screen options={() => ({
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <Icon style={{ marginTop: 20}} name="home" size={30}  color={ focused ? "#2fbc83" : "#343538"} />
            ),
            tabBarLabel: ({ focused, color }) => (
              <Text style={{ color: focused ? "#2fbc83" : "#343538", marginBottom: 5, fontSize: 12 }}>Profile</Text>
            ),
          })} name="Home" component={HomeScreen} />
      <Tab.Screen options={() => ({
            title: "Profile",
            tabBarIcon: ({ color, focused }) => (
              <IconIonicons style={{ marginTop: 20}} name="grid-outline" size={30}  color={ focused ? "#2fbc83" : "#343538"} />
            ),
            tabBarLabel: ({ focused, color }) => (
              <Text style={{ color: focused ? "#2fbc83" : "#343538", marginBottom: 5, fontSize: 12 }}>Profile</Text>
            ),
          })} name="Profile" component={ProfileScreen} />
      <Tab.Screen options={() => ({
            title: "",
            tabBarIcon: ({ color, focused }) => (
              <View style={{
                height: 50,
                width: 50,
                borderRadius: 100,
                backgroundColor: '#343538',
                // paddingTop: 20,
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center',}}>
              <MaterialIcons name="compare-arrows" size={40}  color={ focused ? "#2fbc83" : "#343538"} />
              </View>
            ),
          })} name="Exchange" component={SettingsScreen} />
      <Tab.Screen options={() => ({
            title: "Profile",
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons style={{ marginTop: 20}} name="wallet" size={30}  color={ focused ? "#2fbc83" : "#343538"} />
            ),
            tabBarLabel: ({ focused, color }) => (
              <Text style={{ color: focused ? "#2fbc83" : "#343538", marginBottom: 5, fontSize: 12, fontSize: 12 }}>Profile</Text>
            ),
          })} name="Settings" component={SettingsScreen} />
      <Tab.Screen options={() => ({
            title: "Profile",
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons style={{ marginTop: 20}} name="dots-horizontal" size={30}  color={ focused ? "#2fbc83" : "#343538"} />
            ),
            tabBarLabel: ({ focused, color }) => (
              <Text style={{ color: focused ? "#2fbc83" : "#343538", marginBottom: 5, fontSize: 12 }}>Profile</Text>
            ),
          })} name="Notifications" component={NotificationsScreen} />
    </Tab.Navigator>
  );
};

export default App;
