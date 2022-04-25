import React, { useState } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Button, TextInput } from "react-native-paper";
import MainLayout from "./Layout";

const inputStyle: StyleProp<ViewStyle> = {
        alignSelf: 'stretch',
        margin: 20
};

const ScheduleEditScreen = ({ navigation, route }: any) => {
        const [schedule, setItem] = useState<{ label: string, quantity: number, id?: string }>(route.params?.schedule || {})

        return <MainLayout>
                <TextInput
                        style={inputStyle}
                        label="Label"
                        value={schedule.label}
                        autoComplete="off"
                        onChangeText={(label: string) => setItem({ ...schedule, label })}
                />
                <TextInput
                        style={inputStyle}
                        label="Quantity"
                        value={`${schedule.quantity || 0}`}
                        keyboardType="numeric"
                        autoComplete="off"
                        onChangeText={(quantity: string) => setItem({ ...schedule, quantity: Number(quantity) })}
                />

                <Button mode="outlined" style={{ alignSelf: 'center' }}

                >Save</Button>
        </MainLayout>
}

export default ScheduleEditScreen;