import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const MangaList = ({ image, title, description, navigation }) => {

    const [liked, setLiked] = React.useState(false)
    
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Manga Detail', {
            manga_description: description,
            title: title,
            image: image,
            liked: liked,
            setLiked: setLiked,
            navigation: navigation})}>
            <View style={styles.container}>
                <Image
                    source={{ uri: image }} style={styles.image} />
                <TouchableOpacity onPress={() => setLiked(!liked)}>
                    {!liked ? 
                    <Image source={{ uri: "https://img.icons8.com/material-outlined/96/000000/like--v1.png" }} style={styles.likeImage} />
                        :
                    <Image source={{ uri: "https://img.icons8.com/ios/96/FF0000/like-filled.png" }} style={styles.likeImage} />
                    }
                </TouchableOpacity>
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
    // likeImage: {
    //     position: "absolute",
    //     zIndex: 100,
    //     right: 0,
    //     width: 30,
    //     height: 30
    // },
    likeImage: {
        position: "absolute",
        zIndex: 0,
        right: 0,
        width: 30,
        height: 30
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
        color: 'pink',
        borderColor: 'black'
    }
})

export default MangaList
