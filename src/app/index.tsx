import { View, Text, Image, StyleSheet, Pressable, ImageSourcePropType } from 'react-native';
import { useState } from 'react';
import { FokusButton } from '@/assets/components/FokusButton';
import { ActionButton } from '@/assets/components/ActionButton';

interface PomodoroTimer{
    id: string;
    initialValue: number;
    imagem: ImageSourcePropType;
    display: string;
}
const pomodoro = [
    {    
        id:"foco",
        initialValue: 25,
        imagem: require('@/assets/foco.png'),
        display: 'Foco'
    },
    {    
        id:"curto",
        initialValue: 5,
        imagem: require('@/assets/curto.png'),
        display: 'Pausa Curta'


    },
    {    
        id:"longo",
        initialValue: 15,
        imagem: require('@/assets/longo.png'),
        display: 'Pausa Longa'
 },
]

export default function index(){

    const [typeTimer, setTypeTimer] = useState<PomodoroTimer>(pomodoro[0]);

    return(
        <View style={styles.container}>
            <Image source={typeTimer.imagem}/>
            <View style={styles.action}>

            <View style={styles.context}>
                {pomodoro.map(p =>(
                    <ActionButton
                        key = {p.id}
                        active = {typeTimer.id === p.id}
                        onPress = {()=> setTypeTimer(p)}
                        display = {p.display}
                    />
                )
                )}
               
            </View>

                <Text style={styles.timer}>
                    {new Date(typeTimer.initialValue*1000).toLocaleTimeString('pt-br', {minute:'2-digit', second: '2-digit'})}
                </Text>
                <FokusButton/>
                
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    Projeto Fictício Desenvolvido para fins de aprendizagem
                </Text>
                <Text style={styles.footerText}>
                    Desenvolvido pelos alunos do Curso de Dev - Sesi/Senai Pederneiras
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#021123"

    },
    action:{
        padding: 24,
        backgroundColor:"#14448080",
        width: "80%",
        borderRadius: 32,
        borderWidth: 2,
        borderColor: "#144480",
        gap: 16
    },

    context:{
        flexDirection: "row",
        justifyContent:"space-between"
    },

    timer:{
        fontSize: 54,
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center"
    },
   
    footer:{
        marginTop: 25,
        width:"80%"

    },
    footerText:{
        textAlign:"center",
        color:"#98a0a8",
        fontSize: 12.5
    }
})