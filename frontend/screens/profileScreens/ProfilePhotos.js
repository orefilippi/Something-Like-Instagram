import React from 'react'
import {StyleSheet, View, Image, ImageBackground, Text, Animated ,TouchableOpacity} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'

function ProfilePhotos(props) {

    const redValueFirstMove = new Animated.ValueXY({x:0,y:0})
    const redValueSecondMove = new Animated.ValueXY({x:0,y:0})
    const fadeRedText = new Animated.Value(0)

    const redDot = Animated.sequence([ 
        Animated.timing(redValueFirstMove, {
            toValue: { x:0 , y:0 },
            duration: 1000,
            useNativeDriver: true
        }),
        Animated.timing(redValueSecondMove, {
            toValue: { x:0 , y:20 },
            duration: 1000,
            useNativeDriver: true
        }),
        Animated.timing(fadeRedText, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }),
    ])
    

    const greenValueFirstMove = new Animated.ValueXY({x:0,y:0})
    const greenValueSecondMove = new Animated.ValueXY({x:0,y:0})
    const fadeGreenText = new Animated.Value(0)

    const greenDot =Animated.sequence([ 
        Animated.timing(greenValueFirstMove, {
            toValue: { x:-38.5 , y:0 },
            duration: 1000,
            useNativeDriver: true
        }),
        Animated.timing(greenValueSecondMove, {
            toValue: { x:0 , y:50 },
            duration: 1000,
            useNativeDriver: true
        }),
        Animated.timing(fadeGreenText, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true
        }),
    ])



    function moveDots() {
        redDot.start()
        greenDot.start()
    }

    const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity)
    const AnimatedEntypo = Animated.createAnimatedComponent(Entypo)
    const AnimatedText = Animated.createAnimatedComponent(Text)
    const AnimatedImage = Animated.createAnimatedComponent(Image)



    const radius = new Animated.Value(15) 

    const imageRadius = Animated.timing(radius, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true
    })

    function moveRadius() {
        imageRadius.start()
    }

    return (

        <View style={styles.container}>

            <AnimatedTouchable onPress={moveDots} style={{flexDirection:'row'}}>  
                <AnimatedEntypo name='dot-single' 
                                style={{position:'relative', left:'40%', 
                                transform : [{translateX:redValueFirstMove.x},
                                            {translateY:redValueSecondMove.y}]}} 
                                size={80} 
                                color='red'></AnimatedEntypo>
                <AnimatedEntypo name='dot-single' 
                                style={{position:'relative', right:'10%', 
                                transform : [{translateX:greenValueFirstMove.x},
                                            {translateY:greenValueSecondMove.y}]}} 
                                size={80} color='lawngreen'></AnimatedEntypo>

                <AnimatedText style={{position:'absolute', top:'62%',left:'25%', opacity: fadeRedText}}>Hello 1</AnimatedText>
                <AnimatedText style={{position:'absolute', top:'100%',left:'25%', opacity: fadeGreenText}}>Hello 2</AnimatedText>

            </AnimatedTouchable>
            
            <AnimatedTouchable onPress={moveRadius}>
                <AnimatedImage style={{width:200,height:250, position:'relative',top:'20%',
                                        borderRadius: radius}} 
                                source={require('../../assets/photo-1520262494112-9fe481d36ec3.jpeg')}></AnimatedImage>
            </AnimatedTouchable>


        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        justifyContent:'center',
        alignItems:'center',
        width:350,
        height:500,
        backgroundColor: "white",
        borderRadius: 10,
    },
 

});

export default ProfilePhotos;