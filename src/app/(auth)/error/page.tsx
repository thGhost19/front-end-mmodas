'use client'

import Link from "next/link";

export default function ErrorPage() {

    return (
        <div
            className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 px-4">
            <div
                className="w-full max-w-lg sm:max-w-md md:max-w-sm lg:max-w-sm bg-white shadow-lg rounded-lg p-6 text-center">
                <h1 className="text-3xl font-bold text-red-600">Erro!</h1>
                <p className="mt-2 text-gray-700 pb-4">Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.</p>
                <Link
                    href="/login"
                    className="mt-4 w-full bg-purple-700 text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition">
                    Voltar ao Login
                </Link>
            </div>
        </div>
    );
}