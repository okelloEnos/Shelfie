import { Tabs } from "expo-router"
import { useColorScheme } from "react-native"
import { Colors } from "../../constants/Colors"
import { Ionicons } from "@expo/vector-icons"



const DashboardLayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: theme.navBackground,
                    paddingTop: 10,
                    height: 80
                },
                tabBarActiveTintColor: theme.iconColorFocused,
                tabBarInactiveTintColor: theme.iconColor
            }}
        >
            {/* Define your tab screens here */}
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "person" : "person-outline"}
                            size={24}
                            color={focused ? theme.iconColorFocused : theme.iconColor}
                        />
                    )
                }} />

            <Tabs.Screen
                name="books"
                options={{
                    title: "Books",
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "book" : "book-outline"}
                            size={24}
                            color={focused ? theme.iconColorFocused : theme.iconColor}
                        />
                    )
                }} />

            <Tabs.Screen
                name="create"
                options={{
                    title: "Create",
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? "create" : "create-outline"}
                            size={24}
                            color={focused ? theme.iconColorFocused : theme.iconColor}
                        />
                    )
                }} />



        </Tabs>
    )
}

export default DashboardLayout