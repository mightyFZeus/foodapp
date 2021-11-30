import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Icon from 'react-native-vector-icons/MaterialIcons';
import { MaterialIcons } from "@expo/vector-icons";
import COLORS from "../../consts/colors";
import { View } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                style: {
                    height: 55,
                    borderTopWidth: 0,
                    elevation: 0,
                },

          tabBarShowLabel: false,
                headerShown:false,
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.grey,
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="home" color={color} size={28} />
                    ),
                }}
            />
            <Tab.Screen
                name="LocalMall"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons
                            name="local-mall"
                            color={color}
                            size={28}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <View
                            style={{
                                height: 60,
                                width: 60,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: COLORS.white,
                                borderColor: COLORS.primary,
                                borderWidth: 2,
                                borderRadius: 30,
                                top: -25,
                                elevation: 5,
                            }}
                        >
                            <MaterialIcons
                                name="search"
                                color={COLORS.primary}
                                size={28}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Favorite"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons
                            name="favorite"
                            color={color}
                            size={28}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons
                            name="shopping-cart"
                            color={color}
                            size={28}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomNavigator;
