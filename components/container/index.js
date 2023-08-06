import { SearchNormal } from 'iconsax-react'
import React from 'react'

function Container({ daily, forecast }) {
    return (
        <div className='flex flex-col w-3/5 bg-white p-8 rounded-md'>
            <div className='flex w-full bg-white items-center rounded-md outline outline-primary-400'>
                <input className='flex w-full bg-white placeholder:italic py-4 pl-4 rounded-md placeholder:text-gray-700 focus:placeholder:text-gray-400 focus:outline-none' placeholder='Search city..' type='text' name='search' />
                <SearchNormal color='white' size={56} className='px-4 bg-primary-400'/>
            </div>
            <div className='flex mt-8 flex-row gap-10 '>
                <div className='flex bg-secondary w-2/5 h-[400px] rounded-md'>
                    SOL
                </div>
                <div className='flex bg-third w-3/5 h-[400px] rounded-md'>
                    SAĞ
                </div>
            </div>

        </div>
    )
}

export default Container