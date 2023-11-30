"use client";

import "./globals.css";
import classnames from "classnames";
import { Kanit } from "next/font/google";
import { Layout } from "@/components";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { allReducers } from "../reducers";
import { usePathname } from "next/navigation";

const kanit = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const RootLayout = ({ children }) => {
  const pathname = usePathname();
  const store = createStore(allReducers);

  return (
    <html lang="en">
      <body className={classnames("", [kanit.className])}>
        <Provider store={store}>
          <Layout pathname={pathname}>
            <main className="mx-20">{children}</main>
          </Layout>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
