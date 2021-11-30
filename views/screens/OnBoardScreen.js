import React from "react";
import { Text, StyleSheet, SafeAreaView, View, Image } from "react-native";
import COLORS from "../../consts/colors";
import { PrimaryButton } from "../components/Button";

const OnBoardScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{ height: 400 }}>
                <Image
                    source={require("../../assets/onboardImage.png")}
                    style={{ width: "100%", resizeMode: "contain", top: -180 }}
                />
            </View>
            <View style={StyleSheet.textContainer}>
                <View>
                    <Text
                        style={{
                            fontSize: 32,
                            fontWeight: "bold",
                            textAlign: "center",
                        }}
                    >
                        Delicious Food
                    </Text>
                    <Text
                        style={{
                            fontSize: 18,
                            marginTop: 20,
                            color: COLORS.grey,
                            textAlign: "center",
                        }}
                    >
                        We help you to find the best and delicious food
                    </Text>
                </View>
            </View>
            <View style={styles.indicatorContainer}>
                <View style={styles.currentIndicator}></View>
                <View style={styles.Indicator}></View>
                <View style={styles.Indicator}></View>
            </View>
            <View style={{ paddingHorizontal: 20 , top:-30}}>
           
                <PrimaryButton
                    title="Get started"
                    onPress={() => navigation.navigate("Home")}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textContainer: {
        flex: 1,
        paddingHorizontal: 50,
        justifyContent: "space-between",
        paddingBottom: 30,
    },
    indicatorContainer: {
        height: 50,
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
    },
  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    marginHorizontal:5
  },
  Indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: COLORS.grey,
    marginHorizontal:5
  }
});

export default OnBoardScreen;
