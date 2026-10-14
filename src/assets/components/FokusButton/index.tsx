import { View, Text, StyleSheet, Pressable } from "react-native";

export function FokusButton(){
    return(
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Começar</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
     button:{
        backgroundColor:"#B872FF",
        borderRadius: 34,
        padding: 10
    },
    buttonText:{
        textAlign:"center",
        color:"#021123",
        fontSize: 14
    },
})