import {StyleSheet, Text} from "react-native"

export function Timer({totalSeconds}: {totalSeconds: number}){
    return(
        <Text style={styles.timer}>
            {new Date(totalSeconds * 1000).toLocaleTimeString('pt-BR', {minute:'2-digit', second: '2-digit'})}
        </Text>
    )
}

const styles = StyleSheet.create({
    timer:{
        color: "#fff",
        fontSize: 54,
        fontWeight: "bold",
        textAlign: "center"
    },
})