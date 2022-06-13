import { View, Image, StyleSheet, ScrollView} from 'react-native'
import React, { useState } from 'react';
import logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import { useNavigation } from '@react-navigation/native';


const SignInScreen = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation();

    const signInPressed = () => {
        console.warn("Signed In Successfully");
    }

    const forgotPasswordPressed = () => {
        console.warn('forgotPasswordPressed')
    }

    const signedInWithGoogle = () => {
        console.warn('Signed in with google successfully!')
    }
    const signedInWithFacebook = () => {
        console.warn('Signed in with Facebook successfully!')
    }
    const signedInWithApple = () => {
        console.warn('Signed in with Apple successfully!')
    }

    const signedUpPressed = () => {
        console.warn('Create an account here')

        navigation.navigate('SignUp');
    }

  return (
 <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Image source={logo} style={styles.logo} resizeMode='contain' />
      <CustomInput
       placeholder='username'
       value={username}
       setValue={setUsername}
         />
      <CustomInput 
      placeholder='password'
      value={password}
      setValue={setPassword}
      secureTextEntry={true}
       />
       <CustomButton text='Sign In' onPress={signInPressed} type='PRIMARY' />

       <CustomButton 
       text='Forgot Password?'
        onPress={forgotPasswordPressed}
        type= "TERTIARY"
        />

        <CustomButton 
       text='Sign In with Google'
        onPress={signedInWithGoogle}
        type= "SECONDARY"
        />

        <CustomButton 
       text='Sign In with Facebook'
        onPress={signedInWithFacebook}
        type= "FACEBOOK"
        />

        <CustomButton 
       text='Sign In with Apple'
        onPress={signedInWithApple}
        type= "APPLE"
        />

        <CustomButton 
        text="Don't have an account? Sign Up"
        onPress={signedUpPressed}
        type= "TERTIARY"
        />
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    root:{
        alignItems:"center",
        padding:20,
    },
    logo:{
        width:'70%',
        maxWidth:200,
        maxHeight: 200,
    }
});

export default SignInScreen