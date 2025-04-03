import { API_CONSTANTS } from './utils/pathContext';
import { FETCH } from './utils/fetch';
const { API, METHOD, WEATHER_API, WEATHER_API_KEY } = API_CONSTANTS;

export const GETWEATHER = async (city) => {
    let options = {
        url: `${WEATHER_API}?q=${city}&appid=${WEATHER_API_KEY}&units=metric`,
        method: METHOD.GET,
    };
    let Response = await FETCH(options);
    return Response;
};

export const GETNEWS = async () => {
    let options = {
        url: `${API}`,
        method: METHOD.GET,
    };
    let Response = await FETCH(options);
    return Response;
};
