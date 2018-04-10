import React, { Component } from 'react'
import {  View, Text, ImageBackground, TouchableOpacity} from 'react-native'
import {  H1, Label, Icon, Form, Input, Item, Content} from 'native-base' 
import styles from './style' 


export default class WelcomeGroup extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
        <ImageBackground style={styles.backgroundContainer} source={require('../../images/child.png')}>
          <Content style={styles.container}>
              <H1 style={styles.welcome}>Group</H1>
              <Text style={styles.sologanText} >
              Arrange similar events into a Group. For example Family group could contain event like Dadday's Birthday. 
              </Text>

              <Item disabled style={{marginTop:50}}>
                <Input disabled placeholder='Family'
                  placeholderTextColor='#C8D7F3'/>
                <Icon name='information-circle' />
              </Item>

              <Text style={styles.sologanText}>You have a default group called family. You can add more groups later.</Text>
              
            <TouchableOpacity style={styles.buttonContainer} 
                  onPress={() =>navigate('WelcomeEvent')}
                  //onPress={this.onLoginPress}
                  >
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </Content>
      </ImageBackground>    
    )
  }
}
