import {createStore as cS} from 'redux';
//let reduxInitActionType = "@@redux/INIT";
const fulxInit = 'INIT';
const Actions = {};
if (window.reduxDispatchMap === undefined) {
    window.reduxDispatchMap = {};
}

/*eslint-disable no-param-reassign*/
const createReducerFunctionFromConfig = function(config){
    const reducerFunction = (state, action) => {
        let actionHandler = config[action.type];
        const initActionRegex = new RegExp(/^@@redux\/INIT.*/);
        if (!actionHandler && initActionRegex.test(action.type)) {
            actionHandler = config[fulxInit];
            state = {};
        }
        if (actionHandler !== undefined && typeof actionHandler === 'function') {
            if (action.args){
                actionHandler(state, ...action.args);
            } else {
                actionHandler(state);
            }
            return state;
        } else {
            return null;
        }
    };
    return reducerFunction;
};

const createStore = function(configObj){
    const reduxStore = cS(createReducerFunctionFromConfig(configObj));
    Object.keys(configObj).forEach((v) => {
        Actions[v] = v;
        window.reduxDispatchMap[v] = reduxStore;
    });
    const storeDispatch = reduxStore.dispatch;
    reduxStore.dispatch = (...args)=>{
        storeDispatch({type: args[0],
            args: args.slice(1, args.length)});
    };
    reduxStore.onChange = reduxStore.subscribe;
    const veteranGetState = reduxStore.getState;
    reduxStore.getState = (noClone)=>{
        if (noClone === true){
            return veteranGetState();
        }
        return veteranGetState() ? JSON.parse(JSON.stringify(veteranGetState())) : {};

    };
    return reduxStore;
};

const dispatcher = {
    publish: (...args) => {
        if (window.reduxDispatchMap) {
            const store = window.reduxDispatchMap[args[0]];
            if (store) {
                store.dispatch(...args);
            } else if (window.globalEventDispatchMap && window.globalEventDispatchMap[args[0]]){
                window.globalEventDispatchMap[args[0]](...args);
            } else {
                console.log('Unknown event dispatched');
            }
        }
    },
    subscribe: (action, callback) => {
        if (window.globalEventDispatchMap === undefined){
            window.globalEventDispatchMap = {};
        }
        window.globalEventDispatchMap[action] = callback;
    }
};
export {
    createStore,
    dispatcher,
    Actions
};
