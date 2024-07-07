import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import {Image} from "expo-image";

export default function BeginnerShoulderAndChest(){
    return(
        <View style={{
            width:"100%",
            backgroundColor:"#1A2130",
            height:"100%"
            }}>
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/bsc/plank.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Plank</Text>
                <Text style={styles.workoutNumber}>x10</Text>
            </View>

            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/bsc/pushup.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Pushup</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View>        

            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/bsc/decline_pushup.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Decine Pushup</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View>        

            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/bsc/pike_pushup.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Pike Pushup</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View>        

            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/bsc/chest_press.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Chest Press</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View> 
            
            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/bsc/dip.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Dip</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View> 

            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/bsc/seated_dumbell.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Seated Dumbell Shoulder Press</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View>    

            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/bsc/plank.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Dumbbell Lateral Raise</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View>     

            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/bsc/upright_row.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Upright Row</Text>
                <Text style={styles.workoutNumber}>x10</Text>               
            </View>      

            <View style={styles.container}>
                <View style={styles.workoutView}>
                  <Image source={require("../../assets/images/bsc/plank.jpg")} style={styles.workoutImage}/> 
                </View>
                <Text style={styles.workoutMiddleText}>Reverse Dumbbell Flyes</Text>
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