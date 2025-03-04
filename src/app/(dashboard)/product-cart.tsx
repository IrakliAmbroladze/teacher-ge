import Link from "next/link";
import { lusitana } from "@/components/ui/fonts";
import Image from "next/image";
import { FiEdit3 } from "react-icons/fi";
import { JSX } from "react";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  locale?: string;
}

export default function ProductCard({
  product,
}: ProductCardProps): JSX.Element {
  const title = product.title;

  return (
    <div
      key={product.id}
      className={`${lusitana.className} relative flex flex-col items-center gap-4  dark:text-white text-black `}
    >
      <div className="px-5 bg-white rounded-[45px]">
        <div className="bg-white rounded-[45px] relative group overflow-hidden h-80 flex items-center">
          <Link href={`/`} className="overflow-hidden rounded-md ">
            <Image
              width={240}
              height={135}
              src={product.images[0]}
              alt={title || "პროდუქტის სურათი"}
              className="w-auto group-hover:scale-110 group-hover:transition-all group-hover:duration-[3000ms] group-hover:ease-in-out"
              priority
              crossOrigin="anonymous"
              data-cy={`image-${product.id}`}
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h4 className="item-name font-bold">
          {title || "სათაური არ არის ხელმისაწვდომი"}
        </h4>
        <div>{product.price} ₾</div>
      </div>
      <div className="flex gap-2 absolute right-0 mr-3 mt-3">
        <Link
          data-cy={`edit-${product.id}`}
          href={`/`}
          className="px-4 py-2 bg-[#86cd82] text-white rounded-3xl shadow-sm hover:text-black transition-transform duration-150 ease-in-out active:scale-95"
        >
          <FiEdit3 />
        </Link>
      </div>
    </div>
  );
}
