import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import {Image} from "expo-image";


export default function IntermediateAbs(){
    return(
        <View style={{
            width:"100%",
            backgroundColor:"#1A2130",
            height:"100%"
            }}>
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/iabs/deadbug.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>K8 Deadbugs</Text>
                <Text style={styles.workoutNumber}>x10</Text>
            </View>      

            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/iabs/weighted_plank.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Weighted Plank</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View>         

            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/iabs/half_kneeling_chop.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Half Kneeling Banded Chop</Text>
                <Text style={styles.workoutNumber}>x6</Text>               
            </View> 
 
            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/iabs/v_sit.png")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>V-sit Pose</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View> 

            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/iabs/bicycle_crunch.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Bicycle Crunch</Text>
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