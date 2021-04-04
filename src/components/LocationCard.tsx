import * as React from 'react';
import { Card, Item, Label } from 'semantic-ui-react';
import { ILocation } from '../models/location';


export interface ILocationCardProps {
    item: ILocation;
    onItemSelect: (selectedItem: ILocation) => void;
    isSelected: boolean;
}

function LocationCard(props: ILocationCardProps) {
    return (
        <Card
            onClick={() => props.onItemSelect(props.item)}
            {...(props.isSelected && { color: 'blue' })}
            link
            fluid
        >
            <Card.Content>
                <Card.Header>{props.item.name}</Card.Header>
                <Card.Meta>Dimension: {props.item.dimension}</Card.Meta>
                <Card.Description>{props.item.residents.length} residents</Card.Description>
            </Card.Content>
            <Card.Content extra>Type: {props.item.type}</Card.Content>
        </Card>
    );
}

export default LocationCard;
