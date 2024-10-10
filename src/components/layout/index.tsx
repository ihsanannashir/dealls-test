import Footer from "../footer";
import NavigationBar from "../navigation-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavigationBar />
      <main className="max-w-6xl sm:mx-auto mt-20 mb-10 px-4">{children}</main>
      <Footer />
    </>
  );
}
