import React, { useEffect } from 'react'
import {View,Text, StyleSheet,Image} from 'react-native'
import { images } from '../../assets/images';
import LinearGradient from 'react-native-linear-gradient';
import { myColors } from '../../utils/myColor';

const SplashScreen = ({navigation}:any) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('HomeScreen');
          }, 2000);
        }, [navigation]);
  return (
    <LinearGradient
    colors={[myColors.primary, myColors.third]}
    style={styles.container}>
    <View style={styles.content}>
      <Image source={images.logo} style={styles.icon} />
      <Text style={styles.textStyle}>Lets Calculate Your Expenses !</Text>
      
    </View>
  </LinearGradient>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      icon: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
      },
      textStyle: {
        marginTop: 10,
        color:"#fff",
        fontStyle: 'italic',
        fontSize:20
      },
      subtitle: {
        color: "#ffff",
        fontSize:28,
    
        textAlign:'center'
        // marginBottom:SPACING.space_10
      },
     
})
export default SplashScreen
