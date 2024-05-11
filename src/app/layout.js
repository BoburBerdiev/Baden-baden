import "./globals.css";

import "react-datepicker/dist/react-datepicker.css";
import { Jost, Forum} from "next/font/google";
import Layout from "@/Layout/Layout";

const jost = Jost({
        subsets: ["latin", "cyrillic"],
        weight: ['100', '200','400' ,'500' , "600" , "700" , '800' ],
        variable: "--font-jost",
        display:'swap'

    }
);
const forum = Forum({
    subsets: ["latin", "cyrillic"],
    weight: '400',
    variable: "--font-forum",
    display:'swap'
});


export const metadata = {
    title: "Baden-Baden Hotel",
    description: "Create memories to last a lifetime",
    icons:'/image/icon.png'
};
export default function RootLayout({children}) {
    return (
        <html lang="en" className={`font-jost ${jost.variable} ${forum.variable}`}>
        <body>
        <Layout>
            {children}
        </Layout>
        </body>
        </html>
    );
}
