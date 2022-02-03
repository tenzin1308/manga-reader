import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import BottomNav from '../components/home/BottomNav';
import MangaList from '../components/home/MangaList';
import Nav from '../components/home/Nav';


const Home = ({mangas, navigation}) => {
    return (
        <SafeAreaView>
            <Nav />
            <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: "#121212"}}>
                <View style={styles.mangaList}>
                    {mangas.map((manga, index) => {
                        return (
                            <MangaList
                                image={manga.manga_image}
                                title={manga.manga_name}
                                description={manga.manga_description}
                                key={index}
                                navigation={navigation} 
                            />
                        )
                    })}
                </View>
            </ScrollView>
            <BottomNav />
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
