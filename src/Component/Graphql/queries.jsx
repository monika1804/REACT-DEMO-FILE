import { gql } from '@apollo/client';

export const GET_EXCHANGE_QUERY = gql `
query GetExchangeRates {
  rates(currency: "USD") {
    currency
    rate
  name
  }
}
`

