import AsyncStorage from '@react-native-async-storage/async-storage';

export const FETCH = async options => {
  let token = await AsyncStorage.getItem(`${TOKEN}`);
  let response = {};
  let {
    url,
    method,
    body,
    userId,
    authenticate = false,
    authToken = null,
    newHeader = false,
  } = options;
  // let val = ""
  let headers = !newHeader
    ? {
        'Content-Type': 'application/json',
        // "Content-Type": "application/vnd.ms-excel",
        'Access-Control-Allow-Origin': '*',
        ...options.headers,
      }
    : {
        'Content-Type':
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Access-Control-Allow-Origin': '*',
      };

  if (authenticate) {
    headers = {...headers, Authorization: authToken ?? `${token}`};
  }

  let requestOptions = {method, headers};

  if (method === 'POST' || method === 'PUT') {
    requestOptions = {...requestOptions, body: body};
  }

  response = await fetch(url, requestOptions);

  if (response.ok) {
    return await response.json();
  }

  if (response.status === 401) {
    AsyncStorage.removeItem(`${TOKEN}`);
    // window.location.pathname = "/logout";
  }

  let errorRes = await response.json();

  const responseError = {
    type: 'Error',
    error: errorRes.error || errorRes.message || 'Something went wrong',
    success: errorRes.success || false,
    invalid: errorRes.invalid || [],
  };

  throw responseError;
};

export const TOKEN = '@token';
export const USER = 'userId';
export const ISLOGIN='false';