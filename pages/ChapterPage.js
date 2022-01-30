import React from 'react';
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
// import { PinchGestureHandler } from 'react-native-gesture-handler';
// import Animated from 'react-native-reanimated';

const width = Dimensions.get('window').width;

const ChapterPage = ({ route }) => {

    // const AnimatedImage = Animated.createAnimatedComponent(Image);
    
    // pinchHandler = useAnimatedGestureHandler<PinchGestureHandlerGestureEvent> ({
    //     onActive: (event) => {
    //         console.log(event);
    //     },
    // });

    return (
        <SafeAreaView>
            <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{route.params.chapter_num}</Text>
                </View>
                <View style={styles.imageContainer}>
                    <ScrollView >
                        {route.params.chapter_image.map((image, index) => {
                            return (
                                <Image source={{ uri: image }} style={{ width: width, height: 300 }} key={index} />
                                
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
