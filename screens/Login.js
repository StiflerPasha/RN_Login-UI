import React, { useState } from 'react';
import {
   View,
   StyleSheet,
   TextInput,
   Image,
   Text,
   ImageBackground,
   Dimensions,
   TouchableWithoutFeedback,
   Keyboard,
   KeyboardAvoidingView,
   TouchableOpacity,
   Alert,
}                          from 'react-native';

import Icon    from 'react-native-vector-icons/Ionicons';
import bgImage from '../assets/images/bg.jpg';
import logo    from '../assets/images/logo.png';
import Colors  from '../constants/Colors';

const { width: WIDTH } = Dimensions.get('window');

const Login = () => {
   const [showPassword, setShowPassword] = useState(false);
   const [userName, setUserName] = useState('');
   const [password, setPassword] = useState('');


   const loginBtnHandler = () => {
	  Keyboard.dismiss();
	  Alert.alert(
		 'Log In (options)',
		 `Name: ${ userName } \nPassword: ${ password }`,
	  );
	  setPassword('');
   };

   const registerBtnHandler = () => {
	  Alert.alert(
		 'Register',
		 'Redirect to Register Form',
	  );
   };

   return (
	  <ImageBackground source={ bgImage } style={ styles.backgroundContainer }>
		 <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
			<KeyboardAvoidingView behavior={ 'padding' } enabled>
			   <View style={ styles.logoContainer }>
				  <Image source={ logo } style={ styles.logo } />
				  <Text style={ styles.logoText }>{ 'REACT NATIVE  /  Log In' }</Text>
			   </View>
			   <View>
				  <View style={ styles.inputContainer }>
					 <Icon
						name={ 'ios-person' }
						size={ 28 }
						color={ Colors.login }
						style={ styles.inputIcon } />
					 <TextInput
						style={ styles.input }
						placeholder={ 'Username' }
						placeholderTextColor={ Colors.login }
						underlineColorAndroid={ 'transparent' }
						value={ userName }
						onChangeText={ text => setUserName(text) } />
				  </View>
				  <View style={ styles.inputContainer }>
					 <Icon
						name={ 'ios-lock' }
						size={ 28 }
						color={ Colors.login }
						style={ styles.inputIcon } />
					 <TextInput
						style={ styles.input }
						placeholder={ 'Password' }
						secureTextEntry={ !showPassword }
						placeholderTextColor={ Colors.login }
						underlineColorAndroid={ 'transparent' }
						value={ password }
						onChangeText={ text => setPassword(text) } />
					 <TouchableOpacity
						style={ styles.secEye }
						onPress={ () => setShowPassword(!showPassword) }>
						<Icon
						   name={ showPassword ? 'ios-eye-off' : 'ios-eye' }
						   size={ 28 }
						   color={ Colors.login } />
					 </TouchableOpacity>
				  </View>
			   </View>
			   <View style={ styles.multiBtnContainer }>
				  <TouchableOpacity
					 style={ styles.btnLogin }
					 activeOpacity={ 0.7 }
					 onPress={ loginBtnHandler }>
					 <Text style={ styles.btnText }>
						Log In
					 </Text>
				  </TouchableOpacity>
				  <TouchableOpacity
					 style={ styles.btnRegister }
					 activeOpacity={ 0.7 }
					 onPress={ registerBtnHandler }>
					 <Text style={ styles.btnText }>
						Register
					 </Text>
				  </TouchableOpacity>
			   </View>
			   <View style={ { height: 125 } } />
			</KeyboardAvoidingView>
		 </TouchableWithoutFeedback>
	  </ImageBackground>

   );
};


const styles = StyleSheet.create({
   backgroundContainer: {
	  flex: 1,
	  width: null,
	  height: null,
	  alignItems: 'center',
	  justifyContent: 'center',
   },
   logoContainer: {
	  alignItems: 'center',
	  marginBottom: 50,
   },
   logo: {
	  width: 150,
	  height: 150,
	  opacity: .9,
	  tintColor: Colors.login,
   },
   logoText: {
	  color: 'white',
	  fontSize: 20,
	  fontWeight: '500',
	  marginTop: 10,
	  opacity: .5,
   },
   inputContainer: {
	  marginTop: 10,
	  width: WIDTH - 125,
   },
   input: {
	  height: 45,
	  borderRadius: 25,
	  fontSize: 16,
	  paddingLeft: 45,
	  backgroundColor: 'rgba(0,0,0,0.35)',
	  color: Colors.login,
   },
   inputIcon: {
	  position: 'absolute',
	  top: 8,
	  left: 15,
   },
   secEye: {
	  position: 'absolute',
	  top: 8,
	  right: 15,
   },
   multiBtnContainer: {
	  flexDirection: 'row',
	  justifyContent: 'space-between',
	  marginTop: 20,
	  width: WIDTH - 125,
   },
   btnRegister: {
	  justifyContent: 'center',
	  width: '45%',
	  height: 35,
	  borderRadius: 25,
	  backgroundColor: 'rgba(0,100,0,0.35)',
   },
   btnLogin: {
	  justifyContent: 'center',
	  width: '45%',
	  height: 35,
	  borderRadius: 25,
	  backgroundColor: 'rgba(68,144,146,0.35)',
	  borderColor: Colors.login,
	  borderWidth: 1,
   },
   btnText: {
	  textAlign: 'center',
	  fontSize: 16,
	  color: Colors.login,
	  fontWeight: '400',
   },
});

export default Login;
