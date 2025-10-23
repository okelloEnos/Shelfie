import { StyleSheet } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'

const Login = () => {
    return (
        <ThemedView style={styles.container}>

            <Spacer />
            <ThemedText style={styles.title} title={true}>Login to Your Account</ThemedText>
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
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 20,
    },
})