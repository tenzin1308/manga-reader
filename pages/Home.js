import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import MangaList from '../components/home/MangaList'
import Nav from '../components/home/Nav'

const Home = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Nav />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.mangaList}>
                    <MangaList image="https://image.mostraveller.com/uploads/images/comics/55/thumbnail.png" title= "One Piece"/>
                    <MangaList image="https://image.mostraveller.com/uploads/images/comics/55/thumbnail.png" title= "One Piece"/>
                    <MangaList image="https://image.mostraveller.com/uploads/images/comics/55/thumbnail.png" title= "One Piece"/>
                    <MangaList image="https://image.mostraveller.com/uploads/images/comics/55/thumbnail.png" title= "One Piece"/>
                    <MangaList image="https://image.mostraveller.com/uploads/images/comics/55/thumbnail.png" title= "One Piece"/>
                    <MangaList image="https://image.mostraveller.com/uploads/images/comics/55/thumbnail.png" title= "One Piece"/>
                    <MangaList image="https://image.mostraveller.com/uploads/images/comics/55/thumbnail.png" title= "One Piece"/>
                    <MangaList image="https://image.mostraveller.com/uploads/images/comics/55/thumbnail.png" title= "One Piece"/>
                    <MangaList image="https://image.mostraveller.com/uploads/images/comics/55/thumbnail.png" title= "One Piece"/>
                    <MangaList image="https://image.mostraveller.com/uploads/images/comics/55/thumbnail.png" title= "One Piece"/>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mangaList: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

export default Home
