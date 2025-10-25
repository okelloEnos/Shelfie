import { createContext, useEffect, useState } from 'react'
import { account, databases, client } from "../lib/appwrite"
import { ID, Permission, Query, Role } from 'react-native-appwrite'
import { useUser } from '../hooks/useUser'

const DATABASE_ID = "68fcad2d003a57263141"
const TABLE_ID = "books"

export const BooksContext = createContext()

export function BooksProvider({ children }) {
    const [books, setBooks] = useState([])
    const { user } = useUser()

    async function fetchBooks() {
        try {
            const response = await databases.listDocuments(
                DATABASE_ID,
                TABLE_ID,
                [
                    Query.equal("userId", user.$id)

                ]
            )

            setBooks(response.documents)
            console.log(response.documents)
        }
        catch (error) {
            console.error(error.message)
        }
    }

    async function fetchBookById(id) {
        try {
            const response = await databases.getDocument(
                DATABASE_ID,
                TABLE_ID,
                id
            )

            return response
        }
        catch (error) {
            console.error(error.message)
        }
    }


    async function createBook(data) {

        try {
            const newBook = await databases.createDocument(
                DATABASE_ID,
                TABLE_ID,
                ID.unique(),
                { ...data, userId: user.$id },
                [
                    Permission.read(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id))
                ]
            )
        }
        catch (error) {
            console.error(error.message)
        }
    }

    async function deleteBook(id) {
        try {
            await databases.deleteDocument(
                DATABASE_ID,
                TABLE_ID,
                id
            )
        }
        catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        let unsubcribe
        const channel = `databases.${DATABASE_ID}.collections.${TABLE_ID}.documents`

        if (user) {
            fetchBooks()

            unsubcribe = client.subscribe(channel, (response) => {
                const { payload, events } = response
                if (events[0].includes('create')) {
                    setBooks((previousBooks) => [...previousBooks, payload])
                }

                if (events[0].includes('delete')) {
                    setBooks((previousBooks) => previousBooks.filter((book) => book.$id !== payload.$id))
                }
            })
        }
        else {
            setBooks([])
        }

        return () => {
            if (unsubcribe) unsubcribe()
        }
    }, [user])

    return (
        <BooksContext.Provider
            value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
        >
            {children}
        </BooksContext.Provider>
    )
}