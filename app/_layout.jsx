import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React, { use } from 'react'
import { Slot, Stack } from 'expo-router'
import { Colors } from '../constants/Colors'
import { StatusBar } from 'expo-status-bar'
import { UserProvider } from '../contexts/UserContext'
import { BooksProvider } from '../contexts/BooksContext'

export default function RootLayout() {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <UserProvider>
            <BooksProvider>
                <StatusBar value="auto" />
                <Stack screenOptions={{
                    headerStyle: { backgroundColor: theme.navBackground },
                    headerTintColor: theme.title
                }}>
                    {/* Individual Screens - Keep index first to make it the initial screen */}
                    <Stack.Screen name='index' options={{ title: "Home", headerTitleAlign: "center" }} />

                    {/* Groups */}
                    <Stack.Screen name='(auth)' options={{ headerShown: false }} />
                    <Stack.Screen name='(dashboard)' options={{ headerShown: false }} />
                </Stack>
            </BooksProvider>
        </UserProvider>
    )
}
