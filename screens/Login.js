import React                                                         from 'react';
import { View, StyleSheet, TextInput, Image, Text, ImageBackground } from 'react-native';

import bgImage from '../images/bg.png';
import logo    from '../images/logo.png';

const Login = () => {
   return (
	  <ImageBackground source={ bgImage } style={ styles.backgroundContainer }>
		 <View style={ styles.logoContainer }>
			<Image source={ logo } style={ styles.logo } />
			<Text style={ styles.logoText }>REACT NATIVE</Text>
		 </View>
		 <View style={ styles.inputContainer }>
			<View>
			   <TextInput />
			</View>
			<View>
			   <TextInput />
			</View>
			<View>
			   <TextInput />
			</View>
		 </View>
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
   },
   logo: {
	  width: 150,
	  height: 150,
	  opacity: .9,
   },
   logoText: {
	  color: 'white',
	  fontSize: 20,
	  fontWeight: '500',
	  marginTop: 10,
	  opacity: .5,
   },
   inputContainer: {},
});

export default Login;
