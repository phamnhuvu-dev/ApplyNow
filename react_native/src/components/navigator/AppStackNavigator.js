import {createStackNavigator} from "react-navigation";
import LoginScreen from "../../features/account/login/LoginScreen";
import SignUpScreen from "../../features/account/signup/SignUpScreen";
import ForgotPasswordScreen from "../../features/account/forgot_password/ForgotPasswordScreen";
import CameraScreen from "../../screens/camera-screen";
import ForgotPasswordStore from "../../features/account/forgot_password/ForgotPasswordStore";
import LoginStore from "../../features/account/login/LoginStore";
import SignUpStore from "../../features/account/signup/SignUpStore";
import MainBottomTabNavigator from "./MainBottomTabNavigator";
import React from "react";


const AppStackNavigator = createStackNavigator(
  {
    Login: (props) => <LoginScreen {...props} loginStore={new LoginStore()}/>,
    SignUp: (props) => <SignUpScreen {...props} signUpStore={new SignUpStore()}/>,
    ForgotPassword: (props) => <ForgotPasswordScreen {...props} forgotPasswordStore={new ForgotPasswordStore()}/>,
    Camera: CameraScreen,
    Main: MainBottomTabNavigator,
  },
  {
    headerMode: "none",
    cardStyle: {shadowColor: "transparent"},
  }
);

export default AppStackNavigator;