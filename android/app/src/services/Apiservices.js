import {API_CONSTANTS} from './utils/pathcontext';
import {FETCH, TOKEN} from './utils/fetch';
const {API, METHOD} = API_CONSTANTS;
// import AsyncStorage from '@react-native-async-storage/async-storage';

export const LOGIN = async params => {
  let res;
  let url = `${API}/user/login`;
  const {body} = params;

  res = await fetch(url, {
    method: METHOD.POST,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  return res.json();
};

export const GETLISTS = async () => {
  let options = {
    url: `${API}/chat/fetchchat`,
    method: METHOD.GET,
    authenticate: true,
  };
  let Response = await FETCH(options);

  return Response;
};