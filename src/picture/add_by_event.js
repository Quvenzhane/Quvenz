import React, { Component } from "react";
import { Picker, Keyboard, View } from "react-native";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Toast
} from "native-base";
import ImagePicker from "react-native-image-crop-picker";

import styles from "./style";
import { Query } from "react-apollo";
import { Mutation } from "react-apollo";
import { ADD_PHOTO } from "../graph/mutations/photoMutation";
import { GET_USER_EVENTS } from "../graph/queries/eventListQueries";
import { GET_EVENTSCREEN } from "../graph/queries/eventScreenQueries";
import { GET_USER_PHOTO } from "../graph/queries/photoByUserQueries";

export default class AddPictureByEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false,
      eventList: "",
      description: "",
      imageUrl: "",
      event: "",
      eventName: "",
      testimageUrl: "",
      responsemessage: ""
    };
    this.doSubmit = this.doSubmit.bind(this);
  }
  onInputTextChange = (text, type) => {
    this.setState({ [type]: text });
  };
  addPictures = () => {
    ImagePicker.openPicker({
      // multiple: true
    }).then(images => {
      var data = new FormData(); //{uri: PicturePath, name: 'selfie.jpg', type: 'image/jpg'}
      //data.append("file", images.path); //if this is an array, do I need to get the first one?
      data.append("upload_preset", "bnqppfnu");
      data.append("mime", "image/jpeg");
      data.append("path", images.path);
      //data.append("file", images.path);
      data.append("file", {
        uri: images.path,
        name: "test.jpg",
        type: "image/jpeg"
      });
      images.upload_preset = "bnqppfnu";
      images.file = images.path;
      const config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data;"
          //Authorization: "Bearer " + "SECRET_OAUTH2_TOKEN_IF_AUTH"
        },
        body: data // JSON.stringify(data)
      };

      var imgurl = "https://api.cloudinary.com/v1_1/ls8e0q6mx/image/upload";
      fetch(imgurl, config)
        .then(responseData => {
          // Log the response form the server
          // Here we get what we sent to Postman back
          console.log(responseData);
          this.setState({
            responsemessage: JSON.stringify(responseData) || "success"
          });
        })
        .catch(err => {
          console.log(err);
          this.setState({ responsemessage: err.message || "failure" });
        });
      console.log(images);
      this.setState({ testimageUrl: images });
    });
  };

  doSubmit = (doAddPhoto, obj, e) => {
    Keyboard.dismiss();
    if (this.state.event != "") {
      //temp
      var img = Math.floor(Math.random() * 5) + 1;
      this.state.imageUrl =
        "https://magbodo.com/asset/pixfam-images/event" + img + ".jpg";

      const { imageUrl, event, description } = this.state;
      const { data, loading, error } = obj;
      doAddPhoto({ variables: { imageUrl, event, description } });
    } else {
      Toast.show({
        text: "Aw! Check your input",
        type: "warning",
        duration: 4000
      });
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    this.state.event = this.props.navigation.getParam("eventId");
    this.state.eventName = this.props.navigation.getParam("eventName");
    const eventId = this.props.navigation.getParam("eventId");
    return (
      <Mutation
        mutation={ADD_PHOTO}
        refetchQueries={[
          { query: GET_USER_EVENTS },
          { query: GET_EVENTSCREEN, variables: { eventId } }
        ]}
      >
        {(addPhoto, { data, loading, error }) => (
          <Container style={styles.container}>
            {loading && <Text>Loading...</Text>}
            {error && <Text>Error :( Please try again</Text>}
            {data &&
              Toast.show({
                text: "Image was successfuly added",
                type: "success",
                duration: 4000
              })}
            {data && navigate("Event", { eventId: this.state.event })}
            <Content style={styles.backgroundEdit}>
              <Form>
                <Text>Add pictures to {this.state.eventName}</Text>
                <Text>{JSON.stringify(this.state.testimageUrl, null, 4)}</Text>
                <Text>
                  response:{" "}
                  {JSON.stringify(this.state.responsemessage, null, 4)}
                </Text>
                <Item floatingLabel>
                  <Label>Description</Label>
                  <Input
                    onChangeText={text =>
                      this.onInputTextChange(text, "description")
                    }
                    value={this.state.description}
                  />
                </Item>
                <Button
                  block
                  rounded
                  info
                  style={styles.button}
                  onPress={this.doSubmit.bind(this, addPhoto, {
                    data,
                    loading,
                    error
                  })}
                >
                  <Text onPress={this.addPictures}>Add Pictures</Text>
                </Button>
                <Button
                  block
                  rounded
                  info
                  style={styles.button}
                  onPress={this.addPictures}
                >
                  <Text>Test Add Pictures</Text>
                </Button>
              </Form>
            </Content>
          </Container>
        )}
      </Mutation>
    );
  }
}
