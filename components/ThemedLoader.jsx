import { useColorScheme, ActivityIndicator } from "react-native"
import { Colors } from "../constants/Colors"
import ThemedView from "./ThemedView"

const ThemedLoder = () => {
    const colorScheme = useColorScheme
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <ThemedView
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <ActivityIndicator size="large" color={theme.text} />
        </ThemedView>
    )
}

export default ThemedLoder