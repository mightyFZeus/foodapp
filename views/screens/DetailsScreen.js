import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import COLORS from "../../consts/colors";
import { SecondaryButton } from "../components/Button";

const DetailsScreen = ({ navigation, route }) => {
    const item = route.params;

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white }}>
            <View style={styles.header}>
                <Ionicons
                    name="md-chevron-back-sharp"
                    size={32}
                    color="black"
                    onPress={() => navigation.goBack()}
                />
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                    Details
                </Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        height: 280,
                    }}
                >
                    <Image
                        source={item.image}
                        style={{ height: 220, width: 220 }}
                    />
                </View>
                <View style={styles.details}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 25,
                                fontWeight: "bold",
                                color: COLORS.white,
                            }}
                        >
                            {item.name}
                        </Text>
                        <View style={styles.iconContainer}>
                            <MaterialIcons
                                name="favorite-border"
                                size={25}
                                color={COLORS.primary}
                            />
                        </View>
                    </View>
                    <Text style={styles.detailsText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque commodo ultricies mi, vel luctus massa
                        scelerisque non. Etiam fermentum metus libero. Sed
                        ultricies diam nibh, in scelerisque odio semper
                        venenatis. Suspendisse sed ex neque. Aenean lectus
                        purus, condimentum quis commodo id, venenatis quis
                        justo. Praesent auctor interdum sapien in scelerisque.
                        Mauris vulputate libero ac diam vestibulum ultrices.
                    </Text>
                    <View style={{ marginTop: 40, marginBottom: 40 }}>
                        <SecondaryButton title="Add to Cart" />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20,
    },
    detailsText: {
        marginTop: 10,
        lineHeight: 22,
        fontSize: 16,
        color: COLORS.white,
    },
    details: {
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 60,
        backgroundColor: COLORS.primary,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    iconContainer: {
        backgroundColor: COLORS.white,
        height: 50,
        width: 50,
        justifyContent: "center",
        borderRadius: 30,
        alignItems: "center",
    },
});

export default DetailsScreen;
