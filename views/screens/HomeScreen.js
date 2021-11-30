import React from "react";
import {
    Dimensions,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    FlatList,
    ScrollView,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import COLORS from "../../consts/colors";
import categories from "../../consts/categories";
import foods from "../../consts/foods";
const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;

const HomeScreen = ({ navigation }) => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
    const ListCategories = () => {
        return (
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoriesListContainer}
            >
                {categories.map((category, index) => (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.8}
                        onPress={() => setSelectedCategoryIndex(index)}
                    >
                        <View
                            style={{
                                backgroundColor:
                                    selectedCategoryIndex === index
                                        ? COLORS.primary
                                        : COLORS.secondary,
                                ...styles.categoryBtn,
                            }}
                        >
                            <View style={styles.categoryBtnImgCon}>
                                <Image
                                    source={category.image}
                                    style={{
                                        height: 35,
                                        width: 35,
                                        resizeMode: "cover",
                                    }}
                                />
                            </View>
                            <Text
                                style={{
                                    fontSize: 15,
                                    fontWeight: "bold",
                                    marginLeft: 10,
                                    color:
                                        selectedCategoryIndex === index
                                            ? COLORS.white
                                            : COLORS.primary,
                                }}
                            >
                                {category.name}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        );
    };

    const Cards = ({ foods }) => {
        return (
            <TouchableHighlight
                underlayColor={COLORS.white}
                activeOpacity={0.9}
                onPress={() => navigation.navigate("DetailsScreen", foods)}
            >
                <View style={styles.card}>
                    <View style={{ alignItems: "center", top: -40 }}>
                        <Image
                            source={foods.image}
                            style={{ height: 120, width: 120 }}
                        />
                    </View>
                    <View style={{ marginHorizontal: 20 }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                            {foods.name}
                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                                color: COLORS.grey,
                                marginTop: 2,
                            }}
                        >
                            {foods.ingredients}
                        </Text>
                    </View>
                    <View
                        style={{
                            marginTop: 10,
                            justifyContent: "space-between",
                            marginHorizontal: 20,
                            flexDirection: "row",
                        }}
                    >
                        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                            ${foods.price}
                        </Text>
                        <View style={styles.addToCart}>
                            <MaterialIcons
                                name="add"
                                size={30}
                                color={COLORS.white}
                            />
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={styles.header}>
                <View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontSize: 28 }}>Hello, </Text>
                        <Text
                            style={{
                                fontSize: 28,
                                fontWeight: "bold",
                                marginLeft: 10,
                            }}
                        >
                            Chop Chop{" "}
                        </Text>
                    </View>
                    <Text
                        style={{
                            marginTop: 5,
                            fontSize: 22,
                            color: COLORS.grey,
                        }}
                    >
                        What do you want Today
                    </Text>
                </View>
                <Image
                    source={require("../../assets/person.png")}
                    style={{ height: 50, width: 50, borderRadius: 25 }}
                />
            </View>
            <View
                style={{
                    marginTop: 40,
                    flexDirection: "row",
                    paddingHorizontal: 20,
                }}
            >
                <View style={styles.inputContainer}>
                    <MaterialIcons
                        name="search"
                        // color={COLORS.primary}
                        size={28}
                    />
                    <TextInput
                        style={{ flex: 1, fontSize: 18 }}
                        placeholder="Search for food"
                    />
                </View>
                <View style={styles.sortBtn}>
                    <MaterialIcons name="tune" size={40} color={COLORS.white} />
                </View>
            </View>
            <View>
                <ListCategories />
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={foods}
                renderItem={({ item }) => <Cards foods={item} />}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: COLORS.light,
        height: 50,
        alignItems: "center",
        paddingHorizontal: 20,
    },
    categoryBtnImgCon: {
        height: 35,
        width: 35,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    sortBtn: {
        width: 50,
        height: 50,
        marginLeft: 10,
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    categoriesListContainer: {
        paddingVertical: 30,
        alignItems: "center",
        paddingHorizontal: 20,
    },
    categoryBtn: {
        height: 45,
        width: 120,
        marginRight: 7,
        borderRadius: 30,
        alignItems: "center",
        paddingHorizontal: 5,
        flexDirection: "row",
    },
    card: {
        height: 220,
        width: cardWidth,
        marginHorizontal: 10,
        marginBottom: 20,
        marginTop: 50,
        borderRadius: 15,
        elevation: 13,
        backgroundColor: COLORS.white,
    },
  addToCart: {
    height: 30,
    width: 30,
    backgroundColor: COLORS.primary, borderRadius: 30,
    justifyContent: "center",
    alignItems:"center"
    }
});

export default HomeScreen;
