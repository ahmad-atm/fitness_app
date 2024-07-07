import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import {Image} from "expo-image";

export default function BeginnerLegs(){
    return(
        <View style={{
            width:"100%",
            backgroundColor:"#1A2130",
            height:"100%"
            }}>
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/blegs/lunges.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Lunges</Text>
                <Text style={styles.workoutNumber}>x10</Text>
            </View>

            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/blegs/squat.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Squat</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View>               

            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/blegs/calf_raises.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Calf Raise</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View>        

            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/blegs/glute_bridge.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Glute Bridges</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View> 
            
            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/blegs/leg_curls.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Leg Curls</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View> 
 
            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/blegs/split_squat.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Split Squats</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View>     

            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/blegs/side_lunge.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Side Lunge</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View>      

            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/blegs/crab_walk.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Crab Walk</Text>
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