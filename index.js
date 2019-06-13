import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from './src/reducers';
import 'babel-polyfill';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/sagas';
import App from "./src/app/App";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById("root")
);
