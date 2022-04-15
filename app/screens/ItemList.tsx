import React, { useEffect, useState } from "react";
import MainLayout from "./Layout";
import { Button, Card, DataTable, Paragraph, Title } from "react-native-paper";

const ItemListScreen = ({ navigation }: any) => {

        const [data, setData] = useState<{ id?: string, label: string, quantity: number }[]>([]);
        /**
         https://callstack.github.io/react-native-paper/data-table.html
         */
        return <MainLayout>
                <Card>
                        <Card.Title title="Card Title" subtitle="Card Subtitle"/>
                        <Card.Content>
                                <Title>Card title</Title>
                                <Paragraph>Card content</Paragraph>
                        </Card.Content>
                        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                        <Card.Actions>
                                <Button>Cancel</Button>
                                <Button>Ok</Button>
                        </Card.Actions>
                </Card>
        </MainLayout >
}

export default ItemListScreen;