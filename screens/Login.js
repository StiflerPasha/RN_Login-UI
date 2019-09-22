import React                           from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const Login = () => {
   return (
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
   );
};

const styles = StyleSheet.create({
   inputContainer: {},
});

export default Login;
