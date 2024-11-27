"use client";
import { useState } from "react";
import Image from "next/image";
import Wrapper from "@/components/Wrapper";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useFetchCategories from "./hooks/useFetchCategories";
import useFetchProducts from "./hooks/useFetchProducts";
import { useSorting } from "./hooks/useSortProducts";

export default function Home() {
  const {
    categorias,
    loading: loadingCategorias,
    error: errorCategorias,
  } = useFetchCategories();
  const {
    productos,
    loading: loadingProductos,
    error: errorProductos,
  } = useFetchProducts();

  const { sortOption, setSortOption, sortedProducts } = useSorting("default");

  if (loadingCategorias || loadingProductos) return <div>Loading...</div>;

  if (errorCategorias || errorProductos) return <div>Error loading data</div>;

  return (
    <main>
      <div className="relative text-lg text-white bg-black py-28">
        <Image
          src="/img/home-hero.jpg"
          layout="fill"
          objectFit="cover"
          alt="Foto producto: Auriculares"
          className="absolute object-cover w-full h-full opacity-80"
        />
        <Wrapper>
          <div className="space-y-8 max-w-[70ch] relative z-10 px-4 sm:px-6 md:px-8">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Conecta tu mundo con la tecnología más avanzada
            </h1>
            <div className="max-w-[40ch] max-sm:hidden">
              <p>
                Explora nuestro catálogo de tecnología y encuentra todo lo que
                necesitas para estar conectado.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="flex items-center px-6 py-3 text-base font-medium text-center text-white transition-opacity rounded-md cursor-pointer bg-brand-blue focus:opacity-80 hover:opacity-80"
              >
                Ver productos
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </a>

              <a
                href="#"
                className="flex max-sm:hidden items-center px-6 py-3 text-base font-medium text-center text-white transition-opacity border-2 border-white rounded-md cursor-pointer focus:opacity-80 hover:opacity-80"
              >
                Otro link
              </a>
            </div>
          </div>
        </Wrapper>
      </div>
      <div className="py-16">
        <Wrapper>
          <h2 className="text-5xl font-bold text-black">
            Categorías más <span className="text-brand-blue">visitadas</span>
          </h2>
          <div className="flex flex-wrap items-end justify-between gap-4 mt-4">
            <div className="max-w-[60ch]">
              <p>
                Descubre lo último en tecnología con nuestras categorías más
                populares. Encuentra lo que buscas en electrónica, informática y
                más.
              </p>
            </div>
            <a href="#" className="font-bold text-brand-blue">
              Ver todas las categorías
            </a>
          </div>
          <div className="relative mt-8">
            <Swiper
              spaceBetween={24}
              slidesPerView={4.25}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 1.25,
                },
                640: {
                  slidesPerView: 2.25,
                },
                768: {
                  slidesPerView: 3.25,
                },
                1024: {
                  slidesPerView: 4.25,
                },
              }}
            >
              {categorias.map((categoria) => (
                <SwiperSlide key={categoria.id}>
                  <CategoryCard
                    title={categoria?.name}
                    photo={categoria?.image?.url}
                    description={categoria?.description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="mt-16">
            <h2 className="text-5xl font-bold text-black">
              Productos <span className="text-brand-blue">destacados</span>
            </h2>
            <div className="flex flex-wrap items-end justify-between gap-4 mt-4">
              <div className="max-w-[60ch]">
                <p>
                  ¡Descubre nuestros productos estrella! Encuentra lo mejor en
                  tecnología y accesorios para simplificar tu vida.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2"
                  >
                    <path
                      d="M11 2H20V4H11V2ZM0 4H7V6H9V0H7V2H0V4ZM7 14H20V16H7V14ZM17 8H20V10H17V8ZM15 12V6.012H13V8H0V10H13V12H15ZM5 18V12H3V14H0V16H3V18H5Z"
                      fill="black"
                    />
                  </svg>
                  <select
                    className="max-sm:hidden pl-10 pr-4 py-2 font-bold text-black bg-white border-2 border-black rounded-md appearance-none"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="default">Ordenar por</option>
                    <option value="price-asc">Precio: Menor a Mayor</option>
                    <option value="price-desc">Precio: Mayor a Menor</option>
                    <option value="name-asc">Nombre: A-Z</option>
                    <option value="name-desc">Nombre: Z-A</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-4">
              {sortedProducts(productos)
                .slice(0, 12)
                .map((producto) => (
                  <ProductCard
                    key={producto.id}
                    title={producto.name}
                    photo={
                      producto.featureImage?.formats?.large?.url ||
                      "/img/default-product.jpg"
                    }
                    price={`$${producto.price}`}
                    category={producto.category}
                  />
                ))}
            </div>
          </div>
        </Wrapper>
        <div className="relative py-10 text-lg text-white bg-white">
          <Wrapper className="relative z-10 px-4 py-10 mx-auto sm:px-6">
            <div className="flex flex-col-reverse overflow-hidden rounded-md md:flex-row">
              <div className="space-y-8 w-full md:w-[50%] bg-black p-8 md:p-12 lg:p-20">
                <h2 className="text-3xl font-bold leading-tight lg:text-6xl">
                  La tecnología de punta está a tu alcance
                </h2>
                <div className="max-w-[40ch]">
                  <p className="text-sm sm:text-base md:text-lg">
                    Explora un catálogo de soluciones tecnológicas pensadas para
                    ti. Encuentra lo mejor para estar siempre conectado.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="flex items-center justify-center w-full px-6 py-3 text-base font-medium text-center text-white transition-opacity rounded-md cursor-pointer lg:w-auto bg-brand-blue focus:opacity-80 hover:opacity-80 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Explorar productos
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 ml-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="items-center justify-center hidden w-full px-6 py-3 text-base font-medium text-center text-white transition-opacity border-2 border-white rounded-md cursor-pointer lg:w-auto md:flex focus:opacity-80 hover:opacity-80 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Otro link
                  </a>
                </div>
              </div>
              <div className="relative w-full h-64 md:h-auto md:w-[50%]">
                <div className="absolute top-0 left-0 w-full h-full">
                  <Image
                    src="/img/banner-half.png"
                    layout="fill"
                    objectFit="cover"
                    alt="banner"
                  />
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
    </main>
  );
}
