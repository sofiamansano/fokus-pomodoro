import { Pressable, Text, StyleSheet} from "react-native";

export function FokusButton(){
    return(
        <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Começar</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#b872ff",
        borderRadius: 32,
        padding: 8
    },
    buttonText:{
        
    }
})