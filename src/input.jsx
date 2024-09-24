const Inputt = ({children,placeholder}) => {
    return ( 
        <div class="flex min-h-screen min-w-full justify-center items-center">
            <div class="w-[250px] relative">
                <input
                    class="peer w-full p-4 pt-6 pl-10 pr-4 bg-inherit border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed border-gray-500 focus:border-purple-500"
                    type="text"
                    placeholder=""
                    name="username"
                    id="username"
                />
                <label
                    class="absolute text-gray-500 text-base duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-purple-500"
                    for="username"
                >
                    {placeholder}
                </label>
               <div className="absolute top-6 left-4">{children}
               </div>
            </div>
        </div>
    );
}

export default Inputt;