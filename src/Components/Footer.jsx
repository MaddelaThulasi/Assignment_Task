import React from 'react'
import logo from './assets/images/logo.png'
import mail from './assets/images/mail.png'


export default function footer() {
    return (
        <div className='footer'>
            <div class="footer-2 bg-gray-100 pt-6 md:pt-12">
                <div class="container px-4 mx-auto">

                    <div class="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12">

                        <div class="footer-info lg:w-1/3 md:px-4">
                            <img src={logo} alt="" className='h-20 w-20 ml-12' />
                            <div class="mt-4">

                                <button class="bg-twitter py-2 px-4 text-gray-600 rounded ml-2 mt-2 transition-colors duration-300">
                                    <i class="fa fa-envelope" aria-hidden="true">  </i>  info@arshpvtltd.com

                                </button>
                                <button class="bg-facebook py-2 px-4 text-gray-600 rounded mt-2 transition-colors duration-300">
                                    <i class="fa fa-envelope" aria-hidden="true"> </i> +91 83105 34680
                                </button>
                            </div>
                        </div>

                        <div class="md:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0" style={{ width: "66%" }}>
                            <div class="sm:flex" style={{ marginLeft: "34px" }}>
                                <div class="sm:flex-1">
                                    <h6 class="text-base font-medium text-green-600 uppercase mb-2">ABOUT</h6>
                                    <div>
                                        <a href="#" class="text-gray-600 py-1 block hover:underline">Company</a>
                                        <a href="#" class="text-gray-600 py-1 block hover:underline">Team</a>
                                        <a href="#" class="text-gray-600 py-1 block hover:underline">Careers</a>
                                        <a href="#" class="text-gray-600 py-1 block hover:underline">Careers</a>
                                    </div>
                                </div>
                                <div class="sm:flex-1 mt-4 sm:mt-0">
                                    <h6 class="text-base font-medium text-green-600 uppercase mb-2">HELP</h6>
                                    <div>
                                        <a href="#" class="text-gray-600 py-1 block hover:underline">Blocks</a>
                                        <a href="#" class="text-gray-600 py-1 block hover:underline">Resources</a>
                                        <a href="#" class="text-gray-600 py-1 block hover:underline">Tools</a>
                                        <a href="#" class="text-gray-600 py-1 block hover:underline">Tutorials</a>

                                    </div>
                                </div>
                                <div class="sm:flex-1 mt-4 sm:mt-0">
                                    <h6 class="text-base font-medium text-green-600 uppercase mb-2">POLICY</h6>
                                    <div>
                                        <a href="#" class="text-gray-600 py-1 block hover:underline">Blocks</a>
                                        <a href="#" class="text-gray-600 py-1 block hover:underline">Resources</a>
                                        <a href="#" class="text-gray-600 py-1 block hover:underline">Tools</a>
                                        <a href="#" class="text-gray-600 py-1 block hover:underline">Tutorials</a>

                                    </div>
                                </div>

                                <div className='contact'>
                                    <div className='contact-box h-23 bg-green-600'>
                                        <h1 className='footer-text text-white m-auto text-center'>
                                            <strong>Be informed!</strong> <br />
                                            <span className=''>Sign up for newsletter</span>
                                        </h1>
                                        <p className='small-text  text-sm text-center px-10 text-white'>
                                            Donec placerat, metus sed consectetur viverra,
                                            dolor nisl egestas ligula, ac gravida turpis
                                        </p>
                                        <input
                                            type="email"
                                            class="input-box form-control block px-3 py-1.5
                                                text-base font-normal text-gray-700
                                                bg-clip-padding border border-solid border-gray-300
                                                rounded-md  transition ease-in-out  m-0  focus:text-gray-700
                                                focus:bg-white focus:border-blue-600 focus:outline-none"
                                            id="exampleEmail0"
                                            placeholder="Email input"
                                        />
                                         <button type="button" class="btn-submit inline-block px-6 py-2.5 bg-yellow-500 
                                            text-white font-medium text-xs leading-tight
                                            uppercase rounded-full shadow-md hover:bg-yellow-600
                                            hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg 
                                            focus:outline-none focus:ring-0 active:bg-yellow-700 
                                            active:shadow-lg transition duration-150 ease-in-out">Submit Now
                                        </button>

                                        {/* <div className="social-media">
                                            <i class="fas fa-instagram" aria-hidden="true"></i>
                                            <i class="fas fa-facebook" aria-hidden="true"></i>
                                            <i class="fas fa-youtube-play" aria-hidden="true"></i>
                                            <i class="fas fa-linkedin" aria-hidden="true"></i>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-4 py-4">
                    <div class="container px-4 mx-auto">

                        <div class="md:flex md:-mx-4 md:items-center">
                            <div class="md:flex-1 md:px-4 text-center md:text-left">
                                <p class="text-gray-600">Copyright © 2021 ARSH theme by AKOI. All Rights Reserved.</p>
                            </div>
                            <div class="md:flex-1 md:px-4 text-center md:text-right">
                                <a href="#" class="py-2 px-4 text-gray-600 inline-block hover:underline">Terms of Service</a>
                                 
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
