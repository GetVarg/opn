import React from "react";
import { View, Text, StyleSheet, Image, TextInput, SafeAreaView, Button, Alert } from "react-native";
import { useState } from "react";

const styles = StyleSheet.create({
    screenStyle: {
        marginTop: '20%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    containerInfo: {
        marginTop: 30,
        height: '50%',
        width: '90%',
    },
    imageConteiner: {
        height: 225,
        width: 225,
        borderRadius: 225/2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    image: {
        height: 220,
        width: 220,
        borderRadius: 220/2,
    },
    inputBox:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    input: {
        marginTop: 40,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        
    },

})

export default function Login( {navigation}:any ){
    const [userIDN, setUDN] = useState("");
    return(
        <View style={styles.screenStyle}>
            <View style={styles.imageConteiner}>
                <Image source={require("../../assets/img/Santa.jpg")} style={styles.image}/>
            </View>
            <View style={styles.containerInfo}>
                <SafeAreaView>
                    <TextInput
                        style={styles.input}
                        onChangeText={setUDN}
                        value={userIDN}
                        keyboardType="numeric"
                        placeholder="Digite seu IDN"
                    />
                </SafeAreaView>
                <View>
                    <Button
                        title="Press me"
                        color="#f194ff"
                        onPress={() => navigation.navigate('Task')}
                    />
                </View>

            </View>
        </View>
    )
}