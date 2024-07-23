import React, { useState } from 'react'

const LandingImage = () => {


    const [IsSearchTrain, SetIsSearchTrain] = useState(true)
    const [IsLogin, SetIsLogin] = useState(false)
    const [IsJoin, SetIsJoin] = useState(false)

    const headleSearchTrain = () => {
        SetIsSearchTrain(true)
        SetIsLogin(false)
        SetIsJoin(false)
    }

    const headleLoginCom = () => {
        SetIsSearchTrain(false)
        SetIsLogin(true)
        SetIsJoin(false)
    }

    const headleJoin = () => {
        SetIsSearchTrain(false)
        SetIsLogin(false)
        SetIsJoin(true)
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
                            <button onClick={headleJoin}className="md:my-0 my-2 bg-none text-white py-4 px-4 border-2 border-white w-full mx-2 rounded duration-500 hover:bg-white hover:text-blue-500">Registation</button>
                        </div>
                    </div>

                        {
                            (() => {
                                if(IsSearchTrain === true && IsLogin === false && IsJoin === false){
                                    return (
                                        <div className={`${ IsSearchTrain ? 'translate-x-0' : 'translate-x-full' } bg-white py-4 md:px-36 px-8 rounded md:h-auto md:pb-16`}>
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
                                else if(IsSearchTrain === false && IsLogin === true && IsJoin === false){
                                    return (
                                        <div className={`${ IsLogin ? 'translate-x-0' : 'translate-x-full' } bg-white py-4 md:px-36 px-8 rounded md:h-auto md:pb-16`}>
                                            <div className="text-center text-xl font-semibold text-gray-500 mt-8 mb-6">Select Train</div>
                                            <hr />
                                            <form className=''>
                                                <div className="my-2 md:mx-8">
                                                    <label htmlFor="" className=''>Email : </label>
                                                    <input type="email" name="" id="" className="w-full h-12 pl-2 rounded bg-gray-200" required placeholder='Enter Email Address' />
                                                </div>
                                                <div className="my-2 md:mx-8">
                                                    <label htmlFor="" className=''>Password : </label>
                                                    <input type="password" name="" id="" className="w-full h-12 pl-2 rounded bg-gray-200" required placeholder='Enter Password' />
                                                </div>
                                                <div className="my-2 md:mx-8">
                                                    <button type='submit' className='mt-8 font-semibold w-full py-4 px-8 rounded bg-blue-500 text-white shadow-md duration-500 hover:bg-blue-600'>SignIn</button>
                                                </div>
                                            </form>
                                        </div>
                                    )
                                }
                                else if(IsSearchTrain === false && IsLogin === false && IsJoin === true){
                                    return (
                                        <div className={`${ IsJoin ? 'translate-x-0' : 'translate-x-full' } bg-white py-4 md:px-36 px-8 rounded md:h-auto md:pb-16`}>
                                            <div className="text-center text-xl font-semibold text-gray-500 mt-8 mb-6">Select Train</div>
                                            <hr />
                                            <form className=''>
                                                <div className="my-2 md:mx-8">
                                                    <label htmlFor="" className=''>Email : </label>
                                                    <input type="email" name="" id="" className="w-full h-12 pl-2 rounded bg-gray-200" required placeholder='Enter Email Address' />
                                                </div>
                                                <div className="my-2 md:mx-8">
                                                    <label htmlFor="" className=''>Password : </label>
                                                    <input type="password" name="" id="" className="w-full h-12 pl-2 rounded bg-gray-200" required placeholder='Enter Password' />
                                                </div>
                                                <div className="my-2 md:mx-8">
                                                    <button type='submit' className='mt-8 font-semibold w-full py-4 px-8 rounded bg-blue-500 text-white shadow-md duration-500 hover:bg-blue-600'>SignIn</button>
                                                </div>
                                            </form>
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