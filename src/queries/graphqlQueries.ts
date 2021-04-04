import { gql } from '@apollo/client';

export const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

export const EPISODES = gql`
    query Fetch_Episodes($page:Int){
        episodes(page:$page){
            info{
                count,
                prev,
                next,
                pages
            }
            results{
                id,
                name,
                episode,
                characters{
                    id,
                    name,
                    image
                }
            }
        }
    }  
  `;

export const LOCATIONS = gql`
    query Fetch_Locations($page:Int){
        locations(page: $page){
            info{
                count
            }
            results{
                id,
                name,
                type,
                dimension,
                residents{
                    id,
                    name,
                    gender,
                    image,
                    species
                }
            }
        }
    }
`;

export const CHARACTER = gql`
query Fetch_Character($id:ID!){
    character(id : $id){
      id,
      name,
      image,
      species,
      status,
      gender,
      location{
        name
      },
      origin{
        name,
        dimension
      },
      episode{
        episode
      },
      location{
        name
      }
    }
  }
`;