import React, { useEffect, useState } from "react";
import MainLayout from "./Layout";
import { Appbar, Button, Divider, TextInput } from "react-native-paper";
import { ScrollView, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Drug } from "./DrugCard";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const ScheduleStack = createNativeStackNavigator();

const ScheduleAlarmScreen = ({ navigation, route }: any) => {

    const [drug, setDrug] = useState<Drug>(route.params?.drug || {})
        
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#64b5f6',
            bottom: 10,
        },
        input: {
            flex: 1,
            height: 40,
            marginLeft: 40,
            marginRight: 20,
            marginTop: 15,
            //borderWidth: 1,
            width: 250,
            padding: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            //borderColor: "grey"
        }
    });

    const number = drug.remainingPills
    const numberUses = JSON.stringify(number);

    const [selectedValue, setSelectedValue] = useState("java");

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date'as any);
    const [show, setShow] = useState(false);

    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode: any) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const [counter, setCounter] = useState(1);

    // const increment =()=>{
    //     if(counter+1 <= 12){
    //         setCounter(counter+1);
    //         }
    //     }
    // const decrement =()=>{
    //         if(counter-1 > 1){
    //             setCounter(counter-1);
    //          }
    //      }

    return (
        <MainLayout>
            <Appbar.Header style={styles.container}>
                <Appbar.BackAction color="white" onPress={() => navigation.navigate("Home")} />
                <Appbar.Content color="white" title="New Alarm" />
            </Appbar.Header>
            <View style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column' }}>
                <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 30, color: "black" }}>Name: <Text style={{color: "#64b5f6"}}>{drug.name}</Text></Text>
                <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 30, color: "black" }}>Number of uses: <Text style={{color: "#64b5f6"}}>{numberUses}</Text></Text>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 25, color: "black" }}>First administration:</Text>
                    <Button style={{marginTop: 25}} onPress={showDatepicker}>Select date</Button>
                </View>
                {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                onChange={onChange}
                />)}
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 25, color: "black" }}>Alarm time:</Text>
                    <Button style={{marginTop: 25}} onPress={showTimepicker}>Select time</Button>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 30, color: "black" }}>Alarm frequency:</Text>
                    <Picker
                        selectedValue={selectedValue}
                        style={styles.input}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item style={{fontSize: 18}} label="daily" value="daily" />
                        <Picker.Item style={{fontSize: 18}} label="weekly" value="weekly" />
                        <Picker.Item style={{fontSize: 18}} label="monthly" value="monthly" />
                    </Picker>
                </View>
                {/* <View style={{display: 'flex', flexDirection: 'row', marginLeft: "4%"}}>
                    <TouchableOpacity onPress={() => decrement()}>
                        <Text>-</Text>
                    </TouchableOpacity>
                    <Text>{counter <= 1 ? 1 : counter}</Text>
                    <TouchableOpacity onPress={() => increment()}>
                        <Text>+</Text>
                    </TouchableOpacity>
                </View> */}
                <Button labelStyle={{ color: 'white', fontSize: 20, alignContent: 'center' }}
                    style={{ alignSelf: 'center', width: 130, margin: 150 }}
                    mode="contained" color="#81FDA7" onPress={() => navigation.navigate("ScheduleList")}
                    > Save </Button>
            </View>
        </MainLayout>
    );
}

export default ScheduleAlarmScreen;