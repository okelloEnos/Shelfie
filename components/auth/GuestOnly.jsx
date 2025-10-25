import { useRouter } from "expo-router"
import { useUser } from "../../hooks/useUser"
import { useEffect } from "react"
import { Text } from "react-native"
import ThemedLoder from '../../components/ThemedLoader'

const GuestOnly = ({ children }) => {
    const { user, authChecked } = useUser()
    const router = useRouter()

    useEffect(() => {
        if (authChecked && user !== null) {
            router.replace('/profile')
        }

    }, [user, authChecked])

    if (!authChecked || user) {
        return (
            <ThemedLoder size="large" color="white" />
        )
    }

    return children
}

export default GuestOnly