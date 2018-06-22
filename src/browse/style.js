import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
      flex:1,
    padding: 10,
  },
 
  defaultGroup: {
    flex: 1, 
    flexDirection: 'row', 
    // justifyContent: 'space-around',
    padding: 5,
  },

  groupHeader:{
    paddingLeft:15,
    paddingTop:10,
    paddingBottom:5,

  },
  groupNav:{
    flex: 1,
    //padding:5,
    flexDirection: 'row', 
    padding:5,
    // justifyContent: 'space-around',
    // alignItems: 'stretch'
  },

  fitImageWithSize: {
    height: 130,
    width: 130,
  },

});
  