import { View, Text, StyleSheet, ScrollView} from 'react-native'
import React, { useState } from 'react';
import logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation();

    const signUpPressed = () => {
        console.warn("Signed Up Successfully");
    }

    const signedInWithGoogle = () => {
        console.warn('Signed Up with google successfully!')
    }
    const signedInWithFacebook = () => {
        console.warn('Signed Up with Facebook successfully!')
    }
    const signedInWithApple = () => {
        console.warn('Signed Up with Apple successfully!')
    }

    const signInPressed = () => {
        console.warn("Sign in to your account");
        navigation.navigate('SignIn')
    }

  return (
 <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Text style={styles.title}>Create an Account</Text>
      <CustomInput
       placeholder='username'
       value={username}
       setValue={setUsername}
         />
      <CustomInput
       placeholder='email'
       value={email}
       setValue={setEmail}
         />
      <CustomInput 
      placeholder='password'
      value={password}
      setValue={setPassword}
      secureTextEntry={true}
       /> 
      <CustomInput 
      placeholder='Repeat password'
      value={passwordRepeat}
      setValue={setPasswordRepeat}
      secureTextEntry={true}
       />
       <CustomButton text='Register' onPress={signUpPressed} type='PRIMARY' />

       <Text style={styles.text1}>By registering you agree to our 
           <Text style={styles.text2}> Terms of Service </Text> 
           and 
           <Text style={styles.text2}> Privacy Policy</Text>
        </Text>

        <CustomButton 
       text='Sign Up with Google'
        onPress={signedInWithGoogle}
        type= "SECONDARY"
        />

        <CustomButton 
       text='Sign Up with Facebook'
        onPress={signedInWithFacebook}
        type= "FACEBOOK"
        />

        <CustomButton 
       text='Sign Up with Apple'
        onPress={signedInWithApple}
        type= "APPLE"
        />

        <CustomButton 
       text="Already have an account? Sign In"
       onPress={signInPressed}
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
    }, 
    title:{
        fontSize:30,
        marginVertical:10,
        fontWeight:"bold",
    },
    text1:{
        fontSize:15,
        marginVertical:10,
    },
    text2:{
        color:"orange",
    }
});

export default SignUpScreen