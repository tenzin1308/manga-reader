import React from 'react'
import { Alert, Image, StyleSheet, TouchableOpacity, View } from 'react-native'


const Nav = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => Alert.alert('image clicked')}>
                    <Image
                        source={{ uri: "https://img.icons8.com/material-outlined/48/ffffff/menu--v1.png" }}
                        style={styles.icons}
                    />
                    
                </TouchableOpacity>

            </View>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => Alert.alert('image clicked')}>
                    
                    <Image
                        source={{ uri: "https://img.icons8.com/material-outlined/48/ffffff/search--v1.png" }}
                        style={styles.icons}
                    />
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2e2e2e",
        justifyContent: 'space-between',
        flexDirection: "row",
        alignItems: "center",
        padding: 5
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

export default Nav
