import React, { useState } from 'react'

const LandingImage = () => {


    const [IsSearchTrain, SetIsSearchTrain] = useState(true)
    const [IsLogin, SetIsLogin] = useState(false)
    const [IsJoin, SetIsJoin] = useState(false)

    const headleSearchTrain = () => {
        SetIsSearchTrain(true)
        SetIsLogin(false)
    }

    const headleLoginCom = () => {
        SetIsSearchTrain(false)
        SetIsLogin(true)
    }

  return (
    <div className='mt-[-60px] bg-[url(https://wallpapercave.com/wp/wp5682288.jpg)] bg-cover bg-center min-h-screen'>
        <div className="">
            <div className="md:grid grid-cols-2 gap-4">
                <div className=""></div>
                <div className="py-40 md:mr-24 md:ml-4 md:mx-0 mx-4 ">
                    <div className="">
                        <div className="md:flex my-4 justify-between md:mx-16 mx-4">
                            <button onClick={headleSearchTrain} className="md:my-0 my-2 bg-none text-white py-4 px-4 border-2 border-white w-full mx-2 rounded duration-500 hover:bg-white hover:text-blue-500">Search Train</button>
                            <button onClick={headleLoginCom} className="md:my-0 my-2 bg-none text-white py-4 px-4 border-2 border-white w-full mx-2 rounded duration-500 hover:bg-white hover:text-blue-500">Login</button>
                            <button className="md:my-0 my-2 bg-none text-white py-4 px-4 border-2 border-white w-full mx-2 rounded duration-500 hover:bg-white hover:text-blue-500">Registation</button>
                        </div>
                    </div>

                        {
                            (() => {
                                if(IsSearchTrain === true && IsLogin === false && IsJoin === false){
                                    return (
                                        <div className={`${ IsSearchTrain ? 'translate-x-0' : 'translate-x-full' } bg-white py-4 px-36 rounded md:h-[400px] transform transition-transform duration-300 ease-in-out`}>
                                        <div className="text-center text-xl font-semibold text-gray-500 mt-8 mb-6">Select Train</div>
                                        <hr />
                                        <div className="">
                                        <form method="post">
                                            <div className="md:grid grid-cols-2 gap-4 mt-4">
                                                <div className="md:my-0 my-2">
                                                    <select name="" id="" className='w-full h-12 bg-gray-200 rounded pl-4' required>
                                                        <option value="">To</option>
                                                        <option value="">Colombo</option>
                                                        <option value="">Colombo</option>
                                                        <option value="">Colombo</option>
                                                        <option value="">Colombo</option>
                                                        <option value="">Colombo</option>
                                                    </select>
                                                </div>
                                                <div className="md:my-0 my-2">
                                                    <input type="date" name="" id="" className='w-full h-12 bg-gray-200 rounded pl-4' required/>
                                                </div>
                                                <div className="md:my-0 my-2">
                                                    <select name="" id="" className='w-full h-12 bg-gray-200 rounded pl-4' required>
                                                        <option value="">From</option>
                                                        <option value="">Colombo</option>
                                                        <option value="">Colombo</option>
                                                        <option value="">Colombo</option>
                                                        <option value="">Colombo</option>
                                                        <option value="">Colombo</option>
                                                    </select>
                                                </div>
                                                <div className="md:my-0 my-2">
                                                    <select name="" id="" className='w-full h-12 bg-gray-200 rounded pl-4' required>
                                                        <option value="">Class</option>
                                                        <option value="">Colombo</option>
                                                        <option value="">Colombo</option>
                                                        <option value="">Colombo</option>
                                                        <option value="">Colombo</option>
                                                        <option value="">Colombo</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="my-8">
                                                <button className="bg-blue-500 text-white py-4 px-8 rounded w-full">Search Train</button>
                                            </div>
                                        </form>
                                    </div>
                                    </div>
                                    )
                                }

                            })()
                        }
                    </div>
                </div>
            </div>
        </div>
  )
}

export default LandingImage