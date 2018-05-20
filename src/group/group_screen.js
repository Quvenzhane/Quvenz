import React, { Component } from 'react'
import { Container, Content, Badge, Icon, View, Text, H3} from 'native-base';
import { List, ListItem, Body, Thumbnail, Toast} from 'native-base';

import styles from './style'; 
import { Query } from "react-apollo";
import { GET_GROUP_EVENTLIST} from '../graph/queries/groupEventListQueries';

export default class GroupScreen extends Component {
    constructor(props){
        super(props);
        this.state = { 
           showToast: false
        };
    }
  render() {
    const { navigate } = this.props.navigation;
    const groupId = this.props.navigation.getParam('groupId');
    console.log(this.props.navigation.getParam('groupId'));

    return (
        <Query query={GET_GROUP_EVENTLIST} variables={{ groupId }}>
        {({ loading, error, data }) => 
        { 
            var theList = null;
            if (loading) return <Text> Loading...</Text>;
            if (error){
                Toast.show({
                    text: error.message,
                    buttonText: 'Okay',
                    type: "danger",
                    duration: 4000
                    });
                    return <Text> Whoops! Something got broken</Text>;
            }
            if(data){ console.log('there is data');
                if(data.getGroup){ 
                    theList = (
                        <List dataArray={data.getGroup.event}
                        renderRow={(events) =>
                         <ListItem>
                         <Thumbnail square size={80} source={require('../../images/star.png') } />
                         <Body>
                             <Text onPress={() =>navigate('Event',{eventId:events._id})}>{events.title}</Text>
                             <Text note>123 pictures . .</Text>
                         </Body>
                     </ListItem>
                        }>
                    </List>)
                }
            }

            return(   
                <Container style={styles.container}>
                    <Content>
                        <View style={styles.metricsContainer}>
                            <Text> Pictures  </Text>
                            <Badge>
                                <Text>280</Text>
                            </Badge>
                            </View> 
                        <H3 style={styles.header}>{data.getGroup.title} events</H3>
                        <Text note>{data.getGroup.description}</Text>
                        
                        {theList}
                    </Content>
                </Container>
                )
            }}
        </Query>
    )
  }
}
