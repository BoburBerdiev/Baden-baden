"use client";

import {Footer, Navbar} from "@/components";
import {Client, HydrationProvider} from "react-hydration-provider";
import {Provider} from "react-redux";
import store, {persistor} from "@/store";
import "../localization/i18n";
import {PersistGate} from "redux-persist/integration/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/grid';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import {usePathname} from "next/navigation";

const Layout = ({children}) => {
    const router=usePathname()
    return (
        <HydrationProvider>
            <Client>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <Navbar/>
                        <main className={`min-h-screen ${router==='/' ? "": "mt-[72px] md:mt-[125px]" } `}>
                        {children}
                        </main>
                        <Footer/>
                    </PersistGate>
                </Provider>
            </Client>
        </HydrationProvider>

    );
};

export default Layout;