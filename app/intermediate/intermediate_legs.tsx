import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import {Image} from "expo-image";


export default function IntermediateLegs(){
    return(
        <View style={{
            width:"100%",
            backgroundColor:"#1A2130",
            height:"100%"
            }}>
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/ilegs/back_squat.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Back Squats</Text>
                <Text style={styles.workoutNumber}>x10</Text>
            </View>

            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/ilegs/front_squat.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Front Squats</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View>        

            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/ilegs/romanian_deadlift.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Romanian Deadlifts</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View>        

            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/ilegs/walking_lunges.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Walking Lunges</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View>        

            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/ilegs/reverse_lunge.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Reverse Lunges</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View> 
            
            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/ilegs/lateral_lunges.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Lateral Lunges</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View> 
 
            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/ilegs/step_up.png")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>StepUp</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View> 

            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/ilegs/glute_bridges.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Glute Bridges</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View>  

            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/ilegs/hip_thrust.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Hip Thrust</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View>      

            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/ilegs/goblet_sqat.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Goblet Squats</Text>
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