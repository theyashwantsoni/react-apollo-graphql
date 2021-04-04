import React from 'react';
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

import { TOAST_CONFIG } from './constants';
import HomeContainer from './containers/HomeContainer';
import Navbar from './components/common/Navbar';
import CharacterContainer from './containers/CharacterContainer';
import EpisodesContainer from './containers/EpisodesContainer';
import LocationsContainer from './containers/LocationsContainer';

import './css/helper.css';
import './App.css';

class App extends React.Component<{}> {
    constructor(props: {}) {
        super(props);
        toast.configure(TOAST_CONFIG);
    }

    componentDidMount() {
        toast.info('Welcome to FOOBAR!');
    }

    render() {
        return (
            <HashRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={HomeContainer} />
                    {/* <Route exact path="/episodes" component={EpisodesContainer} /> */}
                    {/* <Route exact path="/locations" component={LocationsContainer} /> */}
                    <Route exact path="/character/:id" component={CharacterContainer} />

                    <Redirect to="/" />
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
