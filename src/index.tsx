import { StatusBar } from "expo-status-bar";
import React from "react";
import { IntlProvider } from "react-intl";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { connect, Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { IState } from "./redux/reducer";
import { store, persistor } from "./redux/store/store";

// const _renderApp = () => {
//   const isLoadingComplete = useCachedResources();
//   const colorScheme = useColorScheme();

//   if (!isLoadingComplete) {
//     return null;
//   } else {
//     return (
//       <SafeAreaProvider>
//         <Navigation colorScheme={colorScheme} />
//         <StatusBar />
//       </SafeAreaProvider>
//     );
//   }
// };

const _renderApp = ({ locale }) => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  return (
    <PersistGate loading={null} persistor={persistor}>
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    </PersistGate>
  );
};

const mapStateToProps = (state: IState) => ({
  locale: state.app.language,
});

const App = connect(mapStateToProps)(_renderApp);

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
