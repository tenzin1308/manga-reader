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
                    <View style={styles.titleContainer}>
                        <TouchableOpacity onPress={() => route.params.navigation.goBack()}>
                            <Image
                                source={{ uri: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/000000/external-back-key-navigation-button-on-computer-button-keyboard-color-tal-revivo.png" }}
                                style={{ width: 30, height: 30, marginRight: 5, marginTop: 3 }}
                            />
                        </TouchableOpacity>
                        <Text style={styles.title}>{route.params.chapter_num}</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <ScrollView style={{paddingBottom: 100}} >
                            {route.params.chapter_image.map((image, index) => {
                                return (
                                    <Image source={{ uri: image }} style={{ width: width, height: 300 }} key={index} />
                                    
                                )
                            })}
                        </ScrollView>
                    </View>
                    {showNavigation && (
                        <View style={styles.chapterNavigationContainer}>
                            <Button onPress={() => route.params.navigation.navigate('Chapter Page', {
                                chapter_num: route.params.next_chapter_num,
                                chapter_image: route.params.next_chapter_image,
                                navigation: route.params.navigation
                                })} title={String(route.params.next_chapter_num)} />
                            <Button onPress={() => route.params.navigation.navigate('Chapter Page', {
                                chapter_num: route.params.prev_chapter_num,
                                chapter_image: route.params.prev_chapter_image,
                                navigation: route.params.navigation
                                })} title={String(route.params.prev_chapter_num)} />
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
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
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
        bottom: 100,
        marginBottom: 20,
        paddingBottom: 20,
        width: width,
        height: 100,
    },
    
});


export default ChapterPage;
