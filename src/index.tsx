import { StatusBar } from "expo-status-bar";
import React from "react";
import { IntlProvider } from "react-intl";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { connect, Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { store, persistor, RootState } from "./redux/store/store";
import messages from "./locales";
import { flattenMessages } from "./utils/flattenMessages";

const _renderApp = (props: any) => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  return (
    <PersistGate loading={null} persistor={persistor}>
      <IntlProvider
        locale={props.locale}
        messages={flattenMessages(messages[props.locale])}
      >
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </IntlProvider>
    </PersistGate>
  );
};

const mapStateToProps = (state: RootState) => ({
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
