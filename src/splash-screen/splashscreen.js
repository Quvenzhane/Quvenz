import React, {Component} from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Navigator, ImageBackground, AsyncStorage} from 'react-native';
import {StackNavigator,} from 'react-navigation';
import gql from "graphql-tag";

import styles from './style';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
    }

    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (

            <ImageBackground style={styles.backgroundContainer} source={require('../../images/plain_bk.png')}>
                <View style={styles.container}>
                    <Text style={styles.name}>Pixfam </Text>
                    <Text style={styles.solgan}>Picture events sharing app</Text>

                    <TouchableOpacity style={styles.buttonContainer} onPress={() =>
                        navigate('Home')}>
                        <Text style={styles.buttonText}>GET STARTED</Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        )
    }

}
