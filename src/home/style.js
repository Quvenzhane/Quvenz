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
    // justifyContent: 'space-around',
    padding: 5,
  },

  eventBirthday:{
    width: 100, 
    height: 110,
    padding: 2,
    //backgroundColor: 'powderblue',
    color:'#fff',
    alignItems:'center',
    borderRadius :20,
    opacity: 0.8
  },
  createEvent1:{
    width: 100, 
    height: 110,
    padding: 2,
    backgroundColor: '#FAD566',
    alignItems:'center',
    borderRadius :6,
    opacity: 0.2
  },
  createEvent2:{
    width: 100, 
    height: 110,
    padding: 2,
    backgroundColor: '#FAD566',
    alignItems:'center',
    borderRadius :6,
    opacity: 0.2

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
    height: 120,
    width: 120,
  },

});
  