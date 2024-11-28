import React from "react";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 z-10 w-full px-8 py-4 bg-white flex items-center justify-between">
      <div className="flex items-center space-x-2 lg:hidden ">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12H21"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 6H21"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 18H21"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="lg:flex-grow flex sm:justify-center lg:justify-start">
        <img
          src="/img/logo.svg"
          alt="Commerce Logo"
          className="w-full max-w-[130px]"
        />
      </div>

      <nav className="flex-grow flex  gap-6 max-sm:hidden">
        <a
          href="#"
          className="text-base font-medium text-black hover:text-opacity-80 font-raleway"
        >
          Inicio
        </a>
        <a
          href="#"
          className="text-base font-medium text-black hover:text-opacity-80 font-raleway"
        >
          Productos
        </a>
        <a
          href="#"
          className="text-base font-medium text-black hover:text-opacity-80 font-raleway"
        >
          Nosotros
        </a>
        <a
          href="#"
          className="text-base font-medium text-black hover:text-opacity-80 font-raleway"
        >
          Contacto
        </a>
      </nav>

      <div className="flex items-center">
        <a href="#">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 17L21 12L16 7"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 12H9"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Header;
