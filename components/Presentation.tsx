import { colors } from '@/utils/colors'
import React from 'react'

const Presentation = () => {
    return (
        <div style={{ backgroundColor: colors.terceary }} className='h-96 w-[50%] m-auto -mt-20 flex flex-col justify-center items-center'>
            <h2>TITULO</h2>
            <div className='border-b-1 border-black w-[20rem]'></div>
            <p>DESCRIPCION</p>
        </div>
    )
}

export default Presentation