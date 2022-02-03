import axios from "axios";
import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import MangaList from '../components/MangaList';

const baseURL = "https://manga-reader-server.herokuapp.com/api/manga/";

const Discovery = ({navigation}) => {

  const [mangas, setMangas] = useState([]);

  useEffect(() => {
    try {
      axios
        .get(`${baseURL}readm/`)
        .then((res) => {
          setMangas(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} >
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    mangaList: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

export default Discovery;
