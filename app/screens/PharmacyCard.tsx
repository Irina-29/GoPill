import { Card, Paragraph, Title } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export interface Pharmacy {
    id: number
    name: string
    address: string
    hours: string
    drugPrice: number
    distance: number
}

const styles = StyleSheet.create({
    container: {
        marginTop: "3%",
        marginBottom: "3%",
        marginLeft: "3%",
        marginRight: "3%"
    },
});

const PharmacyCard = ({ pharmacy }: {pharmacy: Pharmacy}) => {
    const navigation = useNavigation();
    
    return (
        <Card key={pharmacy.id} style={styles.container} 
        onPress={() => navigation.navigate("PharmacyDetail", {pharmacy})}
        >
            <Card.Content>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <View style={{marginLeft: 5}}>
                        <Title style={{color: "#64b5f6"}}>{pharmacy.name}</Title>
                        <Paragraph>{pharmacy.address}</Paragraph>
                        <Paragraph>{pharmacy.hours}</Paragraph>
                    </View>
                    <View style={{marginRight: 5}}>
                        <Paragraph>{`${pharmacy.distance} m`}</Paragraph>
                        <Title>{`${pharmacy.drugPrice} lei`}</Title>
                    </View>
                </View>
            </Card.Content>      
        </Card>
    )
}

export default PharmacyCard;