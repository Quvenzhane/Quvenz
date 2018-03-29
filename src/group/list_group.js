import React, { Component } from 'react'
import { Container, Header, Content, List, ListItem, Text, Badge, View, H3, Icon, Body} from 'native-base';
import styles from './style'; 
import { Query } from "react-apollo";

import { GET_GROUPS} from '../graph/queries/groupQueries';

export default class ListGroup extends Component {
    constructor(props){
        super(props);
        this.state = { 
           loading: false, created: false, errorMessage: false ,
           loadingText: "", groups: null, groupArray: null,
        };
    }
  
  render() {
    const { navigate } = this.props.navigation;
    var items = ['Family (4)','Haters (2)',
    //'Beevas (1)', 'Laravel Meetup (4)','Excursions (20)'
    ];
    return (

<Query query={GET_GROUPS}>
    {({ loading, error, data }) => 
      { 
        var theList = null;
        let loadingIt = loading && "loading...";
        let errorShit = error && error.message;

        if(data){ console.log('there is data'); loadingIt = ""; errorShit = "";
            if(data.getGroups){
                
                theList = (
                    <List dataArray={data.getGroups}
                    renderRow={(group) =>
                    <ListItem>
                        <Body>
    
                            <Text  onPress={() =>navigate('Group')}>{group.title}</Text>
                            <Text note>103,004 participants</Text>
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
                <Text>Picture</Text>
                <Badge>
                    <Text>2</Text>
                </Badge>
                <Text>Participant</Text>
                <Badge success>
                    <Text>2</Text>
                </Badge>
                <Text>Event</Text>
                <Badge primary>
                    <Text>45</Text>
                </Badge>
             </View> 
             <View style={styles.listHeader}> 
                <Icon name="add" style={{paddingRight:15}}
                                 onPress={() =>navigate('CreateGroup')}/>
                <H3>Followed Groups</H3>
                {
                    console.log(error)
                    
                }
             </View>   
            <List dataArray={items}
                renderRow={(item) =>
                <ListItem>
                    <Body>
                        <Text>{loadingIt}</Text>
                        <Text>{errorShit}</Text>

                        <Text  onPress={() =>navigate('Group')}>{item}</Text>
                        <Text note>103,004 participants</Text>
                    </Body>
                </ListItem>
                }>
            </List>
            <View>
                {theList}
                <Text>{console.log(data)}</Text>
                <Text>{data && console.log(data.getGroups)}</Text>
                
            </View>
            
     

        </Content>
    </Container>)

    }}
</Query>

    )
  }
}
