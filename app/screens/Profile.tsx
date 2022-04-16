import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainLayout from "./Layout";
import { Button, Paragraph } from "react-native-paper";

const Profile = ({ navigation }: any) => {
    return (
        <MainLayout>
            <Paragraph>Profile Page</Paragraph>
            <Button icon="camera" mode="contained" onPress={() => navigation.navigate('Prescription')}>
                Press me
            </Button>
        </MainLayout>
    );
}

export default Profile;