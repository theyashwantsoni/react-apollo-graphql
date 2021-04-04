import * as React from 'react';
import { Card, Item, Label } from 'semantic-ui-react';
import { IEpisode } from '../models/episode';


export interface IEpisodeCardProps {
    item: IEpisode;
    onItemSelect: (selectedItem: IEpisode) => void;
    isSelected: boolean;
}

function EpisodeCard(props: IEpisodeCardProps) {
    return (
        <Card
            onClick={() => props.onItemSelect(props.item)}
            {...(props.isSelected && { color: 'blue' })}
            link
            fluid
        >
            <Card.Content>
                <Card.Header>{props.item.name}</Card.Header>
                <Card.Meta>Episode: {props.item.episode}</Card.Meta>
                <Card.Description>{props.item.characters.length} characters</Card.Description>
            </Card.Content>
        </Card>
    );
}

export default EpisodeCard;
