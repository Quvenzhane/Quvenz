/*import React, { Component } from "react";
import { Container, Fab, Icon } from "native-base";
import { AsyncStorage, View, Text } from "react-native";
import { StackNavigator } from "react-navigation";

import HomeHeader from "./header";
import HomeFooter from "./footer";
import HomeBody from "./body";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: false,
      checkingtoken: false
    };
  }

  async componentWillMount() {
    try {
      console.log("componentWillMount : ...");
      await AsyncStorage.setItem("teststuff1", "testvalue1");

      const token = await AsyncStorage.getItem("@pixfam_token");
      if (!token) {
        console.log("no token");
        this.setState({ token: false });
        this.props.navigation.navigate("Login");
        return;
      }
      console.log("there is token");
    } catch (error) {
      console.log("error: " + error.message);
    }
  }
  componentDidMount() {
    this.state.token || this.props.navigation.navigate("Login");
  }
  componentWillUpdate() {
    this.state.token || this.props.navigation.navigate("Login");
  }

  render() {
    console.log("homejs");
    const { navigate } = this.props.navigation;

    const authLayout = (
      <Container>
        <HomeHeader theNav={navigate} />
        <HomeBody theNav={navigate} />
        <Fab
          style={{ backgroundColor: "#FF6600", marginBottom: 40 }}
          position="bottomRight"
          onPress={() => navigate("AddPictureByEventList")}
        >
          <Icon name="add" />
        </Fab>
        <HomeFooter theNav={navigate} />
      </Container>
    );
    const notAuthLayout = (
      <Container>
        <View>
          <Text>Not Authenticated, redirecting to login page ...</Text>
        </View>
      </Container>
    );
    const checkingAuthLayout = (
      <Container>
        <View>
          <Text>Checking you authentication status ...</Text>
        </View>
      </Container>
    );
    const theLayout = this.state.token ? authLayout : notAuthLayout;
    return theLayout;
  }
}*/
