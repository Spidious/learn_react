import { Text, View, StyleSheet, useWindowDimensions, Pressable } from "react-native";
import {ImageBackground} from "expo-image";
import { Stack } from 'expo-router';
import {DefaultTheme} from "@react-navigation/native";

export default function Index() {
    const {height, width} = useWindowDimensions();

    return (
        <View style={{width:width, height:height}} >
            < Stack.Screen options={{ headerShown: false}} />
            <ImageBackground
                style={[styles.image, styles.container]}
                source={{
                    uri: "https://wallpapers.com/images/hd/pink-love-1920-x-1080-wallpaper-mzjkazybbea7amzt.jpg",
                }}
            >
                <View style={[((width <= 500) ? styles.window_mobile : styles.window_desktop)]}>
                    <View style={styles.container}>
                        <Text style={{ fontSize:((width <= 500) ? 25 : 35), marginVertical: 20 }}>Will you be my Valentine?</Text>
                        <View style={[styles.option_box, {flexDirection: (width <= 500) ? 'column' : 'row'}]}>
                            <Pressable
                                style={styles.button}
                                onPress={()=> window.alert("Yes")}
                            > Yes! </Pressable>
                            <Pressable
                                style={styles.button}
                                onPress={()=> window.alert("No")}
                            > No! </Pressable>
                        </View>
                    </View>
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
    window_mobile: {
        width: "100%",
        height: "75%",
        backgroundColor: "white",

    },
    window_desktop: {
        width: "60%",
        height: "70%",
        borderRadius: 15,
        backgroundColor: "white",
    },
    option_box: {
        height: "70%",
        width: "90%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        margin: "auto",
        backgroundColor: "pink",
        borderRadius: 10,
        width: "30%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    }
})