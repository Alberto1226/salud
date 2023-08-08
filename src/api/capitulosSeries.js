import {
    ENDPOINTListarCapitulosSeries,
    ENDPOINTRegistrarCapitulosSeries,
    ENDPOINTModificarCapitulosSeries,
    ENDPOINTEliminarCapitulosSeries
} from './endpoints';
import axios from 'axios';
import { API_HOST } from '../utils/constants';
//import {getTokenApi} from ".auth"

export async function listarCapitulosSeries(serie) {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'

        }
    };
    return await axios.get(API_HOST + ENDPOINTListarCapitulosSeries + `/?serie=${serie}`, config);
}

export async function registraCapitulosSeries(data) {
    //console.log(data)

    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            //Authorization: `Bearer ${getTokenApi()}`
        }
    };

    return await axios.post(API_HOST + ENDPOINTRegistrarCapitulosSeries, data, config);
}

export async function actualizarCapitulosSeries(id, data) {

    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            //Authorization: `Bearer ${getTokenApi()}`
        }
    };

    return await axios.put(API_HOST + ENDPOINTModificarCapitulosSeries + `/${id}`, data, config);
}

export async function eliminarCapitulosSeries(id, data) {

    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            //Authorization: `Bearer ${getTokenApi()}`
        }
    };

    return await axios.delete(API_HOST + ENDPOINTEliminarCapitulosSeries + `/${id}`, data, config);
}