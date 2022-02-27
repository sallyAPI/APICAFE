import axios from 'axios';
import { ORDERS_FETCH } from './types';
export const ordersFetch = () =>{

    return dispatch => {
        axios.get("http://localhost:3001/orders").then(
            res => {
                dispatch({type : ORDERS_FETCH, payload : res.data});
            }
        )
    }
}

export const orderDelete = id =>{
    return dipatch => {
        axios.delete("http://localhost:3001/orders/"+id).then(res => {
            axios.get("http://localhost:3001/orders").then(
                res => {
                    dipatch({type : ORDERS_FETCH, payload : res.data});
                })
        })
    }
}