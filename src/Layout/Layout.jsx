"use client";

import {Footer, Navbar} from "@/components";
import {Client, HydrationProvider} from "react-hydration-provider";
import {Provider} from "react-redux";
import store, {persistor} from "@/store";
import "../localization/i18n";
import {PersistGate} from "redux-persist/integration/react";

const Layout = ({children}) => {
    return (
        <HydrationProvider>
            <Client>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <Navbar/>
                        {children}
                        <Footer/>
                    </PersistGate>
                </Provider>
            </Client>
        </HydrationProvider>

    );
};

export default Layout;