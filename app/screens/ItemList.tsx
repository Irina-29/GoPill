import React, { useEffect, useState } from "react";
import MainLayout from "./Layout";
import { Divider, Headline, List, FAB, Modal, Portal, Provider, Button, Paragraph, Appbar} from "react-native-paper";
import { View, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

const ItemListScreen = ({ navigation }: any) => {

    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#64b5f6',
            bottom: 10,
        },
    });

    return (
        <><Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                <Paragraph>Example Modal.  Click outside this area to dismiss.</Paragraph>
            </Modal>
        </Portal>
        <MainLayout>
            <Appbar.Header style={styles.container}>
                <Appbar.BackAction color="white" onPress={() => navigation.navigate("Home")}/>
                <Appbar.Content color="white" title="My List"/>
            </Appbar.Header>
            <View style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column' }}>
                {/* <Headline style={{ textAlign: "center", lineHeight: 80, color: 'white', backgroundColor: '#64b5f6' }}>My List</Headline> */}
                    <ScrollView>
                        <List.Section>
                            <TouchableOpacity onPress={showModal}>
                            <List.Item
                                style={{marginLeft:"2%"}}
                                title="Paracetamol"
                                description="3x pills"
                                left={props => <List.Icon {...props} icon="pill" />} />
                            </TouchableOpacity>
                            <Divider />
                            <TouchableOpacity onPress={showModal}>
                            <List.Item
                                style={{marginLeft:"2%"}}
                                title="Vitamin C"
                                description="27x pills"
                                left={props => <List.Icon {...props} icon="pill" />} />
                            </TouchableOpacity>
                            <Divider />
                            <TouchableOpacity onPress={showModal}>
                            <List.Item
                                style={{marginLeft:"2%"}}
                                title="Vitamin D3"
                                description="28x pills"
                                left={props => <List.Icon {...props} icon="pill" />} />
                            </TouchableOpacity>
                            <Divider />
                            <TouchableOpacity onPress={showModal}>
                            <List.Item
                                style={{marginLeft:"2%"}}
                                title="Nurofen"
                                description="39x pills"
                                left={props => <List.Icon {...props} icon="pill" />} />
                            </TouchableOpacity>
                            <Divider />
                            <TouchableOpacity onPress={showModal}>
                            <List.Item
                                style={{marginLeft:"2%"}}
                                title="Aspirin"
                                description="50x pills"
                                left={props => <List.Icon {...props} icon="pill" />} />
                            </TouchableOpacity>
                            <Divider />
                            <TouchableOpacity onPress={showModal}>
                            <List.Item
                                style={{marginLeft:"2%"}}
                                title="Calcivid"
                                description="100x pills"
                                left={props => <List.Icon {...props} icon="pill" />} />
                            </TouchableOpacity>

                            <Divider />
                            <TouchableOpacity onPress={showModal}>
                            <List.Item
                                style={{marginLeft:"2%"}}
                                title="Vitamin D3"
                                description="28x pills"
                                left={props => <List.Icon {...props} icon="pill" />} />
                            </TouchableOpacity>
                            <Divider />
                            <TouchableOpacity onPress={showModal}>
                            <List.Item
                                style={{marginLeft:"2%"}}
                                title="Paracetamol"
                                description="12x pills"
                                left={props => <List.Icon {...props} icon="pill" />} />
                            </TouchableOpacity>
                            <Divider />
                            <TouchableOpacity onPress={showModal}>
                            <List.Item
                                style={{marginLeft:"2%"}}
                                title="Nurofen"
                                description="39x pills"
                                left={props => <List.Icon {...props} icon="pill" />} />
                            </TouchableOpacity>
                            <Divider />
                            <TouchableOpacity onPress={showModal}>
                            <List.Item
                                style={{marginLeft:"2%"}}
                                title="Vitamin D3"
                                description="28x pills"
                                left={props => <List.Icon {...props} icon="pill" />} />
                            </TouchableOpacity>
                            
                        </List.Section>
                    </ScrollView>
                    <FAB
                        style={{ width: "16%", top: 452, left: 272, backgroundColor: "#64b5f6", position: 'absolute' }}
                        icon="plus"
                        color="white"
                        onPress={() => navigation.navigate("DrugsList")} />
            </View>
        </MainLayout></>
    );
}

export default ItemListScreen;