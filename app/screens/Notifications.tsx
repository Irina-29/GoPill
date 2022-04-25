import React, { useEffect, useState } from "react";
import { Appbar, Divider, Switch } from "react-native-paper";
import { StyleSheet, View, Text } from "react-native";
import { Picker } from '@react-native-picker/picker';
import MainLayout from "./Layout";
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
    input: {
        flex: 1,
        height: 40,
        margin: 3.5,
        width: 250,
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

});

const NotificationsForApp = ({ navigation }: any) => {

    const [user, setUser] = useState<{ name: string, email: string }>();
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    const [selectedValue, setSelectedValue] = useState("java");

    useEffect(() => {
        const fetchUser = async () => {
            const storedUser = await AsyncStorage.getItem('@user');
            if (!!storedUser) {
                setUser(JSON.parse(storedUser));
            }
        }
        fetchUser();
    }, [])
    
    return (
        <MainLayout>
            <Appbar.Header style={{ backgroundColor: '#64b5f6', bottom: 10 }}>
                <Appbar.BackAction color="white" onPress={() => navigation.navigate("Settings")} />
                <Appbar.Content color={'white'} title={`Notifications`} />
            </Appbar.Header>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 17, marginLeft: 15, marginTop: 18, color: "black", marginBottom: 18 }}>Vibration     </Text>
                    <Switch trackColor={{ false: "#767577", true: "#64b5f6" }} thumbColor={isSwitchOn ? "#64b5f6" : "#f4f3f4"} value={isSwitchOn} onValueChange={onToggleSwitch} />
                </View>
                <Divider />
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 17, marginLeft: 15, marginTop: 18, color: "black" }}>Sound    </Text>
                    <Picker
                        selectedValue={selectedValue}
                        style={styles.input}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="None" value="none" style={{ backgroundColor: "#98D1FF", borderWidth: 5, borderColor: "grey"}} />
                        <Picker.Item label="Aurora" value="aurora" />
                        <Picker.Item label="Calm" value="calm" />
                        <Picker.Item label="Chaos" value="chaos" />
                        <Picker.Item label="Music Box" value="mb" />
                        <Picker.Item label="Nudge" value="nudge" />
                        <Picker.Item label="Sweet" value="sweet" />
                        <Picker.Item label="Whistle" value="whistle" />
                    </Picker>
                </View>
                <Divider />
            </View>
        </MainLayout>
    );
}

export default NotificationsForApp;