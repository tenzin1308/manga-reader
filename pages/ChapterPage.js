import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const ChapterPage = ({route}) => {
    return (
        <SafeAreaView>
            <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{route.params.chapter_num}</Text>
                </View>
                <View style={styles.imageContainer}>
                    <ScrollView>
                        {route.params.chapter_image.map((image, index) => {
                            return (
                                <Image source={{ uri: image }} style={{ width: "100%", height: 200 }} key={index} />
                            )
                        })}
                    </ScrollView>
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
        marginBottom: 10
    },
    title: {
        fontSize: 24,
        marginVertical: 5,
        fontWeight: 'bold'
    },
    imageContainer: {
        marginBottom: 20
    },
});


export default ChapterPage;
