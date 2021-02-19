import { View, Icon, Input } from 'native-base';
import React, { Component } from 'react';
import { Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';

export default class componentName extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scores: [],
            totalscore: '',
        }
        this.Get_Score()
    }
    Get_Score = async (id) => {
        let userid = await AsyncStorage.getItem('userid')
        let formdata = new FormData()
        formdata.append('Score', this.state.answer)
        //let userid = 1
        //console.log('id in total likes api', userid)
        let response = await fetch(
            'https://crossword-app-backend.herokuapp.com/app/scores/1/',
            {
                method: 'Post',
                headers: {
                    'Accept': 'application/json',
                },
                body: formdata
            },
        ).then(response => response.json())
            .then(responseJson => {
                //console.log('courses', responseJson);
                // const token = data.token;
                // AsyncStorage.setItem('userid', JSON.stringify(data.user_id))
                this.setState({
                    //userdata: data,
                    scores: responseJson.scores,
                    totalscore: responseJson.total_score
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
    renderItem = (data) => {

        // console.log('courses in render', data)

        return (
            <View style={styles.view1sty}>
                <View style={styles.view2sty}>
                    <Icon style={styles.checkiconsty} type='Entypo' name='chevron-with-circle-right' />
                </View>
                <View style={styles.view3sty}>
                    <Text style={styles.text1sty}>{data?.item?.course_name}</Text>
                </View>
                <View style={styles.view4sty}>
                    <Text style={styles.text2sty}>
                        {data?.item.score}
                    </Text>
                    <Icon style={styles.stariconsty} type='Entypo' name='star-outlined' />

                </View>

            </View>
        )
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={{ marginRight: '88%' }}>
                        <Icon style={{ color: '#000002', fontSize: 55 }} type='Entypo' name='menu' />
                    </View>
                    <Image
                        source={require("./Pic/Tablepointimage.png")}
                    />
                    <Text style={styles.textsty}>
                        اهلابك
                    </Text>

                    <View style={styles.scoreviewsty}>
                        <Icon style={styles.stariconsty} type='Entypo' name='star-outlined' />
                        <Text style={styles.scoretextsty}>Score={this.state.totalscore} </Text>
                    </View>
                    <Text style={styles.textsty}>
                        المقرات التي تم اكمالها
                    </Text>
                    <FlatList
                        data={this.state.scores}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id}
                    />
                    <View style={styles.view5sty}>
                        <TouchableOpacity
                            onPress={() => Actions.Homepage()}
                        >
                            <Text style={styles.text3sty}>
                                عودة للصفحة الرئيسية
                        </Text>
                        </TouchableOpacity>
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

    textsty: {
        fontSize: 30,
        marginTop: '3%',
        color: '#FFFFFF'
    },
    scoreviewsty: {
        height: 90,
        width: '39%',
        borderWidth: .6,
        borderRadius: 8,
        borderColor: '#707070',
        backgroundColor: '#000002',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2%',
        alignSelf: 'center'

    },
    stariconsty: {
        color: '#FFD800',
        fontSize: 35,
        marginBottom: '5%'
    },
    scoretextsty: {
        color: 'white',
        marginBottom: '10%',
        fontSize: 22
    },



    view1sty: {
        flexDirection: 'row',
        marginTop: '4%',
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
    checkiconsty: {
        color: '#007A3D',
        fontSize: 40,
        marginBottom: '5%'
    },
    text1sty: {
        fontSize: 30,
        color: 'white'
    },
    text2sty: {
        fontSize: 30,

    },
    view5sty: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        backgroundColor: '#5B6A78'


    },
    inputview: {
        height: 50,
        width: '100%',
        borderWidth: .6,
        borderRadius: 8,
        borderColor: '#707070',
        backgroundColor: '#59A9C2',
        justifyContent: 'center',
        marginTop: '10%',
        alignSelf: 'center'
    },
    text3sty: {
        color: '#FFFFFF',
        fontSize: 30,
        textDecorationLine: 'underline'
    }



});
