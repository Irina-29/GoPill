import React, { useState } from "react";
import MainLayout from "./Layout";
import { Appbar, Button, IconButton } from "react-native-paper";
import { View, StyleSheet, Text } from "react-native";
import { Drug } from "./DrugCard";
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

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
            width: 250,
            padding: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
        }
    });

    const number: any = drug.remainingPills

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

    const [counter, setCounter] = useState(number);

    const increment =()=>{
        if(counter+1 <= number){
            setCounter(counter+1);
            }
        }
    const decrement =()=>{
            if(counter-1 > 0){
                setCounter(counter-1);
             }
         }

    return (
        <MainLayout>
            <Appbar.Header style={styles.container}>
                <Appbar.BackAction color="white" onPress={() => navigation.navigate("Home")} />
                <Appbar.Content color="white" title="New Alarm" />
            </Appbar.Header>
            <View style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column' }}>
                <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 30, color: "black" }}>Name: <Text style={{color: "#64b5f6"}}>{drug.name}</Text></Text>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center',  marginTop: 30}}>
                    <Text style={{ fontSize: 18, marginLeft: 20, color: "black" }}>
                        Number of uses: 
                    </Text>
                    <View style={{display: "flex", flexDirection: 'row', alignItems: 'center', marginLeft: 4}}>
                            <IconButton
                            color="#64b5f6"
                            icon="minus-circle"
                            size={18}
                            onPress={() => decrement()}
                            />
                            <Text style={{ fontSize: 18, color: "black" }}>{counter <= 1 ? 1 : counter}</Text>
                            <IconButton
                                color="#64b5f6"
                                icon="plus-circle"
                                size={18}
                                onPress={() => increment()}
                            />
                        </View>
                </View>
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
                <Button labelStyle={{ color: 'white', fontSize: 20, alignContent: 'center' }}
                    style={{ alignSelf: 'center', width: 130, margin: 135 }}
                    mode="contained" color="#81FDA7" onPress={() => navigation.navigate("ScheduleList")}
                    > Save </Button>
            </View>
        </MainLayout>
    );
}

export default ScheduleAlarmScreen;