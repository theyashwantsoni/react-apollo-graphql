import { useQuery } from '@apollo/client';
import * as React from 'react';
import { useHistory } from 'react-router-dom';

import {
    Container,
    Header,
    Divider,
    Placeholder,
    Button,
    Icon,
    Card,
    Image,
    Grid
} from 'semantic-ui-react';
import { CHARACTER } from '../queries/graphqlQueries';

type Id = {
    id: number
}

function ChracterComponent(props: Id) {

    const { loading, error, data } = useQuery(CHARACTER, {
        variables: { id: props.id },
    });
    const history = useHistory();

    return <>
        {loading ? (
            <Container className="pt-10 pb-10">
                <Header as="h1" size="huge" className="pt-2">
                    Loading...
                    </Header>
                <Divider className="pb-2" />
                <Placeholder>
                    <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Paragraph>
                </Placeholder>
                <Button as="a" className="mt-2" onClick={() => history.goBack()}>
                    Back
               </Button>
            </Container>
        ) : data ? (
            <Container className="pt-10 pb-10">
                <Header as="h1" size="huge" className="pt-2">
                    {data.character.name}
                </Header>
                <Divider className="pb-2" />

                <Grid celled>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Image as="profile" src={data.character.image} />
                        </Grid.Column>
                        <Grid.Column width={13}>
                            <p>Status : {data.character.status}</p>
                            <p>Species : {data.character.species}</p>
                            <p>Gender : {data.character.gender}</p>
                            <p>Last Known Location : {data.character.location.name}</p>
                            <p>Origin : {data.character.origin.name}</p>
                            <p>Total Episodes : {data.character.episode.length}</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Button as="a" className="mt-2" onClick={() => history.goBack()}>
                    Back
                </Button>
            </Container>
        ) :
            error ? (
                <Header
                    as="h2"
                    icon
                    textAlign="center"
                    className="mt-10 mb-10"
                >
                    <Icon name="warning circle" color="grey" />
                    OOPS
                    <Header.Subheader>
                        Error occurred while fetching results.
                    </Header.Subheader>
                </Header>
            ) : <></>
        }
    </>
}


class CharacterContainer extends React.Component<any> {
    state = {

    }

    componentDidMount() {

    }

    render() {
        const { match: { params } } = this.props;
        return <ChracterComponent id={params.id} />
    }
}

export default CharacterContainer;
