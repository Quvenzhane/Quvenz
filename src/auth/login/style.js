import React, {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#3498db',
    },
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
    },
    sologanText: {
      alignItems: 'center',
      flexGrow: 1,
      paddingTop: 150,
      // fontSize: 56,
      justifyContent: 'center'
    },
    logo: {
      width: 500,
      height: 450
    },
    title:{
      marginTop: 15,
      textAlign: 'center',
      opacity: 0.5
    },
    formContainer: {
      padding:50,
    },
    input:{
        height:40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        color: '#000',
        paddingHorizontal: 10,
    },
    buttonContainer:{
        backgroundColor:'#2980b9',
        paddingVertical:15,
        borderRadius :20
    },
    buttonText:{
        textAlign: 'center',
        color: '#ffffff',
        fontWeight:'700'
    },
    signupText:{
      padding:15,
    }
});
