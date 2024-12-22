import type { PropsWithChildren } from "react";
import Header from "./Header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className=" bg-gradient-to-br from-background to-muted">
      <Header/>
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t backdrop-blur supports-[backdrop-filter]:bg-background/60 py-12">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>Made with 💗 by CodeWithAkki</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
