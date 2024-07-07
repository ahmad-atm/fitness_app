import { Text, View, Button } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Link } from "expo-router";
import {Image} from "expo-image"

export default function BeginnerWorkout(){
  return (
        <View style={{
            width:"100%",
            backgroundColor:"#1A2130",
            height:"100%"
            }}>
      <View style={{
        flex:1,
        flexDirection:"column",
        maxHeight:"100%",        
      }}>
        <View style={{
            height:"18%",
            borderBottomLeftRadius:10,
            borderBottomRightRadius:15,                 
            justifyContent:"center"  ,
            alignItems:"center"
        }}>
          <Image source={require("../../assets/images/beginner_abs.jpg")} style={{
            height:"100%",
            width:"100%",
            borderBottomLeftRadius:10,
            borderBottomRightRadius:15,   
          }}/>
        </View>

{/* Beginner Workout */}
        <View style={{
            height:"25%",
            marginVertical:6,
            marginHorizontal:10,
        }}>
          <Link href="/beginner/beginner_shoulder_and_chest" style={{
            height:"100%",
          }}>   
            <View style={{height:"100%", width:"100%"}}>
              <Image source={require("../../assets/images/beginner_chest.jpeg")} style={{
                height:"100%",
                width:"100%", 
                borderRadius:10,
                opacity:0.9
              }}/>  
            <View style={{
              position:"absolute",
              flex:1,
              height:"80%",
              width:"60%",
              marginTop:15,
              paddingLeft:20,
              paddingTop:55
              }}>
              <View style={{
                  flex:1,
                  justifyContent:"center",
                  // alignItems:"center", 
                  backgroundColor:"green",
                  borderRadius:5,                                 
              }}>
                <Text style={{
                  backgroundColor:"green",   
                  borderRadius:7, 
                  paddingHorizontal:5,
                  paddingVertical:3,                                                                
                  fontWeight:"bold",  
                  fontSize:16              
                }}>beginner Chest</Text>                
              </View>
              <View style={{
                  flex:1,
                  justifyContent:"center",
                  alignItems:"center", 
                  borderRadius:5,                    
                  marginTop:30,
              }}> 
              <Text style={{
                color:"white",
                fontWeight:"900",  
                marginTop:8,
                fontSize:20          
              }}>Push Harder</Text>
              </View>
              
              <View style={{
                marginTop:25
              }}>
                <Text style={{
                color:"white",
                fontWeight:"700",  
                marginTop:5,
                }}>Upper Body, Muscle Strength</Text>
                <Text style={{
                color:"white",
                fontWeight:"700",  
                marginTop:5,
                }}>2 Weeks</Text>
              </View>
            </View>                        
            </View>
          </Link>        
        </View>

{/* beginner Workout */}
        <View style={{
            height:"25%",
            marginVertical:6,
            marginHorizontal:10,            
        }}>
           <Link href="/beginner/beginner_abs" style={{
            height:"100%",
          }}>   
            <View style={{height:"100%", width:"100%"}}>
              <Image source={require("../../assets/images/beginner_abs.jpg")} style={{
                height:"100%",
                width:"100%", 
                borderRadius:10
              }}/> 
            <View style={{
              position:"absolute",
              flex:1,
              // backgroundColor:"green",
              height:"80%",
              width:"60%",
              marginTop:15,
              paddingLeft:20,
              paddingTop:55
              }}>
              <View style={{
                  flex:1,
                  justifyContent:"center",
                  alignItems:"center", 
                  borderRadius:5,                                 
              }}>
                <Text style={{
                  backgroundColor:"green",   
                  borderRadius:7, 
                  paddingHorizontal:5,
                  paddingVertical:3,                                                                
                  fontWeight:"bold",  
                  fontSize:16              
                }}>beginner Abs Workout</Text>                
              </View>
              <View style={{
                  flex:1,
                  justifyContent:"center",
                  alignItems:"center", 
                  borderRadius:5,                    
                  marginTop:30,
              }}>              
                <Text style={{
                  color:"white",
                  fontWeight:"900",  
                  fontSize:20          
                }}>Sweat IT</Text>
              </View>
              <View style={{
                marginTop:25
              }}>
                <Text style={{
                color:"white",
                fontWeight:"700",  
                marginTop:5,
                }}>Balance, Max Power</Text>
                <Text style={{
                color:"white",
                fontWeight:"700",  
                marginTop:5,
                }}>2 Weeks</Text>
              </View>
            </View>                         
            </View>
          </Link>        
        </View>  

{/* beginner Workout */}
      <View style={{
            height:"25%",
            marginVertical:6,
            marginHorizontal:6
        }}>
          <Link href="/beginner/beginner_legs" style={{
            height:"100%",
          }}>   
          <View style={{height:"100%", width:"100%"}}>
            <Image source={require("../../assets/images/beginner_abs.jpg")} style={{
              height:"100%",
              width:"100%", 
              borderRadius:10
            }}/> 
            <View style={{
              position:"absolute",
              flex:1,
              // backgroundColor:"green",
              height:"80%",
              width:"60%",
              marginTop:30,
              paddingLeft:20
            }}>
              <View style={{
                  flex:1,
                  justifyContent:"center",
                  alignItems:"center", 
                  borderRadius:5,                                 
              }}>
                <Text style={{
                  backgroundColor:"green",   
                  borderRadius:7, 
                  paddingHorizontal:5,
                  paddingVertical:3,                                                                
                  fontWeight:"bold",  
                  fontSize:16              
                }}>beginner Leg Workout</Text>                
              </View>

          <View style={{
                  flex:1,
                  justifyContent:"center",
                  alignItems:"center", 
                  borderRadius:5,                    
                  marginTop:5,
              }}>              
                <Text style={{
                  color:"white",
                  fontWeight:"900",  
                  fontSize:20          
                }}>No Excuses</Text>
              </View>
              
              <View style={{
                marginTop:10
              }}>
                <Text style={{
                color:"white",
                fontWeight:"700",  
                marginTop:5,
                }}>Squats, Strong Joints</Text>
                <Text style={{
                color:"white",
                fontWeight:"700",  
                marginTop:5,
                }}>2 Weeks</Text>
              </View>
            </View>           
          </View>

          </Link>        
        </View>

      </View>
        
      <StatusBar style="auto" />    
    </View>
  );
}