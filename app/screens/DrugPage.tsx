import React, { useState } from "react";
import { StyleProp, ViewStyle, Text } from "react-native";
import { Drug } from "./DrugCard";
import MainLayout from "./Layout";

const inputStyle: StyleProp<ViewStyle> = {
        alignSelf: 'stretch',
        margin: 20
};

const DrugDetailScreen = ({ navigation, route }: any) => {
        const [drug, setDrug] = useState<Drug>(route.params?.drug || {})

        return <MainLayout>
                <Text>{JSON.stringify(drug)}</Text>
        </MainLayout>
}

export default DrugDetailScreen;