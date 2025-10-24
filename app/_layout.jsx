import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React, { use } from 'react'
import { Slot, Stack } from 'expo-router'
import { Colors } from '../constants/Colors'
import { StatusBar } from 'expo-status-bar'

export default function RootLayout() {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <>
            <StatusBar value="auto" />
            <Stack screenOptions={{
                headerStyle: { backgroundColor: theme.navBackground },
                headerTintColor: theme.title
            }}>
                {/* Groups */}
                {/* <Stack.Screen name='(auth)' options={{ headerShown: false }} /> */}
                {/* <Stack.Screen name='(dashboard)' options={{ headerShown: false }} /> */}

                {/* Individual Screens */}
                {/* <Stack.Screen name='index' options={{ title: "Home" }} /> */}
            </Stack>
        </>
    )
}
