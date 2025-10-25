import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useBooks } from "../../hooks/useBooks"
import { useRouter } from "expo-router"
import { useState } from "react"

import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedTextInput from '../../components/ThemedTextInput'
import ThemedButton from '../../components/ThemedButton'
import Spacer from '../../components/Spacer'
// import ThemedTextInput from '../../components/ThemedTextInput'
// import ThemedButton from '../../components/ThemedButton'


const Create = () => {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [description, setDescription] = useState("")
    const [loading, setLoading] = useState(false)

    const { createBook } = useBooks()
    const router = useRouter()

    const handleSubmit = async () => {
        if (!title.trim() || !author.trim() || !description.trim()) return
        setLoading(true)
        try {
            await createBook({ title, author, description })
            setTitle("")
            setAuthor("")
            setDescription("")
            setLoading(false)

            // redirect
            router.replace("/books")
        }
        catch (error) {
            console.log("Create Book failed", error.message)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView style={styles.container}>

                <ThemedText title={true} style={styles.heading}> Add a New Book </ThemedText>
                <Spacer />

                <ThemedTextInput
                    style={styles.input}
                    placeholder="Book Title"
                    value={title}
                    onChangeText={setTitle}
                />
                <Spacer />

                <ThemedTextInput
                    style={styles.input}
                    placeholder="Author"
                    value={author}
                    onChangeText={setAuthor}
                />
                <Spacer />

                <ThemedTextInput
                    style={styles.multiline}
                    placeholder="Book Description"
                    value={description}
                    onChangeText={setDescription}
                    multiline={true}
                />
                <Spacer />

                <ThemedButton onPress={handleSubmit} disabled={loading}>
                    <ThemedText style={{ color: "#fff" }}> {loading ? "Saving..." : "Create Book"}   </ThemedText>
                </ThemedButton>
            </ThemedView>
        </TouchableWithoutFeedback>
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
    },
    input: {
        padding: 20,
        borderRadius: 6,
        alignSelf: "stretch",
        marginHorizontal: 40
    },
    multiline: {
        padding: 20,
        borderRadius: 6,
        minHeight: 100,
        alignSelf: "stretch",
        marginHorizontal: 40
    }
})