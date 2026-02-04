import { Text, View, StyleSheet} from "react-native";
import {ImageBackground} from "expo-image";
import { Stack } from 'expo-router';
import {DefaultTheme} from "@react-navigation/native";

export default function Index() {
    return (
        <View style={styles.container} >
            < Stack.Screen options={{ headerShown: false}} />
            <ImageBackground
                style={[styles.image, styles.container]}
                source={{
                    uri: "https://wallpapers.com/images/hd/pink-love-1920-x-1080-wallpaper-mzjkazybbea7amzt.jpg",
                }}
            >
                <View style={[styles.rect, styles.window]}>

                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    rect: {
        borderRadius: 10,
    },
    window: {
        width: '70%',
        height: '70%',
        minWidth: 500,
        maxWidth: 800,
        backgroundColor: "white",

    }
})