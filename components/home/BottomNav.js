import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const BottomNav = () => {
  return (
    <View style={styles.container}>
      <Image source={{uri: "https://img.icons8.com/bubbles/100/000000/google-web-search.png"}} style={styles.icons} />
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        // backgroundColor: "#2e2e2e",
        // justifyContent: 'space-between',
        // flexDirection: "row",
        // alignItems: "center",
        // padding: 5,
    },
    icons: {
        width: 40,
        height: 40
    },
    content: {
        color: "white",
        alignItems: "center",
        alignSelf: "center",
        fontSize: 15
    }
})


export default BottomNav;

