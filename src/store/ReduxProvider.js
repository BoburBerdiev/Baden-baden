"use client";
import {Provider} from "react-redux"
import "../localization/i18n";
import {HydrationProvider, Client} from "react-hydration-provider";

// import {QueryClientProvider, QueryClient} from "react-query";
import {PersistGate} from "redux-persist/integration/react";
import store, {persistor} from "@/store";

export default function ReduxProvider({children}) {
  return <HydrationProvider>
    <Client>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </Client>
  </HydrationProvider>
      ;
};