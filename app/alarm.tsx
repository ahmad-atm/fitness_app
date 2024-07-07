import {useState, useEffect} from "react";
import { Button, View, StyleSheet, Text, TextInput } from "react-native";
import {Link} from "expo-router"
import {Audio} from "expo-av"

export default function Alarm(){
    const [newHour, setNewHour] = useState('');
    const [newMinute, setNewMinute] = useState('');
    const [alarms, setAlarms] = useState([{"hour":1, "minute":22}])
    const [sound, setSound] = useState();

    function newAlarm(hour: any, minute: any){
        setAlarms(oldAlarms => [...oldAlarms, {"hour":hour, "minute": minute}])
    }

    useEffect(()=>{
        const date = new Date();
        for (let i = 0; i < alarms.length; i++) {
            const element = alarms[i];
            if(element.hour == date.getHours() && element.minute == date.getMinutes()){
                //play sound               
            }
        }    
    })
    function ringAlarm(){

    }
    return(
        <View style={styles.container}>
            <View style={{
                flexDirection:"row",
                marginHorizontal:20,
                paddingHorizontal:30,
                paddingVertical:30,
            }}>
                <TextInput placeholder="Hour" style={{
                    borderRadius:5                   
                }}
                    keyboardType="numeric"
                    maxLength={12}
                  onChangeText={newText=>setNewHour(newText)}/>  
                <TextInput placeholder="Minute" style={{
                    borderRadius:5                    
                }} 
                keyboardType="numeric"
                maxLength={59}
                onChangeText={newText=>setNewMinute(newText)}
                />                                
            </View>
            <View>
                <Button title="Add Alarm" onPress={()=>newAlarm(newHour, newMinute)}/>
            </View>
            <View style={{
                flex:1,
            }}>
                <Text style={styles.alarmTitleText}>Alarms</Text>
                {alarms.map((alarm, index)=>{
                    return(
                        <View style={{marginTop:30, marginHorizontal:35}}>
                            <Text style={styles.alarmText} key={index}>{alarm.hour}:{alarm.minute}</Text>
                        </View>
                    )
                })}                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
                    flex:1,
                    backgroundColor:"#26355D",
        },
        workoutView:{
                        width:"30%", 
                        height:60,
                        flex:1, 
                        justifyContent:"center", 
                        alignItems:"center", 
                        borderRadius:10
        },
        workoutImage:{
                        height:"100%",
                        width:70, 
                        borderRadius:8                
        },
        alarmTitleText:{color:"#FF781F", fontWeight:900, fontSize:20, marginLeft:25, marginTop:20},
        alarmText:{width:"20%", color:"#FF8F00", fontWeight:700, fontSize:15},
})