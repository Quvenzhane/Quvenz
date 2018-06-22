import React, { Component } from 'react';
import { Content, Button, Icon, Card, CardItem,Right,Body, ActionSheet,Root  } from 'native-base'; 
import { ScrollView, View, TouchableOpacity, Text  } from 'react-native'; 
import styles from './style'; 
import { Query } from "react-apollo";
import FitImage from 'react-native-fit-image';
import { GET_PHOTOS} from '../graph/queries/photoQueries';
import GridView from 'react-native-gridview';

 

export default class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      freshPhotos:null,randomizeRows:true
    };
  }

  loadMomentImages() {  
    // const minusPrivate = this.state.freshPhotos.filter(photos => (photos.event.e_type=="Public"))
    // console.log(minusPrivate)
    // return minusPrivate.slice(0, 10).map(photos => (
    //        <TouchableOpacity style={{padding:2}} onPress ={() =>this.props.theNav("EventPicComment",{photo:photos._id, imageSource:photos.image_url})} >
    //             <FitImage 
    //                 source={{ uri: photos.image_url }}
    //                 style={styles.fitImageWithSize}
    //             />        
    //         </TouchableOpacity>
    //     ))
    const itemsPerRow = 3;

    // Use data from an array...
      const data = Array(20)
      .fill(null)
      .map((item, index) => index + 1);

      // ...or create your own data source.
      // This will randomly allocate 1-3 items per row, and will be used
      // if the `randomizeRows` prop is `true`.
      const randomData = [];
      for (let i = 0; i < data.length; i) {
      const endIndex = Math.max(Math.round(Math.random() * itemsPerRow), 1) + i;
      randomData.push(data.slice(i, endIndex));
      i = endIndex;
      }
      const dataSource = new GridView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      }).cloneWithRows(randomData);

     return <GridView
              data={data}
              dataSource={this.state.randomizeRows ? dataSource : null}
              itemsPerRow={itemsPerRow}
              renderItem={(item, sectionID, rowID, itemIndex, itemID) => {
                return (
                  <View style={{ flex: 1, backgroundColor: '#8F8', borderWidth: 1 }}>
                   <FitImage 
                        source={{ uri: "https://magbodo.com/asset/pixfam-images/event4.jpg" }}
                        style={styles.fitImageWithSize}
                    />    
                    <Text>{`${item} (${sectionID}-${rowID}-${itemIndex}-${itemID})`}</Text>
                  </View>
                );
              }}
            />
    }

  render() {

   

    return (
      <Content style={styles.container}>

          <View style={styles.defaultGroup}>
              <Query query={GET_PHOTOS} fetchPolicy="network-only">
              {({ loading, error, data }) => 
              { 
                  if (loading) return <Text> Loading...</Text>;
                  if (error) return <Text>Internet error...</Text>
                  if(data){ 
                      if(data.getPhotos){  
                          this.state.freshPhotos = data.getPhotos;
                      }
                  }
                  return(    
                      <ScrollView>
                          {this.loadMomentImages()}
                         
                      </ScrollView>
                      )
                  }}
              </Query>

          </View>

        
      </Content>    
    )
  }
}
