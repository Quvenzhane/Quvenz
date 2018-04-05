import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex:1,
    //flexDirection: 'column', 
    padding: 20,
  },
  containerCardByPic: {
    flex:1,
    //flexDirection: 'column', 
    //justifyContent: 'space-around',
    //paddingBottom: 120,
  },
  button:{
    marginTop:30
  },
  metricsContainer:{
    flexDirection: 'row', 
    justifyContent: 'flex-start',
    paddingBottom:30,
  },
  headingContainer:{
    padding:10
  },
  cardContainer:{
  //  flex:1,
   flexDirection: 'column', 
   justifyContent: 'flex-start',
  },
  listHeader:{
    flexDirection: 'row', 
  },
  header:{
    fontWeight:"500",
    opacity: 0.4,
    paddingBottom: 20
  },
  eventScreenContainer:{
    flex: 1,
    backgroundColor: "#E6E6E6"
  }

});
  