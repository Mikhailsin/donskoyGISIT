import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState, useEffect } from "react";
import {
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Text,
    View,
    Image,
    ImageBackground,
    StyleSheet,
} from "react-native";
import * as Font from "expo-font";
import SearchScreen from "./SearchScreen";
import CartScreen from "./CartScreen";
import ProfileScreen from "./ProfileScreen";
const Tab = createBottomTabNavigator();
const MenuScreen = ({ navigation }) => {
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        async function loadFonts() {
            try {
                await Font.loadAsync({
                    "Jua-Regular": require("../../assets/fonts/Jua-Regular.ttf"),
                });
                console.log("Шрифт Jua-Regular успешно загружен");
                setFontLoaded(true);
            } catch (error) {
                console.error("Ошибка загрузки шрифта:", error);
                setFontLoaded(false);
            }
        }
        loadFonts();
    }, []);

    if (!fontLoaded) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.headerWrapper}>
                    <Text style={styles.text1}>г. Якутск</Text>
                    <View style={styles.headerRight}>
                        <Text style={styles.text2}>ГидроАнализ (Шрифт не загружен)</Text>
                        <Image
                            source={require("../../assets/icon/logojo.png")}
                            style={styles.icon1}
                        />
                    </View>
                </View>
                <View style={styles.scrollContainer}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.buttonContainer}
                    >
                        <TouchableOpacity
                            style={[styles.categoryButton, { backgroundColor: "#024B75" }]}
                            onPress={() => navigation.navigate("Books")}
                        >
                            <Image
                                source={require("../../assets/icons/book.png")}
                                style={styles.icon}
                            />
                            <Text style={styles.buttonText}>Кнопка1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.categoryButton, { backgroundColor: "#fff" }]}
                            onPress={() => navigation.navigate("Theater")}
                        >
                            <Image
                                source={require("../../assets/icons/theater.png")}
                                style={styles.icon}
                            />
                            <Text style={styles.buttonText}>Кнопка2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.categoryButton, { backgroundColor: "#FFF1E2" }]}
                            onPress={() => navigation.navigate("Concerts")}
                        >
                            <Image
                                source={require("../../assets/icons/concert.png")}
                                style={styles.icon}
                            />
                            <Text style={styles.buttonText}>Кнопка3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.categoryButton, { backgroundColor: "#D9D9D9" }]}
                            onPress={() => navigation.navigate("Events")}
                        >
                            <Image
                                source={require("../../assets/icons/event.png")}
                                style={styles.icon}
                            />
                            <Text style={styles.buttonText}>Кнопка4</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerWrapper}>
                <Text style={styles.text1}></Text>
                <Text style={styles.text2}>ГидроАнализ</Text>
                <Image
                    source={require("../../assets/icon/logojo.png")}
                    style={styles.icon1}
                />
            </View>

            <TouchableOpacity
                style={[styles.advertisementButton, { backgroundColor: "#000" }]}
                onPress={() => navigation.navigate("Books")}
            >
                <ImageBackground
                    source={require("../../assets/advert/book.png")}
                    style={styles.icon4}
                    resizeMode="cover"
                >
                    <Text style={styles.buttonText1}>Новости о новоднениях</Text>
                </ImageBackground>
            </TouchableOpacity>

            <View style={styles.scrollContainer}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.buttonContainer}
                >
                    <TouchableOpacity
                        style={[styles.categoryButton, { backgroundColor: "#024B75" }]}
                        onPress={() => navigation.navigate("Books")}
                    >
                        <Image
                            source={require("../../assets/icons/book.png")}
                            style={styles.icon}
                        />
                        <Text style={styles.buttonText}>Кнопка1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.categoryButton, { backgroundColor: "#024B75" }]}
                        onPress={() => navigation.navigate("Theater")}
                    >
                        <Image
                            source={require("../../assets/icons/theater.png")}
                            style={styles.icon}
                        />
                        <Text style={styles.buttonText}>Кнопка2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.categoryButton, { backgroundColor: "#024B75" }]}
                        onPress={() => navigation.navigate("Concerts")}
                    >
                        <Image
                            source={require("../../assets/icons/concert.png")}
                            style={styles.icon}
                        />
                        <Text style={styles.buttonText}>Кнопка3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.categoryButton, { backgroundColor: "#024B75" }]}
                        onPress={() => navigation.navigate("Events")}
                    >
                        <Image
                            source={require("../../assets/icons/event.png")}
                            style={styles.icon}
                        />
                        <Text style={styles.buttonText}>Ещё</Text>
                    </TouchableOpacity>
                </ScrollView>

                <TouchableOpacity
                    style={styles.recommendationButton}
                    onPress={() => navigation.navigate("Recommendations")}
                >
                    <Text style={styles.recommendationText}>Подробнее</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.scrollContainer}></View>
        </SafeAreaView>
    );

}; export default function HomeScreen({ navigation }) {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    position: "absolute",
                    elevation: 0,
                    backgroundColor: "#024B75",
                    height: 100,
                },
            }}
        >
            <Tab.Screen
                name="MenuScreen"
                component={MenuScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                height: "100%",
                                position: "absolute",
                                top: "100%",
                                left: "0%",
                            }}
                        >
                            <Image
                                source={require("../../assets/icons/menu.png")}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? "#FF7625" : "#FFF",
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? "#FF7625" : "#FFF",
                                    fontSize: 6,
                                    fontWeight: "bold",
                                    position: "center",
                                }}
                            >
                                ГЛАВНАЯ
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                height: "100%",
                                position: "absolute",
                                top: "100%",
                                left: "0%",
                            }}
                        >
                            <Image
                                source={require("../../assets/icons/search.png")}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? "#FF7625" : "#FFF",
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? "#FF7625" : "#FFF",
                                    fontSize: 6,
                                    fontWeight: "bold",
                                }}
                            >
                                КАРТА
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="CartScreen"
                component={CartScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                height: "100%",
                                position: "absolute",
                                top: "100%",
                                left: "0%",
                            }}
                        >
                            <Image
                                source={require("../../assets/icons/cart.png")}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? "#FF7625" : "#FFF",
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? "#FF7625" : "#FFF",
                                    fontSize: 6,
                                    fontWeight: "bold",
                                }}
                            >
                                ГЕО
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                height: "100%",
                                position: "absolute",
                                top: "100%",
                                left: "0%",
                            }}
                        >
                            <Image
                                source={require("../../assets/icons/profile.png")}
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? "#FF7625" : "#FFF",
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? "#FF7625" : "#FFF",
                                    fontSize: 6,
                                    fontWeight: "bold",
                                }}
                            >
                                ПРОФИЛЬ
                            </Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
} const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f3f4",
    },
    headerWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 10,
        paddingTop: 50,
        backgroundColor: "#024B75",
    },
    headerRight: {
        flexDirection: "row",
        alignItems: "center",
    },
    text1: {
        color: "#FFF",
        fontSize: 20,
        marginTop: 15,
    },
    text2: {
        color: "#FFF",
        fontSize: 25,
        marginTop: 15,
        marginRight: -70,
        fontFamily: "Jua-Regular",
    },
    scrollContainer: {
        flex: 1,
        justifyContent: "flex-start",
        paddingTop: 20,
        paddingBottom: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        paddingHorizontal: 0,
        alignItems: "",
    },
    categoryButton: {
        width: 120,
        height: 120,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 20,
        marginLeft: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    advertisementButton: {
        width: "100%",
        height: 160,
        marginHorizontal: "0%",
        paddingHorizontal: 0,
        paddingVertical: 0,
        borderRadius: 0,
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    recommendationButton: {
        width: "60%",
        height: 40,
        backgroundColor: "#024B75",
        borderRadius: 9,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: "2%",
        marginVertical: 40,
    },
    recommendationText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },
    icon: {
        width: 50,
        height: 50,
        marginTop: "center",
    },
    icon1: {
        width: 50,
        height: 50,
        marginTop: "center",
    },
    buttonText: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 16,
    },
    buttonText1: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 40,
        textAlign: "center",
        position: "absolute",
        bottom: 50,
        width: "100%",
    },
    icon4: {
        width: "110%",
        height: "100%",
    },
});