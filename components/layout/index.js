import Link from "next/link";
import classnames from "classnames";

const Layout = ({ children, pathname }) => {
  return (
    <>
      <header className="flex items-center justify-between pt-6 mb-6 mx-20">
        <h1 className="font-extralight italic text-2xl">
          U can put your logo here
        </h1>

        <div className="flex items-center justify-end font-medium italic text-lg">
          <Link
            href="/"
            className={classnames("mr-4", {
              underline: pathname === "/",
            })}
          >
            Home page
          </Link>

          <Link
            href="/tasks"
            className={classnames("mr-4", {
              underline: pathname === "/tasks",
            })}
          >
            Tasks page
          </Link>

          <Link
            href="/about"
            className={classnames({
              underline: pathname === "/about",
            })}
          >
            About page
          </Link>
        </div>
      </header>

      <hr className="h-0 mb-5 border-b-1 border-black border-solid" />

      {children}
    </>
  );
};

export default Layout;
