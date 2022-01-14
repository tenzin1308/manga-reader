import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const MangaList = ({image, title}) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: image }} style={styles.image} />
            <Text style={styles.text}>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 20
    },
    text: {
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 25
    }
})

export default MangaList
