import { View, Input } from 'native-base';
import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React, { Component } from 'react';

export default class componentName extends Component {
    render() {
        return (

            <View style={{ backgroundColor: 'red', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: 'green', width: '90%', height: '70%', alignItems: 'center' }}>
                    <View style={{ backgroundColor: 'yellow', padding: 20, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <Text> Hy</Text>
                    </View>

                    <Image
                        source={require("./Pic/level8.png")}
                        style={{ marginTop: '5%' }}
                    />

                    <View style={{ flexDirection: 'row', backgroundColor: '#707070', width: '80%', padding: 30, marginTop: '5%' }}>
                        <View style={{ backgroundColor: 'yellow', width: '70%' }}>
                            <Text>
                                kia ha q kr raha ha assa batta zara
                            </Text>
                        </View>

                        <View style={{ backgroundColor: 'red', width: '40%', justifyContent: 'center' }}>
                            <Text>
                                _________
                            </Text>
                        </View>

                    </View>

                    <TouchableOpacity style={{ backgroundColor: 'black', width: '100%', padding: 20, position: 'absolute', bottom: 0 }}>
                        <Text>
                            hy
                        </Text>
                    </TouchableOpacity>


                </View>

                <View style={{ flexDirection: 'row', backgroundColor: 'yellow', width: '70%', marginTop: '10%', padding: 20, justifyContent: 'space-between' }}>
                    <View style={styles.inputview}>
                        <Input
                            hu
                        />
                    </View>
                    <View style={styles.inputview}>
                        <Input
                            hu
                        />
                    </View>
                    <View style={styles.inputview}>
                        <Input
                            hu
                        />
                    </View>
                    <View style={styles.inputview}>
                        <Input
                            hu
                        />
                    </View>
                    <View style={styles.inputview}>
                        <Input
                            hu
                        />
                    </View>
                </View>





            </View>
        );
    }
}
let styles = StyleSheet.create({
    inputview: {
        flexDirection: 'row',
        height: 45,
        width: '18%',
        borderWidth: .6,
        borderRadius: 8,
        borderColor: '#707070',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        //marginTop: '3%',
        alignSelf: 'center'
    }
});
