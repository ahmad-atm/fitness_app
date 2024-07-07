import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import {Image} from "expo-image";

export default function BeginnerAbs(){
     return(
        <View style={{
            width:"100%",
            backgroundColor:"#1A2130",
            height:"100%"
            }}>
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/babs/bicycle_crunches.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Bicycle Crunches</Text>
                <Text style={styles.workoutNumber}>x10</Text>
            </View>

            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/babs/side_plank.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Side Plank Lift</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View>        

            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/babs/plank.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Plank</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View>        

            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/babs/mountain_climbers.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Mountain Climbers</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View>        

            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/babs/dead_bug.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Dead Bug</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View> 
            
            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/babs/reverse_crunches.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Reverse Crunches</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View> 
 
            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/babs/flutter_kicks.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Flutter Kicks</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View> 

            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/babs/shoulder_taps.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Plank Shoulder Taps</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View>    

            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/babs/glute_bridges.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Glute Bridges</Text>
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