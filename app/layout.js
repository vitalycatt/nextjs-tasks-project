import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import classnames from "classnames";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={classnames("mx-20", [inter.className])}>
        <header className="flex items-center justify-between pt-6 mb-6">
          <div>U can put here our logo</div>

          <div className="flex items-center justify-end">
            <Link href="/" className="mr-4">
              Home page
            </Link>

            <Link href="/tasks" className="mr-4">
              Tasks page
            </Link>

            <Link href="/about">About page</Link>
          </div>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
