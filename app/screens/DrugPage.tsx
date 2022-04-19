import React, { useState } from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View, Image, ScrollView } from "react-native";
import { Appbar, Headline, List, Divider, Button } from "react-native-paper";
import { Drug } from "./DrugCard";
import MainLayout from "./Layout";

const inputStyle: StyleProp<ViewStyle> = {
        alignSelf: 'stretch',
        margin: 20
};

const DrugDetailScreen = ({ navigation, route }: any) => {
        const [drug, setDrug] = useState<Drug>(route.params?.drug || {})

        const styles = StyleSheet.create({
            container: {
                backgroundColor: '#64b5f6',
                bottom: 10,
            },
        });

        const stylesItems = StyleSheet.create({
            container: {
                display: "flex",
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly'
            },
            buttons: {
                marginTop: "5%",
                marginBottom: "5%",
                marginLeft: '2%', 
                marginRight: '2%'
            }
        });

        return (
            <MainLayout>
                {/* <Text>{JSON.stringify(drug)}</Text> */}
            <Appbar.Header style={styles.container}>
                <Appbar.BackAction color="white" onPress={() => navigation.navigate("DrugList")}/>
                <Appbar.Content color="white" title={drug.name}/>
            </Appbar.Header>
            <ScrollView>
                <View style={stylesItems.container}>
                    <Image style={{ width: 200, height: 200}} source={drug.image}/>
                </View>
                <List.Section style={{marginLeft: '4%', marginRight: '4%'}}>
                    <List.Item
                        title="Dose"
                        description={`${drug.dose}x per day`}
                        left={props => <List.Icon {...props} icon="calendar-month-outline" />}
                    />
                    <Divider />
                    <List.Item
                        title="Quantity"
                        description={`${drug.quantity}x pills`}
                        left={props => <List.Icon {...props} icon="basket-outline" />}
                    />
                    <Divider />
                    <List.Accordion
                        style={{backgroundColor: "white"}}
                        title="Description"
                        titleStyle={{marginLeft: "4%"}}
                        left={props => <List.Icon style={{marginLeft: "0%"}} {...props} icon="clipboard-text-outline" />}>
                        <List.Item title="" description={drug.description} descriptionNumberOfLines={5}/>
                    </List.Accordion>
                </List.Section>
                <View style={[stylesItems.container, stylesItems.buttons]}>
                    <Button labelStyle={{color:'white', lineHeight: 32}} style={{alignSelf: 'center', width: 150, height: 50}} mode="contained" color="#64b5f6"
                    onPress={() => console.log('Pressed')}
                    >Add to list</Button>
                    <Button labelStyle={{color:'white', lineHeight: 32}} style={{alignSelf: 'center', width: 150, height: 50}} mode="contained" color="#64b5f6"
                    onPress={() => console.log('Pressed')}
                    >Find medicine</Button>
                </View>
                </ScrollView>
            </MainLayout>
        )
}

export default DrugDetailScreen;