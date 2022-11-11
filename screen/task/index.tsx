import React from "react";
import { View, Text, StyleSheet, ActivityIndicator, Pressable } from "react-native";
import CardItemLar from "../../components/CardItemLar";
import { useState, useEffect } from "react";
import CardItemRecanto from "../../components/cardItemRecanto";

const styles = StyleSheet.create({
    screenStyle: {
        top: 40,
        // flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#C90000',
        flex: 1,
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
    buttonBox:{
        height: "10%",
        // backgroundColor: 'black',
        width: "90%",
        flex: 1,
        flexDirection: 'row',
    },
    buttonLeft:{
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: "#ff2e3a",
    },
    buttonRight:{
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: "#aaadeb",
    },

})

export default function Login(){
    const [carregando, setCarregando]=useState(true)
    const [dados, setDados]=useState({})

    const getTask = async() => {
        try {
            const response = await fetch("http://teste-env.eba-tcxtgrep.us-east-1.elasticbeanstalk.com/api/Task/CreateRandomTask");
            const json = await response.json();
            setDados(json.movies);
            console.log(dados);
        }
        catch (error) {
           console.error(error);
        } finally {
            setCarregando(false);
        }
    }

    useEffect(()=>{
        getTask();
    },[]);

    return(
        <View style={styles.screenStyle}>
            <CardItemRecanto name="Pedro" qtd="25"/>
            <View style={styles.buttonBox}>
                <Pressable style={styles.buttonLeft}>
                    {/* {carregando?<ActivityIndicator/>:(
                        console.log(dados.institutionName)
                    )} */}
                    <Text>Oi</Text>
                </Pressable>
                <Pressable style={styles.buttonRight}>
                    <Text>Oi</Text>
                </Pressable>
                
            </View>
        </View>
    )
}