import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Router, Scene, ActionConst, Stack, Actions } from 'react-native-router-flux';

import Homepage from './Homepage';
import LogIn from './Login';
import courses from './courses';
import crossword1 from './crossword1';
import crossword3 from './crossword3';
import crossword4 from './crossword4';
import Dashbord from './Dashbord';
import Levels from './Levels';
import Register from './Register';
import Pointstable from './Pointstable';


export default class App extends Component {

    render() {
        return (


            <Router>
                <Stack key="root">
                    <Scene key="Homepage" initial={Homepage} component={Homepage} hideNavBar={true} />
                    <Scene key="Login" component={LogIn} hideNavBar={true} />
                    <Scene key="Register" component={Register} hideNavBar={true} />
                    <Scene key="Dashbord" component={Dashbord} hideNavBar={true} />
                    <Scene key="courses" component={courses} hideNavBar={true} />
                    <Scene key="Pointstable" component={Pointstable} hideNavBar={true} />
                    <Scene key="courses" component={courses} hideNavBar={true} />
                    <Scene key="Levels" component={Levels} hideNavBar={true} />
                    <Scene key="Pointstable" component={Pointstable} hideNavBar={true} />
                    <Scene key="crossword1" component={crossword1} hideNavBar={true} />
                    <Scene key="crossword3" component={crossword3} hideNavBar={true} />
                    <Scene key="crossword4" component={crossword4} hideNavBar={true} />
                </Stack>
            </Router>

        );
    }
}
