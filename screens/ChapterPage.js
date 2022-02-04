import React, { useState } from 'react';
import { Button, Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const width = Dimensions.get('window').width;

const ChapterPage = ({ route }) => {

    const [showNavigation, setShowNavigation] = useState(true);
    const hideNavigation = () => {
        setShowNavigation(!showNavigation);
    }

    return (
        <SafeAreaView>
            <View onResponderGrant={hideNavigation} onStartShouldSetResponder={hideNavigation}>   
                <View >
                    {showNavigation && <View style={styles.titleContainer}>
                        <TouchableOpacity onPress={() => route.params.navigation.goBack()}>
                            <Image
                                source={{ uri: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/000000/external-back-key-navigation-button-on-computer-button-keyboard-color-tal-revivo.png" }}
                                style={{ width: 30, height: 30, marginRight: 5, marginTop: 3 }}
                            />
                        </TouchableOpacity>
                        <Text style={styles.title}>{route.params.chapter_num}</Text>
                    </View>}
                    <View style={styles.imageContainer}>
                        <ScrollView style={{paddingBottom: 100}} >
                            {route.params.chapter_image.map((image, index) => {
                                return (
                                    <Image source={{ uri: image }} style={{ width: width, height: 300, marginBottom: 10 }} key={index} />
                                )
                            })}
                        </ScrollView>
                    </View>
                    {showNavigation && (
                        <View style={styles.chapterNavigationContainer}>
                            {route.params.chapters[route.params.index + 1] && <Button onPress={() => route.params.navigation.navigate('Chapter Page', {
                                chapter_num: route.params.chapters[route.params.index + 1] ? Object.keys(route.params.chapters[route.params.index + 1]) : '',
                                chapter_image: route.params.chapters[route.params.index + 1] ? route.params.chapters[route.params.index + 1][Object.keys(route.params.chapters[route.params.index + 1])] : '',
                                navigation: route.params.navigation,
                                // Previous
                                prev_chapter_num: route.params.chapter_num,
                                prev_chapter_image: route.params.chapter_image,
                                // Next
                                next_chapter_num: route.params.chapters[route.params.index + 2] ? Object.keys(route.params.chapters[route.params.index + 2]) : null,
                                next_chapter_image: route.params.chapters[route.params.index + 2] ? route.params.chapters[route.params.index + 2][Object.keys(route.params.chapters[route.params.index + 2])] : null,
                                
                                chapters: route.params.chapters,
                                index: route.params.index + 1,
                            })} title={String(Object.keys(route.params.chapters[route.params.index + 1]))}
                                color={'black'} />}
                            {route.params.chapters[route.params.index - 1] && <Button onPress={() => route.params.navigation.navigate('Chapter Page', {
                                chapter_num: route.params.chapters[route.params.index - 1] ? Object.keys(route.params.chapters[route.params.index - 1]) : '',
                                chapter_image: route.params.chapters[route.params.index - 1] ? route.params.chapters[route.params.index - 1][Object.keys(route.params.chapters[route.params.index - 1])] : '',
                                navigation: route.params.navigation,
                                // Previous
                                prev_chapter_num: route.params.chapter_num,
                                prev_chapter_image: route.params.chapter_image,
                                // Next
                                next_chapter_num: route.params.chapters[route.params.index - 2] ? Object.keys(route.params.chapters[route.params.index - 2]) : null,
                                next_chapter_image: route.params.chapters[route.params.index - 2] ? route.params.chapters[route.params.index - 2][Object.keys(route.params.chapters[route.params.index - 2])] : null,
                                
                                chapters: route.params.chapters,
                                index: route.params.index - 1,
                            })} title={String(Object.keys(route.params.chapters[route.params.index - 1]))}
                                color={'black'} />}
                        </View>
                        )}
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        flexDirection: 'row',
        position: 'absolute',
        zIndex: 50,
        backgroundColor: '#fff',
        width: width,
        height: 50,
    },
    title: {
        fontSize: 24,
        marginVertical: 5,
        fontWeight: 'bold'
    },
    imageContainer: {
        marginBottom: 20
    },
    chapterNavigationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: '#fff',
        bottom: 0,
        width: width,
        height: 70,
    },
    
});


export default ChapterPage;
