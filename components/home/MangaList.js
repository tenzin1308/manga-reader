import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const MangaList = ({image, title, description, navigation}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Manga Detail', { manga_description: description })}>
            <View style={styles.container}>
                <Image
                    source={{ uri: image }} style={styles.image} />
                <Text style={styles.text}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
        width: 150,
        height: 200
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 10
    },
    text: {
        flex: 1,
        width: "100%",
        position: 'absolute',
        bottom: 0,
        fontWeight: 'bold',
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        borderColor: 'black'
    }
})

export default MangaList
