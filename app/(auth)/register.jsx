import { StyleSheet } from 'react-native'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import { Link } from 'expo-router'

const Register = () => {

    const handleSubmit = () => {
        console.log("Register pressed")
    }


    return (
        <ThemedView style={styles.container}>

            <Spacer />
            <ThemedText style={styles.title} title={true}> Register For An Account </ThemedText>

            <Spacer />
            <ThemedButton onPress={handleSubmit}>
                <ThemedText style={{ textAlign: 'center', color: "#f2f2f2" }}> Register </ThemedText>
            </ThemedButton>

            <Spacer height={100} />
            <Link href="/login">
                <ThemedText style={{ textAlign: 'center' }}> Login instead </ThemedText>
            </Link>
        </ThemedView>
    )
}

export default Register

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