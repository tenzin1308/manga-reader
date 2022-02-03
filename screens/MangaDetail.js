import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const baseURL = 'https://manga-reader-server.herokuapp.com/api/manga/';

const MangaDetail = ({ route }) => {
  
  const { manga_description, title, image, navigation } = route.params;

  const [chapter, setChapter] = useState([]);
  
  useEffect(() => {
    try {
      axios.get(`${baseURL}readm/title/manga_chapters?manga_name=${title}`)
        .then(res => {
          setChapter(res.data);
        }).catch(err => {
          console.log(err);
        })
    } catch (error) {
      console.log(error);
    }
  }, [])

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ paddingLeft: 5 }}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: image }} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
              <Text style={{fontWeight: 'bold'}}>Summary</Text>
              <Text>{manga_description} </Text>
            </View>
          </View>
          <View style={{ marginTop: 5 }}>
            <Text style={{ fontWeight: 'bold', marginBottom:10, fontSize:20 }}>Chapter List</Text>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={false} >
              {chapter.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={{
                      padding: 5,
                    }}
                    onPress={() => navigation.navigate('Chapter Page', { chapter_num: Object.keys(item),  chapter_image: item[Object.keys(item)] })} >
                    <Text>{Object.keys(item)}</Text>
                  </TouchableOpacity>
                )
              })}
            </ScrollView>
          </View>  
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  container: {
    flexDirection: 'row',
  },
  imageContainer: {
    width: '30%'
  },
  textContainer: {
    width: '70%',
    paddingLeft: 20
  },
  image: {
    width: '100%',
    height: 200
  },
  title: {
    fontSize: 24,
    marginVertical: 5,
    fontWeight: 'bold'
  },
});



export default MangaDetail;
