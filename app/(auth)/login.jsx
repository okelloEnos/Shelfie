import { StyleSheet, Pressable, TextInput, ActivityIndicator } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useState } from 'react'
import { useUser } from '../../hooks/useUser'


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const { login } = useUser()

    const handleSubmit = async () => {
        setError(null)

        try {
            await login(email, password)
        }
        catch (error) {
            setError(error.message)
        }
    }

    return (
        <ThemedView style={styles.container}>

            <Spacer />
            <ThemedText style={styles.title} title={true}>Login to Your Account</ThemedText>
            <ThemedTextInput
                style={{ width: '80%', marginBottom: 20 }}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={setEmail}
                value={email}

            />
            <Spacer height={10} />
            <ThemedTextInput
                style={{ width: '80%', marginBottom: 20 }}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={setPassword}
                value={password}

            />

            <Spacer />
            <ThemedButton onPress={handleSubmit}>
                <ThemedText style={{ textAlign: 'center', color: "#f2f2f2" }}> Login </ThemedText>
            </ThemedButton>
            <Spacer />
            {error && <ThemedText style={styles.error}>{error}</ThemedText>}

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
    error: {
        color: Colors.warning,
        padding: 10,
        backgroundColor: '#f5c1c8',
        borderColor: Colors.warning,
        borderWidth: 1,
        borderRadius: 6,
        marginHorizontal: 10
    }

})