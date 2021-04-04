import * as React from 'react';
import {
    Container,
    Tab
} from 'semantic-ui-react';
import EpisodesContainer from './EpisodesContainer';
import LocationsContainer from './LocationsContainer';

const PANES = [
    {
        menuItem: { key: 'episodes', icon: 'list layout', content: 'EPISODES' },
        render: () => <EpisodesContainer />
    },
    {
        menuItem: {
            key: 'locations',
            icon: 'location arrow',
            content: 'LOCATIONS'
        },
        render: () => <LocationsContainer />
    }
];


class HomeContainer extends React.Component {
    render() {
        return (
            <Container fluid className="pt-10 pb-10 pl-5 pr-5 sm-pl-1 sm-pr-1">
                <Tab menu={{ secondary: true, pointing: true }} panes={PANES} onTabChange={() => { }} />
            </Container>
        );
    }
}

export default HomeContainer;
