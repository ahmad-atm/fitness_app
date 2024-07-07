import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import {Image} from "expo-image";


export default function AdvancedShoulderAndChest(){
    return(
        <View style={{
            width:"100%",
            backgroundColor:"#1A2130",
            height:"100%"
            }}>
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/asc/bench_press.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Bench Press</Text>
                <Text style={styles.workoutNumber}>x10</Text>
            </View>

            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/asc/overhead_tricep.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Overhead Triceps Extension</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View>        

            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/asc/incline_dumbell.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Incline Dumbell Press</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View>        

            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/asc/close_grip.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Close Grip Pushup</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View>        

            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/asc/chest_press.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Chest Press</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View> 
            
            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/asc/tricep_extension.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Tricep Extension</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View> 
 
            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/asc/bar_dip.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Bar Dip</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View> 

            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/asc/pushdown.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Push Down</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View>                                                                         
        </ScrollView>       
        </View>

    );


}
const styles = StyleSheet.create({
    container:{
                flex:1,
                flexDirection:"row",
                backgroundColor:"#26355D",
                paddingVertical:5,
                marginVertical:7,
                marginHorizontal:15,
                borderRadius:20,
                justifyContent:"center",
                alignItems:"center",
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
    workoutMiddleText:{width:"50%", flex:1, alignSelf:"center", color:"#FF8F00", fontWeight:700},
    workoutNumber:{width:"20%", color:"#FF8F00", fontWeight:700},
})