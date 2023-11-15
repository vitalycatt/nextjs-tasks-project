import "./globals.css";
import classnames from "classnames";
import { Kanit } from "next/font/google";
import Link from "next/link";

const kanit = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={classnames("", [kanit.className])}>
        <header className="flex items-center justify-between pt-6 mb-6 mx-20">
          <h1 className="font-extralight italic text-2xl">
            U can put your logo here
          </h1>

          <div className="flex items-center justify-end font-medium italic text-lg">
            <Link href="/" className="mr-4">
              Home page
            </Link>

            <Link href="/tasks" className="mr-4">
              Tasks page
            </Link>

            <Link href="/about">About page</Link>
          </div>
        </header>

        <hr className="h-0 mb-5 border-b-1 border-black border-solid" />

        <main className="mx-20">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
