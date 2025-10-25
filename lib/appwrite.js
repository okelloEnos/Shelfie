import { Client, Account, Avatars, Databases } from "react-native-appwrite";

export const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("68fa2ef0000d7bd84220")
    .setPlatform("com.okelloSoftwarez.shelfie_app")

export const account = new Account(client)
export const avatars = new Avatars(client)
export const databases = new Databases(client)
