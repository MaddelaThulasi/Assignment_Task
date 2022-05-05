import React from 'react'
import bg from './assets/images/HeaderBg.jpg'

function Header() {
    return (
        <>


            <div class="bg-header grid place-items-center">
                <h2 className='heading-text'>Make Space For</h2>
                <h3 className='header-small'>Nature</h3>

               
            </div>

            <div className='bg'>
                {/* <img src={bg} alt="" /> */}
            </div>

        </>
    )
}

export default Header
