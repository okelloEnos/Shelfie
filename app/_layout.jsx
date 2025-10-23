import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React, { use } from 'react'
import { Slot, Stack } from 'expo-router'
import { Colors } from '../constants/Colors'
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <>
            <StatusBar style="auto" />
            <Stack screenOptions={{
                headerStyle: { backgroundColor: theme.navBackground },
                headerTintColor: theme.title
            }}>
                <Stack.Screen name='(auth)' options={{ headerShown: false }} />
                <Stack.Screen name='index' options={{ title: "Home" }} />
            </Stack>
        </>
    )
}

export default RootLayout

const styles = StyleSheet.create({})