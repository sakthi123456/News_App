
export const FETCH = async options => {
    let response = {};
    let {
      url,
      method,
      body,
      newHeader = false,
    } = options;
    let headers = !newHeader
      ? {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          ...options.headers,
        }
      : {
          'Content-Type':
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          'Access-Control-Allow-Origin': '*',
        };
  
    let requestOptions = {method, headers};
  
    if (method === 'POST' || method === 'PUT') {
      requestOptions = {...requestOptions, body: body};
    }
  
    response = await fetch(url, requestOptions);
  
    if (response.ok) {
      return await response.json();
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
  
  