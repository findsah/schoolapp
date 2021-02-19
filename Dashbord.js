import { View, Icon, Input } from 'native-base';
import React, { Component } from 'react';
import { Text, StyleSheet, Image, ScrollView, TouchableOpacity, _Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class componentName extends Component {
    constructor(props) {
        super(props)
        this.state = {
            top_3: [],
            studentNme: '',
            score: ''
        }
        //this.Get_Top()
    }
    Get_Top = async () => {
        // let userid = await AsyncStorage.getItem('userid')
        //let formdata = new FormData()
        f//ormdata.append('Score', this.state.answer)
        //let userid = 1
        //console.log('id in total likes api', userid)
        let response = await fetch(
            'https://crossword-app-backend.herokuapp.com/app/top3/',
            {
                method: 'Post',
                headers: {
                    'Accept': 'application/json',
                },
                // body: formdata
            },
        ).then(response => response.json())
            .then(responseJson => {
                //console.log('courses', responseJson);
                // const token = data.token;
                // AsyncStorage.setItem('userid', JSON.stringify(data.user_id))
                this.setState({
                    //userdata: data,
                    top_3: responseJson.top_3,
                    studentNme: responseJson.student_name
                })
                // console.log('courses++++++++++++++++++++++', this.state.courses)
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
            <ScrollView>
                <View style={styles.container}>


                    <View style={{ marginRight: '88%' }}>
                        <Icon style={{ color: '#000002', fontSize: 55 }} type='Entypo' name='menu' />
                    </View>

                    <Image
                        source={require("./Pic/Dashbordimage.png")}
                    />


                    <View style={styles.inputviewsty}>
                        <TouchableOpacity
                            style={styles.inputview}
                            onPress={() => Actions.courses()}
                        >
                            <Text style={styles.textsty}>اكمل اللعبة</Text>
                        </TouchableOpacity>


                        <TouchableOpacity
                            style={styles.inputview}
                            onPress={() => Actions.Pointstable()}
                        >
                            <Text style={styles.textsty}>ملف المتعلم</Text>
                        </TouchableOpacity>

                        <View
                            style={styles.inputview}>
                            <Text style={styles.textsty}> المتعلمون الاوائل</Text>
                        </View>
                    </View>

                    <View style={styles.imagesty}>
                        <Image

                            source={require("./Pic/Dashbordimage2.png")}
                            style={{ width: 300, height: 200 }}

                        />
                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.textsty}>الوليد</Text>
                            <Text style={styles.textsty}>{this.state.studentNme[0]}</Text>
                            <Text style={styles.textsty}>الخالد</Text>
                        </View>
                    </View>




                </View>
            </ScrollView>
        );
    }
}
let styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#AED0EE',
        alignItems: 'center'
    },

    inputviewsty: {
        width: '60%',
    },

    inputview: {
        height: 70,
        width: '100%',
        borderWidth: .6,
        borderRadius: 8,
        borderColor: '#707070',
        backgroundColor: '#59A9C2',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        alignSelf: 'center'
    },
    textsty: {
        color: '#FFFFFF',
        fontSize: 28
    },
    imagesty: {
        marginTop: '10%',
        paddingBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
        //backgroundColor: 'red'


    }



});
