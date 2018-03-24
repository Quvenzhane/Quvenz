import { StackNavigator,} from 'react-navigation';

import SplashScreen from './src/splash-screen/splashscreen';
import SignupScreen from './src/auth/signup/signup';
import LoginScreen from './src/auth/login/login';
import HomeScreen from './src/home/home';
import CreateGroup from './src/group/create_group';
import ListGroup from './src/group/list_group';
import CreateEvent from './src/event/create_event';
import ListEvent from './src/event/list_event';
import EventPicDetails from './src/event/event_pic_details';
import EventScreen from './src/event/event_screen';
import AddPicture from './src/event/add_pic';
import GroupScreen from './src/group/group_screen';
import Profile from './src/profile/profile';
import Browse from './src/browse/browse';



const PixNavigation = StackNavigator(
  {
    Splash: { screen: SplashScreen, navigationOptions: {header: false}},
    Signup: { screen: SignupScreen},
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen, navigationOptions: {header: false} },
    CreateGroup: { screen: CreateGroup, navigationOptions: {title: 'Create Group', headerStyle:{backgroundColor: '#ede'}}},
    ListGroup: { screen: ListGroup, navigationOptions: {title: 'Group List', headerStyle:{backgroundColor: '#ede'}}},
    Group: { screen: GroupScreen, navigationOptions: {title: 'Group Details', headerStyle:{backgroundColor: '#ede'}}},
    CreateEvent: { screen: CreateEvent, navigationOptions: {title: 'Create Event', headerStyle:{backgroundColor: '#ede'}}},
    ListEvent: { screen: ListEvent, navigationOptions: {title: 'Event List', headerStyle:{backgroundColor: '#ede'}}},
    Event: { screen: EventScreen, navigationOptions: {title: 'My Events', headerStyle:{backgroundColor: '#ede'}}},
    EventPicDetails: { screen: EventPicDetails, navigationOptions: {title: 'Events Details', headerStyle:{backgroundColor: '#ede'}}},
    AddPicture: { screen: AddPicture, navigationOptions: {title: 'Add Event Pictures', headerStyle:{backgroundColor: '#ede'}}},
    Profile: { screen: Profile, navigationOptions: {title: 'Profile', headerStyle:{backgroundColor: '#ede'}}},
    Browse: { screen: Browse, navigationOptions: {title: 'Browse Events', headerStyle:{backgroundColor: '#ede'}}},

  },
  {
    navigationOptions:{
    //header:false,
  } 

});
export default PixNavigation;