import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'

const Profile = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText title={true} style={styles.heading}> Your Email </ThemedText>
            <Spacer height={20} />
            <ThemedText >Time to start reading some books...</ThemedText>
            <Spacer height={20} />
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