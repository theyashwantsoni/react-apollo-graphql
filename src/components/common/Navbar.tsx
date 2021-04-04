import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu, Icon, Responsive,  } from 'semantic-ui-react';
import { about } from '../../constants';

const Navbar = () => {
    return (
        <Menu fixed="top">
            <Container fluid>
                <Responsive as={Menu.Item} {...Responsive.onlyComputer}>
                    <Icon name="code" color="blue" />
                    <strong>Rick n' Morty</strong>
                </Responsive>
                {/* <Link className="item" to="/episodes">
                    <Icon name="list layout" />
                    EPISODES
                </Link>
                <Link className="item" to="/locations">
                    <Icon name="location arrow" />
                    LOCATIONS
                </Link> */}
                <Responsive
                    as={Menu.Item}
                    position="right"
                    {...Responsive.onlyComputer}
                >
                    <Icon name="info"/>
                    <a href={about}>About</a>
                </Responsive>
            </Container>
        </Menu>
    );
};

export default Navbar;
