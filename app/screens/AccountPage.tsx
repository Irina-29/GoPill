import React, { useEffect, useState } from "react";
import MainLayout from "./Layout";
import { Appbar, Avatar, Button, Divider, TextInput, Paragraph } from "react-native-paper";
import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle, Text, Pressable, ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from "react-native-safe-area-context";
const styles = StyleSheet.create({
    input: {
        margin: 12,
    },

});
const AccountProfile = ({ navigation }: any) => {
    const [user, setUser] = useState<{ name: string, email: string, password: string, address: string, phoneNumber: string }>();
    useEffect(() => {
        const fetchUser = async () => {
            const storedUser = await AsyncStorage.getItem('@user');
            if (!!storedUser) {
                setUser(JSON.parse(storedUser));
            }
        }
        fetchUser();
    }, [])
    // const [newName, setNewName] =useState('{user?.name}');
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newAddress, setNewAddress] = useState('');
    const [newPhoneNumber, setNewPhoneNumber] = useState('');
    const [hidePassword, setHidePassword] = useState(true);
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const inputStyle: StyleProp<ViewStyle> = {
        alignSelf: 'stretch',
        margin: 10
    };
    const [text, onChangeText] = React.useState("Ana");
    return (
        <MainLayout>
            <Appbar.Header style={{ backgroundColor: '#64b5f6', bottom: 10 }}>
                <Appbar.BackAction color="white" onPress={() => navigation.navigate("Profile")} />
                <Appbar.Content color={'white'} title={`Account`} />
            </Appbar.Header>
            <ScrollView>
                <TextInput
                    style={styles.input}
                    label="Name"
                    mode="outlined"
                    onChangeText={newName => setNewName(newName)}
                    value={user?.name}
                />
                <TextInput
                    style={styles.input}
                    label="Email"
                    mode="outlined"
                    onChangeText={newEmail => setNewName(newEmail)}
                    value={user?.email}
                />
                <TextInput
                    style={styles.input}
                    mode="outlined"
                    label="Enter password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="newPassword"
                    secureTextEntry={passwordVisibility}
                    right={<TextInput.Icon name="eye" onPress={() => setPasswordVisibility(!passwordVisibility)} />}
                    value={user?.password}
                    onChangeText={newPassword => setNewPassword(newPassword)}
                />
                <TextInput
                    style={styles.input}
                    label="Address"
                    mode="outlined"
                    onChangeText={newAddress => setNewAddress(newAddress)}
                    value={user?.address}
                />
                <TextInput
                    style={styles.input}
                    label="Phone Number"
                    mode="outlined"
                    onChangeText={newPhoneNumber => setNewPhoneNumber(newPhoneNumber)}
                    value={user?.phoneNumber}
                    mode="outlined"
                />
                <Text style={{ marginLeft: 15, color: "black" }}>Payment method</Text>
                <Button labelStyle={{ color: 'white', fontSize: 20, alignContent: 'center' }}
                    style={{ alignSelf: 'center', height: 50, width: 130 }}
                    mode="contained" color="#81FDA7"
                    onPress={() => AsyncStorage.setItem("@user", JSON.stringify({
                        name: newName, email: newEmail, password: newPassword, address: newAddress, phoneNumber: newPhoneNumber
                    }))}> Save </Button>
            </ScrollView>
        </MainLayout>
    );
}

export default AccountProfile;
