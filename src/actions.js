import {C} from './constants';
import m from 'moment';

// External server, Comment this out if you are messing with the server code.
export const websocket = new WebSocket('ws:188.166.107.162:3000');

// Localhost server, uncomment this if you're messing about with the server code.
// export const websocket = new WebSocket('ws:localhost:3000');

export default {
    updateData() {
        return () => {
            websocket.send('UPDATE');
        };
    },
    selectMessage(id) {
        return (dispatch, getState) => {
            if (getState().selected.id === id) {
                dispatch({type: C.DESELECT_MESSAGE});
            } else {
                dispatch({type: C.SELECT_MESSAGE, id: id});
            }
        };
    },
    changeFilter(filter) {
        return {type: C.CHANGE_FILTER, filter};
    },
    changeOrder(order) {
        return {type: C.CHANGE_ORDER, order: order};
    },
    timeSinceUpdateTicker() {
        return (dispatch, getState) => {
            dispatch({type: C.TICK, tickerString: 'Uppdaterades ' + m(getState().data.meta.time).fromNow()});
            setInterval(() => {
                dispatch({type: C.TICK, tickerString: 'Uppdaterades ' + m(getState().data.meta.time).fromNow()});
            }, 10000);
        };
    },
    focus(id) {
        return (dispatch) => {
            dispatch({type: C.FOCUS, id: id});
        };
    }
};
