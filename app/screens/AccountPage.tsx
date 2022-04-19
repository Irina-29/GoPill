import React, { useEffect, useState } from "react";
import MainLayout from "./Layout";
import { Appbar, Avatar, Button, Divider, TextInput, Paragraph } from "react-native-paper";
import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle, Text, Pressable, ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from "react-native-safe-area-context";
const styles = StyleSheet.create({
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderColor: "grey"
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
        margin: 20
    };
    const [text, onChangeText] = React.useState("Ana");
    return (
        <MainLayout>
            <Appbar.Header style={{ backgroundColor: '#64b5f6', bottom: 10 }}>
                <Appbar.BackAction color="white" onPress={() => navigation.navigate("Profile")} />
                <Appbar.Content color={'white'} title={`Account`} />
            </Appbar.Header>
            <ScrollView>
                <Text style={{ marginLeft: 15, marginTop: 12, color: "black" }}>Name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={newName => setNewName(newName)}
                    placeholder="Type here "
                    defaultValue={user?.name}
                />
                <Text style={{ marginLeft: 15, color: "black" }}>Email</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={newEmail => setNewName(newEmail)}
                    placeholder="Type here "
                    defaultValue={user?.email}
                />
                <Text style={{ marginLeft: 15, color: "black" }}>Password</Text>
                {/* <TextInput
                style={styles.input}
                onChangeText={newEmail => setNewName(newEmail)}
                placeholder="Type here "
                defaultValue={user?.password}
                secureTextEntry={hidePassword}
            >
                <TextInput name="eye" onPress={() => setHidePassword(!hidePassword)} />
            </TextInput> */}
                <TextInput
                    style={styles.input}
                    placeholder="Enter password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="newPassword"
                    secureTextEntry={passwordVisibility}
                    right={<TextInput.Icon name="eye" onPress={() => setPasswordVisibility(!passwordVisibility)} />}
                    value={user?.password}
                    enablesReturnKeyAutomatically
                    onChangeText={newPassword => setNewPassword(newPassword)}
                />
                <Text style={{ marginLeft: 15, color: "black" }}>Address</Text>
                <TextInput
                    onChangeText={newAddress => setNewAddress(newAddress)}
                    placeholder="Type here "
                    defaultValue={user?.address}
                />
                <Text style={{ marginLeft: 15, color: "black" }}>Phone Number</Text>
                <TextInput
                    label="Phone Number"
                    onChangeText={newPhoneNumber => setNewPhoneNumber(newPhoneNumber)}
                    placeholder="Type here "
                    defaultValue={user?.phoneNumber}
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
