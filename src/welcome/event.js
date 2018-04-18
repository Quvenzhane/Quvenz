import React, { Component } from 'react'
import {  View, Text, ImageBackground, TouchableOpacity} from 'react-native'
import {  H1, Label, Icon, Form, Input, Item, Content} from 'native-base' 
import styles from './style' 
 
export default class WelcomeEvent extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground style={styles.backgroundContainer} source={require('../../images/concert.jpg')}>
          <Content style={styles.container}>
              <H1 style={styles.welcome}>Event</H1>
              <Text style={styles.sologanText} >
              Events are like Albums. Pictures are stored and share in events. 
              </Text>

              {/* <Item disabled style={{marginTop:50}}>
                <Input disabled placeholder='My Birthday 2018'
                  placeholderTextColor='#C8D7F3'/>
                <Icon name='information-circle' />
              </Item> */}
              <View style={{marginTop:60}}>
               <Text style={styles.sologanText}>Your can also see pictures of popular events close to you</Text>
              </View>
            <TouchableOpacity style={styles.buttonContainer} 
                  onPress={() =>navigate('Home')}
                  //onPress={this.onLoginPress}
                  >
                <Text style={styles.buttonText}>Finish</Text>
            </TouchableOpacity>
          </Content>
      </ImageBackground>    
    )
  }
}
