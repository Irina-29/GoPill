import React, { useEffect, useState } from "react";
import MainLayout from "./Layout";
import { Appbar, Avatar, Button, Divider, Paragraph } from "react-native-paper";
import { AsyncStorage, StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle, TextInput, Text } from "react-native";
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
    const [user, setUser] = useState<{ name: string, email: string, password: string }>();

    useEffect(() => {
        const fetchUser = async () => {
            const storedUser = await AsyncStorage.getItem('@user');
            if (!!storedUser) {
                setUser(JSON.parse(storedUser));
            }
        }
        fetchUser();
    }, [])
    const inputStyle: StyleProp<ViewStyle> = {
        alignSelf: 'stretch',
        margin: 20
    };
    const [text, onChangeText] = React.useState("Ana");
    const [number, onChangeNumber] = React.useState(null);
    return (
        <MainLayout>
            <Appbar.Header style={{ backgroundColor: '#64b5f6', bottom: 10 }}>
                <Appbar.BackAction color="white" onPress={() => navigation.navigate("Profile")} />
                <Appbar.Content color={'white'} title={`Account`} />
            </Appbar.Header>
            <Text style={{ marginLeft: 15, marginTop: 12, color: "grey" }}>Name</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                defaultValue={user?.name}
            />
            <Text style={{ marginLeft: 15, color: "grey" }}>Email</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}

                defaultValue={user?.email}
            />
            <Text style={{ marginLeft: 15, color: "grey" }}>Password</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}

                defaultValue={user?.password}
            />
            <Text style={{ marginLeft: 15, color: "grey" }}>Payment</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}

                defaultValue="ANa"
            />
            {/* <TextInput
                mode="outlined"
                label="Outlined input"
                placeholder="Type something"
                right={<TextInput.Affix text="/100" />}
            > */}
        </MainLayout>
    );
}

export default AccountProfile;

function setEmail(email: string) {
    throw new Error("Function not implemented.");
}


function setPassword(password: string): void {
    throw new Error("Function not implemented.");
}


function setHidePassword(arg0: boolean): void {
    throw new Error("Function not implemented.");
}
