import Image from 'next/image'
import React from 'react'
function Header() {
    return (
        <div>
            <div>
                <Image src={'/logo.svg'} width={40} height={40} />
                <h2 className='font-bold text-lg'>AI Room Design</h2>
            </div>

        </div>
    )
}

export default Header
