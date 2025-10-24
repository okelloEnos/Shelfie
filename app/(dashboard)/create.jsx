import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'

const Create = () => {
    return (
        <ThemedView style={styles.container}>

            <ThemedText title={true} style={styles.heading}> Add a New Book </ThemedText>
            <Spacer height={20} />
        </ThemedView>
    )
}

export default Create

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