import { View, Icon, Input } from 'native-base';
import React, { Component } from 'react';
import { Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
import level1Image from './Pic/level1.png'
import level2Image from './Pic/level2.png'
import level3Image from './Pic/level3.png'
import level4Image from './Pic/level4.png'
//import localStorage from '@react-native-community/local-storage';

export default class componentName extends Component {
    constructor(props) {
        super(props)
        this.state = {
            levels: []
        }
    }
    componentDidMount = async () => {
        this.Get_levels()
        // console.log("courseid==============", this.props?.courseId)

    }
    Get_levels = async (id) => {
        // localStorage.getItem("Levels", JSON.stringify(levels));
        // var courseId = JSON.parse(localStorage.getItem("courseId"));
        if (this.props.from) {
            await AsyncStorage.setItem('courseId', JSON.stringify(this.props?.courseId))
        }

        let courseId = await AsyncStorage.getItem('courseId')
        // console.log('couse id ',courseId);
        // let courseId = await AsyncStorage.getItem('courseId')
        // let courseIDD = this.props?.courseId
        //let userid = 1
        let response = await fetch(
            'https://crossword-app-backend.herokuapp.com/app/levels/' + courseId + '/',
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
            },
        )
            .then(response => response.json())
            .then(responseJson => {

                for (let index = 0; index < responseJson.courses.length; index++) {
                    // const element = array[index];
                    //  console.log('loop', index)
                    let temp = responseJson.courses
                    if (index == 0) {
                        temp[index].image = level1Image
                        this.setState({
                            levels: temp
                        })
                    }
                    else if (index == 1) {
                        temp[index].image = level2Image
                        this.setState({
                            levels: temp
                        })
                    }
                    else if (index == 2) {
                        temp[index].image = level3Image
                        this.setState({
                            levels: temp
                        })
                    }
                    else if (index == 3) {
                        temp[index].image = level4Image
                        this.setState({
                            levels: temp
                        })
                    }
                    //   console.log('levels',this.state.levels)

                }
                this.setState({
                    levels: responseJson.courses
                })
                //  console.log("levelid==========", this.state.levels)

                return responseJson;
            })
            .catch(error => {
                console.error(error);
            });
        //  console.log('data:>>',response)
        return response;
    }
    render() {
        return (

            <View style={styles.container}>
                <View style={styles.view1sty}>
                    <TouchableOpacity
                        onPress={() => Actions.courses()}
                        style={styles.view2sty}>
                        <Icon style={styles.lefticonsty} type='Entypo' name='chevron-thin-left' />
                    </TouchableOpacity>

                    <View style={styles.view3sty}>
                        <Text style={styles.text1sty}>المراحل</Text>
                    </View>
                    <View style={styles.view4sty}>
                        <Text style={styles.text2sty}>
                            1
                            </Text>
                        <Icon style={styles.stariconsty} type='Entypo' name='star' />
                    </View>
                </View>

                <View style={{ flexWrap: 'wrap', flexDirection: 'row', width: '80%', marginTop: 20 }}>

                    {this.state.levels.map((data, index) => {
                        //    console.log('data in mpa',data);
                        return (
                            <TouchableOpacity key={index}
                                onPress={() => Actions.crossword3({ levelId: data?.id  , from:true})}
                                style={styles.image1viewsty}>
                                <Image
                                    source={data?.image}
                                //resizeMode='cover'
                                />
                            </TouchableOpacity>
                        )
                    })}

                </View>

                {/* <View style={styles.mainimageviewsty}>
                    <TouchableOpacity
                        onPress={() => Actions.crossword1({ courseId: this.props?.courseId })}
                        style={styles.image1viewsty}>
                        <Image
                            source={require("./Pic/level1.png")}
                        //resizeMode='cover'
                        />
                    </TouchableOpacity>
                    <View style={styles.image1viewsty}>
                        <TouchableOpacity
                            onPress={() => Actions.crossword3()}
                        >
                            <Image
                                source={require("./Pic/level2.png")}
                                blurRadius={1}
                            />
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity
                        onPress={() => Actions.crossword4()}
                        style={styles.image1viewsty}>
                        <Image
                            source={require("./Pic/level3.png")}
                            blurRadius={1}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.mainimage2viewsty}>
                    <View style={styles.image1viewsty}>
                        <Image
                            source={require("./Pic/level4.png")}
                            blurRadius={1}
                        />
                    </View> */}

                {/* <View style={styles.image1viewsty}>
                        <Image
                            source={require("./Pic/level5.png")}
                            blurRadius={1}
                        />
                    </View>
                    <View style={styles.image1viewsty}>
                        <Image
                            source={require("./Pic/level6.png")}
                            blurRadius={1}
                        />
                    </View> */}
                {/* </View> */}

                {/* <View style={styles.mainimage2viewsty}>
                    <View style={styles.image1viewsty}>
                        <Image
                            source={require("./Pic/level7.png")}
                            blurRadius={1}
                        />
                    </View>
                    <View style={styles.image1viewsty}>
                        <Image
                            source={require("./Pic/level8.png")}
                            blurRadius={1}
                        />
                    </View>
                    <View style={styles.image1viewsty}>
                        <Image
                            source={require("./Pic/level9.png")}
                            blurRadius={1}
                        />
                    </View>
                </View>
           
            */}
            </View>
        );
    }
}
let styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#AED0EE',
        alignItems: 'center'
    },
    stariconsty: {
        color: '#FFD800',
        fontSize: 35,
        marginBottom: '5%'
    },
    view1sty: {
        flexDirection: 'row',
        width: '100%',
        height: 75,
    },
    view2sty: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '23%',
        height: 75,
        backgroundColor: '#59A9C2'
    },
    view3sty: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '54%',
        height: 75,
        backgroundColor: '#114E76'
    },
    view4sty: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '23%',
        height: 75,
        backgroundColor: '#59A9C2'
    },
    lefticonsty: {
        color: '#007A3D',
        fontSize: 50,
        color: '#FFD800',
        marginBottom: '5%'
    },
    text1sty: {
        fontSize: 25,
        color: 'white'
    },
    text2sty: {
        fontSize: 25
    },
    mainimageviewsty: {
        flexDirection: 'row',
        marginTop: '18%',
        //backgroundColor: 'red',
        width: '75%',
        height: 110,
    },
    image1viewsty: {
        width: '33.3%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 110
    },
    mainimage2viewsty: {
        flexDirection: 'row',
        marginTop: '5%',
        //backgroundColor: 'green',
        width: '75%',
        height: 110,
    },
    imagesty: {

    }
});
