import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
      flex:1,
    padding: 10,
  },
  containerPopular: {
    flex:1,
    padding:10,
 },

  defaultGroup: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-around',
    padding: 10,
  },

  groupBirthday:{
    width: 110, 
    height: 110,
    padding: 2,
    backgroundColor: 'powderblue',
    alignItems:'center',
  },
  groupWedding:{
    width: 110, 
    height: 110,
    padding: 2,
    backgroundColor: 'skyblue',
    alignItems:'center',
  },
  groupGraduation:{
    width: 110, 
    height: 110,
    padding: 2,
    backgroundColor: 'steelblue',
    alignItems:'center',

  },
  groupHeader:{
    paddingLeft:15,
    paddingTop:10,
    paddingBottom:10,

  },
  groupNav:{
    flex: 1,
    //padding:5,
    flexDirection: 'row', 
    // justifyContent: 'space-around',
    // alignItems: 'stretch'
  }

});
  