import React from 'react'

const LandingImage = () => {
  return (
    <div className='mt-[-60px] bg-[url(https://wallpapercave.com/wp/wp5682288.jpg)] bg-cover bg-center min-h-screen'>
        <div className="">
            <div className="md:grid grid-cols-2 gap-4">
                <div className=""></div>
                <div className="py-40 md:mr-24 md:ml-4 md:mx-0 mx-4 ">
                    <div className="bg-white py-4 px-8 rounded">
                        <div className="text-center text-xl font-semibold text-gray-500">Select Train</div>
                        <hr />

                        <div className="">
                            <form method="post">
                                <div className="md:grid grid-cols-2 gap-4 mt-4">
                                    <div className="">
                                        <select name="" id="" className='w-full h-12 bg-gray-200 rounded pl-4' required>
                                            <option value="">To</option>
                                            <option value="">Colombo</option>
                                            <option value="">Colombo</option>
                                            <option value="">Colombo</option>
                                            <option value="">Colombo</option>
                                            <option value="">Colombo</option>
                                        </select>
                                    </div>
                                    <div className="">
                                        <input type="date" name="" id="" className='w-full h-12 bg-gray-200 rounded pl-4' required/>
                                    </div>
                                    <div className="">
                                        <select name="" id="" className='w-full h-12 bg-gray-200 rounded pl-4' required>
                                            <option value="">From</option>
                                            <option value="">Colombo</option>
                                            <option value="">Colombo</option>
                                            <option value="">Colombo</option>
                                            <option value="">Colombo</option>
                                            <option value="">Colombo</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingImage