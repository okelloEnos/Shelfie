import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'
import { useUser } from '../../hooks/useUser'
import ThemedButton from '../../components/ThemedButton'

const Profile = () => {
    const { logout, user } = useUser()

    return (
        <ThemedView style={styles.container}>
            <ThemedText title={true} style={styles.heading}> {user.email} </ThemedText>
            <Spacer height={20} />
            <ThemedText >Time to start reading some books...</ThemedText>
            <Spacer height={20} />
            <ThemedButton onPress={logout}>
                <ThemedText style={{ color: "#f2f2f2" }}> Log Out</ThemedText>
            </ThemedButton>
        </ThemedView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})