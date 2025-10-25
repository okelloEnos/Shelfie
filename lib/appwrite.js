import { Client, Account, Avatars } from "react-native-appwrite";

export const client = new Client()
    .setProject("68fa2ef0000d7bd84220")
    .setPlatform("com.okelloSoftwarez.shelfie_app");

export const account = new Account(client);
export const avatars = new Avatars(client);
