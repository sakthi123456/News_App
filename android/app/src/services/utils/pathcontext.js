const API_URL = {
    LOCAL: 'http://192.168.1.112:5000/api1',
    
};

const DEFAULT_PATHS = {
    GET: 'get/all',
    GETONE: 'get/one',
    GETSINGLE: 'get',
    CREATE: 'create',
    UPDATE: 'update',
    GETFIELD: 'getField',
};

export const API_CONSTANTS = {
    API: process.env.DEVELOPMENT_VERSION || API_URL['LOCAL'],
    // IMAGES_URL: process.env.DEVELOPMENT_VERSION || API_URL['IMAGES_URL'],
    METHOD: {
         GET: 'GET',
         POST: 'POST',
         PUT: 'PUT',
    },
    DEFAULT_PATHS: DEFAULT_PATHS,
};
