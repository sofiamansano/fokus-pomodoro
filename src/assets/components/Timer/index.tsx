import { Text, StyleSheet } from "react-native";

export function Timer({totalSeconds}){
    return(
        <Text style={styles.timer}>
            {new Date(totalSeconds * 1000).toLocaleTimeString('pt-br', {minute:'2-digit', second: '2-digit'})}
        </Text>
    )
}

const styles = StyleSheet.create({
     timer:{
        fontSize: 54,
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center"
    },
   
});