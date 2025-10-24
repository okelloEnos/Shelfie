import { StyleSheet, Pressable } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'
import ThemedButton from '../../components/ThemedButton'

const Login = () => {

    const handleSubmit = () => {
        console.log("Login pressed")
    }

    return (
        <ThemedView style={styles.container}>

            <Spacer />
            <ThemedText style={styles.title} title={true}>Login to Your Account</ThemedText>

            <Spacer />
            <ThemedButton onPress={handleSubmit}>
                <ThemedText style={{ textAlign: 'center', color: "#f2f2f2" }}> Login </ThemedText>
            </ThemedButton>

            <Spacer height={100} />
            <Link href="/register">
                <ThemedText style={{ textAlign: 'center' }}> Register instead </ThemedText>
            </Link>
        </ThemedView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 20,
    },

})