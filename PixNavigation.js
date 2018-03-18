import { StackNavigator,} from 'react-navigation';

import SplashScreen from './src/splash-screen/splashscreen';
import SignupScreen from './src/auth/signup/signup';
import LoginScreen from './src/auth/login/login';
import HomeScreen from './src/home/home';


const PixNavigation = StackNavigator(
  {
    Splash: { screen: SplashScreen },
    Signup: { screen: SignupScreen },
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen },
  },
  {
    navigationOptions:{
    header:false,
  } 

});
export default PixNavigation;
