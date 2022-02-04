import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const baseURL = 'https://manga-reader-server.herokuapp.com/api/manga/';

const MangaDetail = ({ route }) => {
  
  const { manga_description, title, image, liked, setLiked, navigation } = route.params;

  const [chapter, setChapter] = useState([]);
  const [like, setLike] = useState(liked);
  
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

  const likeHandler = () => {
    setLike(!like);
    setLiked(!like);
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ paddingLeft: 5 }}>
          <View style={styles.navContainer}>
            <View style={styles.titleContainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={{ uri: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/000000/external-back-key-navigation-button-on-computer-button-keyboard-color-tal-revivo.png" }}
                  style={{ width: 30, height: 30, marginRight: 5, marginTop: 7 }}
                />
              </TouchableOpacity>
              <Text style={styles.title}>{title}</Text>
            </View>
            <TouchableOpacity onPress={() => likeHandler()}>
              {!like ? 
                <Image source={{ uri: "https://img.icons8.com/material-outlined/96/000000/like--v1.png" }} style={styles.likeImage} />
                    :
                <Image source={{ uri: "https://img.icons8.com/ios/96/FF0000/like-filled.png" }} style={styles.likeImage} />
              }
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: image }} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
              <Text style={{ fontWeight: 'bold' }}>Summary</Text>
              <ScrollView style={{ height: 100 }}>
                <Text>{manga_description} </Text>
              </ScrollView>
            </View>
          </View>
          <View style={{ marginTop: 5 }}>
            <Text style={{ fontWeight: 'bold', marginBottom:10, fontSize:20 }}>Chapter List</Text>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={false} >
              {chapter.map((item, index, elements) => {
                return (
                  <TouchableOpacity
                    key={index}
                    style={{
                      padding: 1,
                      margin: 1,
                    }}
                    onPress={() => navigation.navigate('Chapter Page', {
                      chapter_num: elements[index] ? Object.keys(elements[index]) : null,
                      chapter_image: elements[index] ? elements[index][Object.keys(elements[index])] : null,
                      navigation: navigation,
                      prev_chapter_num: elements[index - 1] ? Object.keys(elements[index - 1]) : null,
                      prev_chapter_image: elements[index - 1] ? elements[index - 1][Object.keys(elements[index - 1])] : null,
                      next_chapter_num: elements[index + 1] ? Object.keys(elements[index + 1]) : null,
                      next_chapter_image: elements[index + 1] ? elements[index + 1][Object.keys(elements[index + 1])] : null,
                      chapters: elements,
                      index: index,
                    })} >
                    <Text style={styles.chapter_list}>{Object.keys(item)}</Text>
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
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
  },
  navContainer: {
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
  },
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  imageContainer: {
    width: '30%'
  },
  likeImage: {
    zIndex: 0,
    right: 10,
    top: 10,
    width: 30,
    height: 30,
    padding: 5,
    margin: 5,
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
    fontWeight: 'bold',
  },
  chapter_list: {
    paddingTop: 0,
    paddingRight: 25,
    paddingBottom: 0,
    paddingLeft: 25,
    height: 50,
    fontSize: 16,
    lineHeight: 50,
    borderRadius: 50,
    backgroundColor: '#E3E3E3',
  }
});



export default MangaDetail;
