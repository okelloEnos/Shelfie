import { StyleSheet, Text, View } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { useBooks } from '../../../hooks/useBooks'

import ThemedView from '../../../components/ThemedView'
import Spacer from '../../../components/Spacer'
import ThemedText from '../../../components/ThemedText'
import ThemedCard from '../../../components/ThemedCard'
import ThemedButton from '../../../components/ThemedButton'
import ThemedLoder from '../../../components/ThemedLoader'
import { Colors } from '../../../constants/Colors'

const BookDetails = () => {
    const [book, setBook] = useState(null)
    const { id } = useLocalSearchParams()
    const { fetchBookById, deleteBook } = useBooks()
    const router = useRouter()

    const handleDelete = async () => {
        try {
            await deleteBook(id)
            setBook(null)

            // redirect
            router.replace("/books")
        }
        catch (error) {
            console.log("Delete book failed", error.message)
        }
    }

    useEffect(() => {

        async function loadBook() {
            const bookData = await fetchBookById(id)
            setBook(bookData)
        }

        loadBook()
    }, [id])

    if (!book) {
        return (
            <ThemedView safe={true} style={styles.container}>
                <ThemedLoder />
            </ThemedView>
        )
    }

    return (
        <ThemedView safe={true}
            styles={styles.container}
        >
            <ThemedCard style={styles.card}>
                <ThemedText style={styles.title}>{book.title}</ThemedText>
                <ThemedText>Written by {book.author}</ThemedText>
                <Spacer />

                <ThemedText>Book Description:</ThemedText>
                <Spacer height={10} />
                <ThemedText>{book.description}</ThemedText>
            </ThemedCard>

            <ThemedButton style={styles.delete} onPress={handleDelete}>
                <Text style={{ color: "#fff", textAlign: "center" }}>
                    Delete Book
                </Text>
            </ThemedButton>
        </ThemedView>
    )
}

export default BookDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch"
    },
    title: {
        fontSize: 22,
        marginVertical: 10
    },
    card: {
        margin: 20
    },
    delete: {
        marginTop: 40,
        backgroundColor: Colors.warning,
        width: 200,
        alignSelf: "center"
    }
})