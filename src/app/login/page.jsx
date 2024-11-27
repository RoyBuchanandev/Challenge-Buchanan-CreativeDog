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
              <span className="text-red-500 text-sm">{formik.errors.email}</span>
            )}
          </div>

          <div className="flex flex-col gap-2 relative">
            <label className="text-sm font-semibold text-gray-900">Contraseña</label>
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
              <span className="text-red-500 text-sm">{formik.errors.password}</span>
            )}
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {passwordVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12l-3 3m0 0l-3-3m3 3V9m6 6l-2-2m0 0l-2 2m2-2v-3a6 6 0 00-6-6H6a6 6 0 00-6 6v3m12 0l2-2m-2 2l-2-2"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 9l2-2m0 0l-2-2m2 2l-7-7m0 0l-7 7m7-7v16"
                  />
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
              {loading ? "Cargando..." : "Ingresar"}
            </button>
            {error && <span className="text-red-500 text-sm">{error}</span>}

            <div className="flex w-full justify-between mt-4 sm:flex-row flex-col">
              <a href="#" className="text-sm text-blue-600 hover:text-blue-700 sm:mr-4">
                Olvidé mi contraseña
              </a>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-700 sm:ml-4">
                Recuperar contraseña
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
