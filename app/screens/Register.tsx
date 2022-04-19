import React, { useState } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { Button, TextInput, Paragraph } from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = ({ navigation }: any) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);
    const [error, setError] = useState('');

    const inputStyle: StyleProp<ViewStyle> = {
        alignSelf: 'stretch',
        margin: 20
    };

    const register = () => {
        if(password !== repeatPassword) {
            setError("Password doesn't match")
        }
        else {
            AsyncStorage.setItem("@user", JSON.stringify({
                name, email, password, address,phoneNumber 
            })).then(() => navigation.navigate("Login"))
        }
    };

    return (
        <View style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', height: '50%', marginTop: '30%' }}>
            <TextInput
                mode="outlined"
                style={inputStyle}
                label="Name"
                value={name}
                autoComplete={false}
                onChangeText={(name: string) => setName(name)}
            />
            <TextInput
                mode="outlined"
                style={inputStyle}
                label="Email"
                value={email}
                autoComplete={false}
                onChangeText={(email: string) => setEmail(email)}
            />
            <TextInput
                mode="outlined"
                label="Password"
                style={inputStyle}
                secureTextEntry={hidePassword}
                value={password}
                autoComplete={false}
                onChangeText={(password) => setPassword(password)}
                right={<TextInput.Icon name="eye" onPress={() => setHidePassword(!hidePassword)} />}
            />
            <TextInput
                mode="outlined"
                label="Repeat Password"
                style={inputStyle}
                secureTextEntry={hidePassword}
                value={repeatPassword}
                autoComplete={false}
                onChangeText={(password) => setRepeatPassword(password)}
                right={<TextInput.Icon name="eye" onPress={() => setHidePassword(!hidePassword)} />}
            />
            <Paragraph>
                {error}
            </Paragraph>
            <Button mode="outlined" style={{ alignSelf: 'center' }}
                onPress={register}
                //() => navigation.navigate('Main')
            >Register</Button>
        </View>
    );
}

export default RegisterScreen;