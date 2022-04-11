import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainLayout from "./Layout";
import { Paragraph } from "react-native-paper";

const Profile = ({ navigation }: any) => {
    return (
        <MainLayout>
            <Paragraph>Profile Page</Paragraph>
       </MainLayout>
    );
}

export default Profile;