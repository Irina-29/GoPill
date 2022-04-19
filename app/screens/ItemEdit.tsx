import React, { useState } from "react";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import { Button, List, Modal, Paragraph, Portal, TextInput } from "react-native-paper";
import { Drug } from "./DrugCard";

const ListItem = ({ navigation, route }: any) => {

    const [drug, setDrug] = useState<Drug>(route.params?.drug || {})

    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    
    const containerStyle = {backgroundColor: 'white', padding: 20};

        return (
        <TouchableOpacity onPress={showModal} key={drug.id}>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <Paragraph>Example Modal.  Click outside this area to dismiss.</Paragraph>
                </Modal>
            </Portal>
            <List.Item
                style={{marginLeft:"2%"}}
                title={drug.name}
                description={`${drug.quantity}x pills`}
                left={props => <List.Icon {...props} icon="pill" />} />
        </TouchableOpacity>
        )
}

export default ListItem;