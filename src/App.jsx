import React, { useState } from 'react';
import './App.css';

function App() {
  

  return (
    <div className="bg-gray-100 min-h-screen mx-auto w-4/5">
      <div className="p-4">
        <div className="container mx-auto flex items-center justify-between">
          <img src="./logo.png" className='h-12' alt="logo" />
          <p className='text-gray-700'>Lunes 23 de Septiembre de 2024 2:51:55 PM</p>
        </div>
      </div>

      <div className="p-4 bg-gray-800 text-white">
        <div className="container mx-auto flex items-center justify-between">
          <p>Inicio de sesión</p>
        </div>
      </div>

      <div className="container mx-auto flex justify-between items-center p-10">
        <div className='flex flex-col '>
          <div className="flex flex-col bg-white border-2 w-96">
            <div className="font-semibold text-white flex bg-gray-800 p-2"><p>Credenciales</p></div>
            <div className=" text-gray-600 flex bg-gray-100 text-sm tracking-tight leading-tight px-4 py-2">
              <p>Ingresa tu usuario y contraseña para iniciar sesión</p>
            </div>
            <div className='flex flex-col justify-center items-center p-4'>
              <form className='flex flex-col w-full gap-4' id="form1">
                <div className='flex flex-col gap-4 w-full'>
                  {/* Input de Usuario */}
                  <div className="relative flex flex-col gap-2 w-full">
                    <input
                      type="text"
                      className="py-2 pl-8 pr-4 w-full border border-gray-300 focus:outline-none focus:border-gray-500"
                      placeholder="Ingresa tu usuario"
                    />
                    <svg className="absolute start-2 top-0 bottom-0 m-auto w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clipRule="evenodd" />
                    </svg>
                  </div>

                  {/* Input de Contraseña */}
              
                </div>
                <div className="relative flex flex-col gap-2 w-full">
                    <input
                      type="password"
                      className="py-2 pl-8 pr-4 w-full border border-gray-300 focus:outline-none focus:border-gray-500"
                      placeholder="Ingresa tu contraseña"
                    />
                    <svg className="absolute start-2 top-0 bottom-0 m-auto w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 8a1 1 0 0 0-1 1v10H9a1 1 0 1 0 0 2h11a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-8Zm4 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" clipRule="evenodd" />
                    </svg>
                  </div>

                {/* Botón de Continuar */}
                <button type="submit" form="form1" formTarget='form1' className='bg-yellow-400 mx-auto w-3/5 py-2 mt-2'>Continuar</button>
              </form>
            </div>
          </div>

          {/* Manteniendo la sección adicional */}
          <div className="flex flex-col bg-white border-2 mt-5 p-4 w-96">
            <div className='flex items-center gap-2'>
              <svg className="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 8a1 1 0 0 0-1 1v10H9a1 1 0 1 0 0 2h11a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-8Zm4 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M5 3a2 2 0 0 0-2 2v6h6V9a3 3 0 0 1 3-3h8c.35 0 .687.06 1 .17V5a2 2 0 0 0-2-2H5Zm4 10H3v2a2 2 0 0 0 2 2h4v-4Z" clipRule="evenodd" />
              </svg>
              <p>Conoce sobre sucursal virtual de personas</p>
            </div>
            {/* Puedes seguir añadiendo las otras opciones tal como las tenías */}
          </div>
        </div>

        {/* Manteniendo la sección promocional */}
        <div className="bg-yellow-400 p-4 rounded-lg flex items-center">
          <div>
            <h2 className="text-lg font-bold">Bajamos la tasa para que tengas tu casa</h2>
            <p>Aquí y ahora, finánciala desde el 10% Efectivo Anual.</p>
          </div>
          <img src="./img1.jpeg" alt="Promo" className="size-48 ml-4" />
        </div>
      </div>
    </div>
  );
}

export default App;
