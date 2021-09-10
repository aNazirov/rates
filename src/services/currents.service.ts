import axios from 'axios'
import { currencies, apiKey, app_id } from '@_data/keys';

export const getCurrentsService = () => {
  return axios
    .get('http://openexchangerates.org/api/latest.json', {
      params: {
        app_id,
        currencies: currencies.join(',')
      }
    })
    .then((res: any) => res.data.rates);
};


export const convertService = (convert: string) => {
  return axios
    .get('https://free.currconv.com/api/v7/convert', {
      params: {
        apiKey,
        q: convert,
        compact: 'ultra'
      }
    })
    .then((res: any) => res.data[convert]);
};