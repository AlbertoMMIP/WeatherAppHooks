
import {base_url,api_key, base_url_forecast} from './../constants/api_url';

export const getUrlWeatherByCity = city =>{
    return `${base_url}?q=${city}&appid=${api_key}`;
}

export const getUrlForeCastByCity = city =>{
    return `${base_url_forecast}?q=${city}&appid=${api_key}`;
}
