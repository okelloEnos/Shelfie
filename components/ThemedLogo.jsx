import { View, Text, useColorScheme, Image } from 'react-native'
import React from 'react'
import DarkLogo from '../assets/images/logo_dark.png'
import LightLogo from '../assets/images/logo_light.png'

const ThemedLogo = ({ ...props }) => {
    const colorScheme = useColorScheme()
    const logo = colorScheme === 'dark' ? DarkLogo : LightLogo

    return (
        <Image source={logo} style={{ width: 150, height: 150 }} {...props} />
    )
}

export default ThemedLogo