import React, { Component } from 'react'
import { Container, Header, Content, List, ListItem, Text, Badge, View, H3, Icon, Body} from 'native-base';
import styles from './style'; 
import globalColor from '../../config/app-colors'; 
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
                                    <Text note>103,004 members</Text>
                                </Body>
                                <Text note style={globalColor.appDarkPrimayColor} onPress={() =>navigate('AddGroupMember')}>add</Text>
                            </ListItem>
                            }>
                        </List>)
                    }
                }
                

            return(
                <Container style={styles.container}>
                <Content>
                    <View style={styles.metricsContainer}>
                        <Text>Pictures </Text>
                        <Badge>
                            <Text>2</Text>
                        </Badge>
                        <Text onPress={() =>navigate('GroupMember')}>  Members </Text>
                        <Badge success>
                            <Text>2</Text>
                        </Badge>
                        <Text  onPress={() =>navigate('ListEvent')}>  Events </Text>
                        <Badge primary>
                            <Text>45</Text>
                        </Badge>
                    </View> 
                    <View style={styles.listHeader}> 
                        <Icon name="add" style={{paddingRight:15}}
                                        onPress={() =>navigate('CreateGroup')}/>
                        <H3 style={styles.header}>Followed Groups</H3>
                    </View>   
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
