import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Navigator,
  ImageBackground,
  AsyncStorage
} from "react-native";
import styles from "./style";

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: false,
      checkingtoken: false
    };

    console.disableYellowBox = true;
  }

  static navigationOptions = {
    title: "Welcome"
  };

  async componentWillMount() {
    try {
      console.log("componentWillMount : ...");
      await AsyncStorage.setItem("teststuff1", "testvalue1");
      const token = await AsyncStorage.getItem("@pixfam_token");
      token ? this.setState({ token: true }) : this.setState({ token: false });
      console.log("token in componentWillMount: ", this.state.token);
      this.state.token && this.props.navigation.navigate("Home");
    } catch (error) {
      console.log("error: " + error.message);
    }
  }
  componentDidMount() {
    this.state.token && this.props.navigation.navigate("Home");
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground
        style={styles.backgroundContainer}
        source={require("../../images/plain_bk.png")}
      >
        <View style={styles.container}>
          <Text style={styles.name}>Pixfam </Text>
          <Text style={styles.solgan}>Picture events sharing app</Text>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigate("Login")}
          >
            <Text style={styles.buttonText}>GET STARTED</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
