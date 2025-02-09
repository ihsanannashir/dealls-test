import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

type MenuListData = {
  title: string;
  slug: string;
};

const MENU_LIST: MenuListData[] = [
  { title: "Home", slug: "/" },
  { title: "Loker", slug: "/loker" },
  { title: "Category", slug: "/category" },
];

const NavigationBar = () => {
  const router = useRouter();

  return (
    <div className="w-full bg-brand p-4 fixed top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between text-white">
        <Link href={"/"} className="font-bold text-lg">
          Dealls<span className="text-yellow-300">!</span>
        </Link>
        <div className="flex space-x-4 font-semibold text-sm items-center">
          {MENU_LIST.map((menu, index) => (
            <Link
              key={index}
              href={menu.slug}
              className={clsx(
                "hover:text-yellow-300",
                router.pathname === menu.slug && "text-yellow-300"
              )}
            >
              {menu.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
