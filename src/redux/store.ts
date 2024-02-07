import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './root-reducer.ts';
import productSaga from './productSaga.ts';
import rootSaga from './root-saga.ts';
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware=createSagaMiddleware();
const store=configureStore(
    {
        reducer: rootReducer,
        middleware:()=>[
            sagaMiddleware
        ]
    }
);
sagaMiddleware.run(rootSaga);
export default store;

