"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import LoginHeader from "@/components/LoginHeader";
import useAuth from "../hooks/useAuth";

export default function LoginPage() {
  const { login, loading, error } = useAuth();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("El email no es válido")
        .required("El email es obligatorio"),
      password: Yup.string().required("La contraseña es obligatoria"),
    }),
    onSubmit: async (values) => {
      const { email, password } = values;
      const result = await login(email, password);

      if (result) {
        alert("Inicio de sesión exitoso");
        console.log("Usuario autenticado:", result.user);
      }
    },
  });

  return (
    <div className="flex flex-col min-h-screen">
      <LoginHeader />
      <div className="flex flex-col gap-6 px-4 sm:px-0 items-center justify-center flex-grow mb-2 sm:mb-4">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Ingresar</h1>
          <p className="text-lg font-medium text-gray-500">
            Ingresá con tu email y contraseña
          </p>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-6 bg-white shadow-md rounded p-6 w-full max-w-lg mb-4 sm:mb-0"
        >
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-900">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Ejemplo: usuario@correo.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full h-12 px-4 border ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded focus:outline-none focus:ring-2 ${
                formik.touched.email && formik.errors.email
                  ? "focus:ring-red-500"
                  : "focus:ring-gray-500"
              }`}
            />
            {formik.touched.email && formik.errors.email && (
              <span className="text-red-500 text-sm">
                {formik.errors.email}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 relative">
            <label className="text-sm font-semibold text-gray-900">
              Contraseña
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder="Ingresá tu contraseña"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full h-12 px-4 border ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded focus:outline-none focus:ring-2 ${
                formik.touched.password && formik.errors.password
                  ? "focus:ring-red-500"
                  : "focus:ring-gray-500"
              }`}
            />
            {formik.touched.password && formik.errors.password && (
              <span className="text-red-500 text-sm">
                {formik.errors.password}
              </span>
            )}
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-4 top-[70%] transform -translate-y-1/2 text-gray-500 "
            >
              {passwordVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-eye"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-eye-slash"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                  <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                </svg>
              )}
            </button>
          </div>

          <div className="flex flex-col items-center gap-4 mt-6">
            <button
              type="submit"
              className="flex items-center justify-center w-full h-12 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
              disabled={loading}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              {loading ? "Cargando..." : "Ingresar"}
            </button>
            {error && <span className="text-red-500 text-sm">{error}</span>}

            <div className="flex w-full justify-between mt-4 sm:flex-row flex-col text-center sm:text-left">
  <a
    href="#"
    className="text-sm text-black hover:text-blue-700 sm:mr-4"
  >
    ¿No tenés cuenta? <span className="text-blue-600">Ingresá acá</span>
  </a>
  
  <a
    href="#"
    className="text-sm text-black hover:text-blue-700 sm:ml-4"
  >
    Olvidé mi contraseña
  </a>
</div>

          </div>
        </form>
      </div>
    </div>
  );
}
