import { Header } from "../components/shared/index";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <main className="md:h-[calc(100vh-6rem)]">{children}</main>
    </div>
  );
};

export default Layout;
