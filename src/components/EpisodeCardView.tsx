import * as React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Icon, Header, Image, Container } from 'semantic-ui-react';
import { ICharacter } from '../models/character';
import { IEpisode } from '../models/episode';

export interface ILocationViewProps {
    item: IEpisode;
    onViewClose: () => void;
}

function EpisodeItemView(props: ILocationViewProps) {
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
                        <p>Episode: {item.episode}</p>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        {item.characters.map((character: ICharacter) => (
                            <Link className="item" style={{ display: 'inline-block', padding: '10px', color: 'black' }} to={"/character/" + character.id}>
                                <Image src={character.image} avatar />
                                <span>{character.name}</span>
                            </Link>
                        ))}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
}

export default EpisodeItemView;
