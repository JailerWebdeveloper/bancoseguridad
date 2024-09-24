<div className='flex flex-col '>
          <div className="flex flex-col bg-white border-2 w-96">
            <div className="font-semibold text-white flex bg-gray-800 p-2"><p>{step === 1 ? 'Usuario' : 'Contraseña'}</p></div>
            <div className=" text-gray-600 flex bg-gray-100 text-sm tracking-tight leading-tight px-4 py-2">
              <p>{step === 1 ? 'Si no tienes usuario asignado ingresa con tu documento de identidad' : 'Ingresa tu contraseña'}</p>
            </div>
            <div className='flex flex-col justify-center items-center p-4'>
              <form className='flex flex-col w-full gap-4' onSubmit={handleContinue}>
                <div className='flex justify-start items-center'>
                  <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <p className='pl-2 text-sm text-gray-700 font-semibold'>{step === 1 ? 'Ingresa con tu usuario' : 'Ingresa tu contraseña'}</p>
                </div>
                <div className="relative flex flex-col gap-2 w-full">
                  <input
                    type={step === 1 ? 'text' : 'password'}
                    className="py-2 pl-8 pr-4 w-full border border-gray-300 focus:outline-none focus:border-gray-500"
                    value={step === 1 ? username : password}
                    onChange={(e) => step === 1 ? setUsername(e.target.value) : setPassword(e.target.value)}
                  />
                  <svg className="absolute start-2 top-0 bottom-0 m-auto w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d={step === 1 ? "M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" : "M12 8a1 1 0 0 0-1 1v10H9a1 1 0 1 0 0 2h11a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-8Zm4 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"} clipRule="evenodd" />
                  </svg>
                </div>
                <button type="submit" className='bg-yellow-400 mx-auto w-3/5 py-2 mt-2'>Continuar</button>
                {step === 1 && (
                  <>
                    <a href='/' className='self-end text-gray-600 '>¿Olvidaste tu usuario?</a>
                    <a href='/' className='self-end text-gray-600 '>¿Problemas para conectarte?</a>
                  </>
                )}
              </form>
            </div>
            <div className="flex flex-col  bg-white border-2  mt-5 p-4  w-96">
            <div className='flex items-center gap-2'><svg class="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 8a1 1 0 0 0-1 1v10H9a1 1 0 1 0 0 2h11a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-8Zm4 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" clip-rule="evenodd" />
              <path fill-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v6h6V9a3 3 0 0 1 3-3h8c.35 0 .687.06 1 .17V5a2 2 0 0 0-2-2H5Zm4 10H3v2a2 2 0 0 0 2 2h4v-4Z" clip-rule="evenodd" />
            </svg>
              <p>Conoce sobre sucursal virtual de personas</p></div>
            <div className='flex items-center gap-2'><svg class="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z" clip-rule="evenodd" />
            </svg>
              <p>Conoce sobre sucursal virtual de personas</p></div>
            <div className='flex items-center gap-2'><svg class="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4a1 1 0 0 1-1 1H5m8-2h3m-3 3h3m-4 3v6m4-3H8M19 4v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1ZM8 12v6h8v-6H8Z" />
            </svg>
              <p>Reglamento sucursal virtual</p></div>
            <div className='flex items-center gap-2'><svg class="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M4 4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2v14a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2V5a1 1 0 0 1-1-1Zm5 2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9Zm5 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1Zm-5 4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H9Zm5 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1Zm-3 4a2 2 0 0 0-2 2v3h2v-3h2v3h2v-3a2 2 0 0 0-2-2h-2Z" clip-rule="evenodd"/>
</svg>
<p>Politica de privacidad</p></div>
          </div>
          </div>
        </div>