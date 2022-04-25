import React, { useState } from "react";
import { StyleProp, View, ViewStyle, Image, StyleSheet } from "react-native";
import { Button, TextInput, Paragraph } from "react-native-paper";

const LoginScreen = ({ navigation }: any) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);
    const [error, setError] = useState('');

    const inputStyle: StyleProp<ViewStyle> = {
        alignSelf: 'stretch',
        margin: 20
    };

    const changeText = (email: string) => setEmail(email);
    
    const loginCheck = () => {
        if(email !== "failed") {
            navigation.navigate('Main');
        } 
        else {
            setError("Login Failed");
        }
    };

    const styles = StyleSheet.create({
        container: {
            marginTop: '30%'
        },
        size: {
          width: 200,
          height: 200,
          resizeMode: 'stretch',
        },
      });

    return (
        <View style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', height: '50%', marginTop: '30%', justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.container}>
                <Image 
                    style={styles.size}
                    source={require('./assets/GoPill-logo.png')}
                />
            </View>
            <TextInput
                mode="outlined"
                style={inputStyle}
                label="Email"
                value={email}
                autoComplete={false}
                onChangeText={changeText}
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
            <Paragraph>
                {error}
            </Paragraph>
            <Button mode="outlined" color="#64b5f6" style={{ alignSelf: 'center', marginBottom: 25, width: 150}} onPress={loginCheck}
            >Login</Button>
            <Button mode="outlined" color="#64b5f6" style={{ alignSelf: 'center', width: 150 }}
                onPress={() => navigation.navigate("Register")}
            >Register</Button>
        </View>
    );
}

export default LoginScreen;