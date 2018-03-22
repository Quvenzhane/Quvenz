import { StackNavigator,} from 'react-navigation';

import SplashScreen from './src/splash-screen/splashscreen';
import SignupScreen from './src/auth/signup/signup';
import LoginScreen from './src/auth/login/login';
import HomeScreen from './src/home/home';
import CreateGroup from './src/group/create_group';
import ListGroup from './src/group/list_group';
import CreateEvent from './src/event/create_event';




const PixNavigation = StackNavigator(
  {
    Splash: { screen: SplashScreen, navigationOptions: {header: false}},
    Signup: { screen: SignupScreen},
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen, navigationOptions: {header: false} },
    CreateGroup: { screen: CreateGroup, navigationOptions: {title: 'Create Group', headerStyle:{backgroundColor: '#ede'}}},
    ListGroup: { screen: ListGroup, navigationOptions: {title: 'Group List', headerStyle:{backgroundColor: '#ede'}}},
    CreateEvent: { screen: CreateEvent, navigationOptions: {title: 'Create Event', headerStyle:{backgroundColor: '#ede'}}}

  },
  {
    navigationOptions:{
    //header:false,
  } 

});
export default PixNavigation;