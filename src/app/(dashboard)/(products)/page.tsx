import ProductList from "./product-list";
import { Search } from "./search-and-sort";
import Image from "next/image";
import { JSX } from "react";

interface ProductsProps {
  params: { locale: string };
}

export default async function Products({
  params,
}: ProductsProps): Promise<JSX.Element> {
  const { locale } = params;
  return (
    <div className="flex-grow px-6 md:overflow-y-auto">
      <div className="relative w-full max-h-56">
        <Image
          src="/banner.jpg"
          height={450}
          width={450}
          alt="logo"
          className="w-full h-56 object-cover hidden sm:block rounded-md"
        />

        <div className="absolute inset-0 flex justify-center items-end lg:p-44">
          <Search locale={locale} />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row mt-4">
        <div className="w-full max-w-[1110px] mx-auto dark:text-white mt animate-rise delay-1000">
          <ProductList locale={locale} />
        </div>
      </div>
    </div>
  );
}
