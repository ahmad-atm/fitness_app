import { Text, View, Button } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Link } from "expo-router";
import {Image} from "expo-image"

export default function Index() {
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
          <Image source={require("../assets/images/1.jpg")} style={{
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
          <Link href="/beginner/beginner_workout" style={{
            height:"100%",
          }}>   
            <View style={{height:"100%", width:"100%"}}>
              <Image source={require("../assets/images/2.jpg")} style={{
                height:"100%",
                width:"100%", 
                borderRadius:10,
                opacity:0.9
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
                  backgroundColor:"yellow",
                  borderRadius:5,                                 
              }}>
                <Text style={{
                  backgroundColor:"yellow",   
                  borderRadius:7, 
                  paddingHorizontal:5,
                  paddingVertical:3,                                                                
                  fontWeight:"bold",  
                  fontSize:16              
                }}>Beginner Workout</Text>                
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
              }}>Strong and Big Chest</Text>
              </View>
              
              <View style={{
                marginTop:25
              }}>
                <Text style={{
                color:"white",
                fontWeight:"700",  
                marginTop:5,
                }}>Full Body, Fat Loss</Text>
                <Text style={{
                color:"white",
                fontWeight:"700",  
                marginTop:5,
                }}>Endurance, Strength Training</Text>
                <Text style={{
                color:"white",
                fontWeight:"700",  
                marginTop:5,
                }}>4 Weeks</Text>
              </View>
            </View>                        
            </View>
          </Link>        
        </View>

{/* Intermediate Workout */}
        <View style={{
            height:"25%",
            marginVertical:6,
            marginHorizontal:10,            
        }}>
          <Link href="/intermediate/intermediate_workout" style={{
            height:"100%",
          }}>   
            <View style={{height:"100%", width:"100%"}}>
              <Image source={require("../assets/images/1.jpg")} style={{
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
                  backgroundColor:"blue",   
                  borderRadius:7, 
                  paddingHorizontal:5,
                  paddingVertical:3,                                                                
                  fontWeight:"bold",  
                  fontSize:16              
                }}>Intermediate Workout</Text>                
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
                }}>Build Muscles</Text>
              </View>
              <View style={{
                marginTop:25
              }}>
                <Text style={{
                color:"white",
                fontWeight:"700",  
                marginTop:5,
                }}>Full Body, Fat Loss</Text>
                <Text style={{
                color:"white",
                fontWeight:"700",  
                marginTop:5,
                }}>Endurance, Strength Training</Text>
                <Text style={{
                color:"white",
                fontWeight:"700",  
                marginTop:5,
                }}>6 Weeks</Text>
              </View>
            </View>                         
            </View>
          </Link>        
        </View>  

{/* Advanced Workout */}
      <View style={{
            height:"25%",
            marginVertical:6,
            marginHorizontal:6
        }}>
          <Link href="/advanced/advanced_workout" style={{
            height:"100%",
          }}>   
          <View style={{height:"100%", width:"100%"}}>
            <Image source={require("../assets/images/3.jpg")} style={{
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
                }}>Advanced Workout</Text>                
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
                }}>The Total Attack</Text>
              </View>
              
              <View style={{
                marginTop:10
              }}>
                <Text style={{
                color:"white",
                fontWeight:"700",  
                marginTop:5,
                }}>Power, Agility</Text>
                <Text style={{
                color:"white",
                fontWeight:"700",  
                marginTop:5,
                }}>Split, Cross Training</Text>
                <Text style={{
                color:"white",
                fontWeight:"700",  
                marginTop:5,
                }}>16 Weeks</Text>
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

