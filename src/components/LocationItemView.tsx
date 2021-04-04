import * as React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Icon, Header, Image, Container } from 'semantic-ui-react';
import { ICharacter } from '../models/character';
import { ILocation } from '../models/location';

export interface ILocationViewProps {
    item: ILocation;
    onViewClose: () => void;
}

function LocationItemView(props: ILocationViewProps) {
    const { item } = props;

    return (
        <Container>
            <Grid className="pl-2 pr-2">
                <Grid.Row>
                    <Grid.Column>
                        <Header as="h3" floated="left" className="m-0 p-0">
                            {item.name}
                        </Header>
                        <Header
                            as="h4"
                            floated="right"
                            textAlign="right"
                            className="m-0 p-0"
                        >
                            <Icon
                                name="times circle outline"
                                onClick={props.onViewClose}
                            />
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <p>Dimension: {item.dimension}</p>
                        <p>Type: {item.type}</p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        {item.residents.map((resident: ICharacter) => (
                            <Link className="item" style={{ display: 'inline-block', padding: '10px', color: 'black' }} to={"/character/" + resident.id}>
                                <Image src={resident.image} avatar />
                                <span>{resident.name}</span>
                            </Link>
                        ))}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
}

export default LocationItemView;

const styles = {
    avatarItem: {
        display: 'inline-block',
        padding: '10px'
    },
    avatarImage: {
        width: "40px"
    }
}