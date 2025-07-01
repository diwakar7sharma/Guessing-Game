import { useState } from "react";
import {StyleSheet,TextInput,TouchableOpacity,View,Text, ImageBackground } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function StartScreen(){
    let [input,setInput] = useState()
    let [displayText,setText]=useState("Guess the Number ?")
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 99) + 1);
    console.log(randomNumber);
    function doesMatch(){
        if(parseInt(input) == randomNumber){
            setText("You've Guessed it right!!")
        }
        else{
            setText("Nuh-uh! Try again.")
        }
    }
    function reset(){
        setText("Guess the Number ?")
    }
    return(
        <>
        <ImageBackground source={{uri:"https://i.pinimg.com/736x/e4/ec/f3/e4ecf3d4799038e8cd8fb0c1f4455885.jpg"}} style={{flex:1}}>
        <View style={styles.box}>
            <Text style = {styles.name}>{displayText}</Text>
        <TextInput style={styles.inputContainer} keyboardType="number-pad" maxLength={2} onChangeText={setInput}/>
            <View style = {styles.boxRow}>
                <TouchableOpacity style={styles.buttonContainer}><Text style = {{color:"white"}} onPress ={reset}>Reset</Text><Ionicons name="reload" size={12} color="white"/></TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={doesMatch}><Text style = {{color:"white"}}>Confirm</Text><AntDesign name="check" size={12} color="white"/></TouchableOpacity>
            </View>
        </View>
        </ImageBackground>
        </>
    );
}

const styles = StyleSheet.create({
    inputContainer : {
        marginTop : 20,
        marginHorizontal : 90,
        borderColor : "black",
        borderWidth : 3,
        backgroundColor : "lightgreen",
        padding : 20,
        borderRadius : 20,
        color : "Black",
        fontWeight : "bold",
        fontSize : 23,
        textAlign : "center"
    },
    buttonContainer : {
        marginTop : 18,
        padding : 13,
        marginHorizontal:35,
        color : "white",
        backgroundColor : "black",
        borderRadius : 25,
    },
    box : {
        marginTop :230,
        marginHorizontal : 24,
        backgroundColor : "#6495ed",
        borderRadius : 80,
        padding : 50,
        borderWidth : 3,
    },
    boxRow : {
        flexDirection : "row",
    },
    name : {
        color : "black",
        fontSize : 24,
        fontWeight : "bold",
        textAlign : "center",
        marginBottom : 2,
    }
})
