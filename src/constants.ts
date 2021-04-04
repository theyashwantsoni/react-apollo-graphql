import { toast } from 'react-toastify';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const TOAST_CONFIG = {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 5000,
    draggable: false
};

export const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
});

export const about = "https://theyashwantsoni.github.io"