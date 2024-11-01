/* eslint-disable @next/next/no-img-element */
"use client";

import { useGetCategories } from "@/api/getProducts";
import { CategoryType } from "@/types/category";
import { ResponseType } from "@/types/response";
import Link from "next/link";

const ChooseCategory = () => {
  const { result, loading }: ResponseType = useGetCategories();

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 text-3xl text-center py-2 lg:text-left sm:pb-8">Categorías</h3>

      <div className="grid gap-7 sm:grid-cols-3 px-2 py-4">
        {!loading &&
          result?.map((category: CategoryType) => (
            <Link
              key={category.id}
              href={`/category/${category.attributes.slug}`}
              className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              {category.attributes?.mainImage?.data?.attributes?.url ? (
                <img
                  src={`${category.attributes.mainImage.data.attributes.url}`}
                  alt={category.attributes.categoryName}
                  className="h-48 w-full object-cover transition duration-300 ease-in-out rounded-lg"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-64 bg-gray-200 rounded-lg">
                  <p className="text-center text-gray-600">No image available</p>
                </div>
              )}
              {category.attributes?.categoryName && (
                <p className="absolute w-full py-2 text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg">
                  {category.attributes.categoryName}
                </p>
              )}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ChooseCategory;
