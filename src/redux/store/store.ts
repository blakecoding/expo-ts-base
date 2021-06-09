import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import Reactotron from "../../../reactotron-config";

import reducer from "../reducer";
import rootSaga from "../saga";

// Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: "root",
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Blacklist (Don't Save Specific Reducers)
  whitelist: ["app", "auth"],
  timeout: 0,
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, reducer);

// Apply middleware
const sagaMiddleware = createSagaMiddleware();
const enhancers = __DEV__
  ? compose(applyMiddleware(sagaMiddleware), Reactotron.createEnhancer())
  : applyMiddleware(sagaMiddleware);
const store = createStore(persistedReducer, enhancers);
// const store = createStore(
//   persistedReducer, // @ts-ignore
//   (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
//     // @ts-ignore
//     (window as any).__REDUX_DEVTOOLS_EXTENSION__()
// );
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
