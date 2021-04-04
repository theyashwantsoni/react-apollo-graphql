import { useQuery } from '@apollo/client';
import React from "react";
import LocationCard from '../components/LocationCard';
import { ILocation } from '../models/location';
import { LOCATIONS } from '../queries/graphqlQueries';
import {
    Grid,
    Loader,
    Header,
    Icon,
    Responsive,
    Modal,
    Pagination
} from 'semantic-ui-react';
import LocationItemView from '../components/LocationItemView';
import SearchForm from '../components/SearchForm';

function LocationsContainer() {
    const [selectedItem, setSelectedItem] = React.useState<ILocation>();
    const [searchStr, setSearchStr] = React.useState<string>('');

    const { loading, error, data } = useQuery(LOCATIONS, {
        variables: { page: 1 },
    });

    return (<>
        <Grid className="pt-2 pb-2">
            <Grid.Row>
                <Grid.Column>
                    <SearchForm
                        onChange={(txt) => setSearchStr(txt)}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column
                    mobile={16}
                    tablet={16}
                    widescreen={selectedItem ? 11 : 16}
                    computer={selectedItem ? 11 : 16}
                    largeScreen={selectedItem ? 11 : 16}
                    className="transition-width"
                >
                    {loading ? (
                        <Loader
                            active
                            inline="centered"
                            className="mt-10 mb-10"
                        >
                            Fetching results
                        </Loader>
                    ) : data ? (
                        data.length === 0 ? (
                            <Header
                                as="h3"
                                textAlign="center"
                                className="mt-10 mb-10"
                            >
                                <Icon name="warning" color="grey" />
                                No results found.
                            </Header>
                        ) : (
                            <Grid>
                                {data.locations.results.map((location: ILocation) => {
                                    const item = (<Grid.Column
                                        mobile={16}
                                        tablet={8}
                                        computer={4}
                                    >
                                        <LocationCard
                                            key={location.id}
                                            item={location}
                                            onItemSelect={setSelectedItem}
                                            isSelected={
                                                selectedItem?.id === location.id
                                            }
                                        />
                                    </Grid.Column>)
                                    if (searchStr == '') {
                                        return item;
                                    } else if (searchStr.length > 0 && location.name.toLowerCase().includes(searchStr.toLowerCase())) {
                                        return item;
                                    } else {
                                        return <></>
                                    }
                                })}
                            </Grid>
                        )
                    ) : (
                        error && (
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
                                    <p>{error}</p>
                                </Header.Subheader>
                            </Header>
                        )
                    )}
                </Grid.Column>
                {selectedItem && (
                    <>
                        <Responsive
                            as={Modal}
                            maxWidth={991}
                            centered={false}
                            open
                        >
                            <Modal.Content>
                                <LocationItemView
                                    item={selectedItem}
                                    onViewClose={() =>
                                        setSelectedItem(undefined)
                                    }
                                />
                            </Modal.Content>
                        </Responsive>
                        <Responsive
                            minWidth={992}
                            as={Grid.Column}
                            mobile={16}
                            tablet={16}
                            widescreen={5}
                            computer={5}
                            largeScreen={5}
                            className="animate-visibility pt-5 pb-5 smoke pan"
                        >
                            <LocationItemView
                                item={selectedItem}
                                onViewClose={() => setSelectedItem(undefined)}
                            />
                        </Responsive>
                    </>
                )}
            </Grid.Row>
        </Grid>
        {/* <Pagination
            boundaryRange={0}
            defaultActivePage={1}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            siblingRange={1}
            totalPages={10}
            onPageChange={(event, data) => {
                console.log(event, data);
            }}
        /> */}
    </>
    );
}
export default LocationsContainer;
