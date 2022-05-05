import React from 'react';
import logo from './assets/images/logo.png';
import Footer from './Footer';


function Menu() {
    return (
        <div className='menu-items'>
            {/* 1 menu */}
            <section class="container mx-auto py-12 mt-20">

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 col-gap-12 gap-x-20 row-gap-16">
                    <div class="menu ml-9 border-2 border-gray-300 rounded-lg shadow-lg">
                        <div class="flex items-center justify-around mt-6 mb-3">
                            <span class="font-bold text-lg text-gray-400">
                                <svg width="25" height="17" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 3.16878C12.2699 -0.173259 6.53364 -0.052007 2.94915 3.53249C-0.760841 7.24247 -0.760841 13.2575 2.94915 16.9674L13.7608 27.7792C14.9974 29.0158 17.0026 29.0158 18.2391 27.7792L29.0508 16.9674C32.7608 13.2575 32.7608 7.24247 29.0508 3.53249C25.4663 -0.052007 19.73 -0.173259 16 3.16878ZM14.145 5.77165L14.8804 6.50706C15.4987 7.12539 16.5013 7.12539 17.1196 6.50706L17.855 5.77165C20.3284 3.29834 24.3383 3.29834 26.8116 5.77165C29.285 8.24498 29.285 12.255 26.8116 14.7283L16 25.5401L5.18831 14.7283C2.715 12.255 2.715 8.24498 5.18831 5.77165C7.66164 3.29834 11.6717 3.29834 14.145 5.77165Z" fill="#81BB3F" />
                                </svg>
                            </span>

                            <button
                                class="add-to-cart px-2 rounded-full flex items-center bg-green-600 rounded-full">

                                <span class="ml-2 text-white">5 Kg</span>
                            </button>
                        </div>
                        <img class="h-40 mb-5 mx-auto mt-3" src="https://5.imimg.com/data5/SELLER/Default/2021/3/RC/KQ/FZ/18802101/hariyali-agro-1-500x500.jpg" alt="" />
                        <div class="text-center">
                            <h2 class="mb-2 text-lg text-green-600">Cocopeat</h2>
                            <h3 className='text-4xl'><sup className='coust text-sm'>₹</sup>799</h3>
                        </div>

                        <button className='btn-primary'>
                            <i class="fa fa-cart-arrow-down" aria-hidden="true">  Add to cart</i>
                        </button>

                    </div>

                    {/* 2 */}

                    <div class="menu ml-16 border-2 border-gray-300 rounded-lg shadow-lg" style={{ marginLeft: "80px" }}>
                        <div class="flex items-center justify-around mt-6 mb-3">
                            <span class="font-bold text-lg text-gray-400">
                                <svg width="25" height="17" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 3.16878C12.2699 -0.173259 6.53364 -0.052007 2.94915 3.53249C-0.760841 7.24247 -0.760841 13.2575 2.94915 16.9674L13.7608 27.7792C14.9974 29.0158 17.0026 29.0158 18.2391 27.7792L29.0508 16.9674C32.7608 13.2575 32.7608 7.24247 29.0508 3.53249C25.4663 -0.052007 19.73 -0.173259 16 3.16878ZM14.145 5.77165L14.8804 6.50706C15.4987 7.12539 16.5013 7.12539 17.1196 6.50706L17.855 5.77165C20.3284 3.29834 24.3383 3.29834 26.8116 5.77165C29.285 8.24498 29.285 12.255 26.8116 14.7283L16 25.5401L5.18831 14.7283C2.715 12.255 2.715 8.24498 5.18831 5.77165C7.66164 3.29834 11.6717 3.29834 14.145 5.77165Z" fill="#81BB3F" />
                                </svg>
                            </span>

                            <button
                                class="add-to-cart px-2 rounded-full flex items-center bg-green-600 rounded-full">

                                <span class="ml-2 text-white">5 Kg</span>
                            </button>
                        </div>
                        <img class="h-40 mb-5 mx-auto mt-3" src="https://5.imimg.com/data5/SELLER/Default/2021/3/RC/KQ/FZ/18802101/hariyali-agro-1-500x500.jpg" alt="" />
                        <div class="text-center">
                            <h2 class="mb-2 text-lg text-green-600">Cocopeat</h2>
                            <h3 className='text-4xl'><sup className='coust text-sm'>₹</sup>799</h3>
                        </div>

                        <button className='btn-primary'>
                            <i class="fa fa-cart-arrow-down" aria-hidden="true">  Add to cart</i>
                        </button>

                    </div>

                    {/* 3 */}

                    <div class="menu ml-20 border-2 border-gray-300 rounded-lg shadow-lg" style={{ marginLeft: "120px" }}>
                        <div class="flex items-center justify-around mt-6 mb-3">
                            <span class="font-bold text-lg text-gray-400">
                                <svg width="25" height="17" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 3.16878C12.2699 -0.173259 6.53364 -0.052007 2.94915 3.53249C-0.760841 7.24247 -0.760841 13.2575 2.94915 16.9674L13.7608 27.7792C14.9974 29.0158 17.0026 29.0158 18.2391 27.7792L29.0508 16.9674C32.7608 13.2575 32.7608 7.24247 29.0508 3.53249C25.4663 -0.052007 19.73 -0.173259 16 3.16878ZM14.145 5.77165L14.8804 6.50706C15.4987 7.12539 16.5013 7.12539 17.1196 6.50706L17.855 5.77165C20.3284 3.29834 24.3383 3.29834 26.8116 5.77165C29.285 8.24498 29.285 12.255 26.8116 14.7283L16 25.5401L5.18831 14.7283C2.715 12.255 2.715 8.24498 5.18831 5.77165C7.66164 3.29834 11.6717 3.29834 14.145 5.77165Z" fill="#81BB3F" />
                                </svg>
                            </span>

                            <button
                                class="add-to-cart px-2 rounded-full flex items-center bg-green-600 rounded-full">

                                <span class="ml-2 text-white">5 Kg</span>
                            </button>
                        </div>
                        <img class="h-40 mb-5 mx-auto mt-3" src="https://5.imimg.com/data5/SELLER/Default/2021/3/RC/KQ/FZ/18802101/hariyali-agro-1-500x500.jpg" alt="" />
                        <div class="text-center">
                            <h2 class="mb-2 text-lg text-green-600">Cocopeat</h2>
                            <h3 className='text-4xl'><sup className='coust text-sm'>₹</sup>799</h3>
                        </div>

                        <button className='btn-primary'>
                            <i class="fa fa-cart-arrow-down" aria-hidden="true">  Add to cart</i>
                        </button>

                    </div>
                </div>
            </section>

            {/* 2 menu */}
            <section class="container mx-auto py-10 mt-10">

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 col-gap-12 gap-x-20 row-gap-16">
                    <div class="menu ml-9 border-2 border-gray-300 rounded-lg shadow-lg">
                        <div class="flex items-center justify-around mt-6 mb-3">
                            <span class="font-bold text-lg text-gray-400">
                                <svg width="25" height="17" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 3.16878C12.2699 -0.173259 6.53364 -0.052007 2.94915 3.53249C-0.760841 7.24247 -0.760841 13.2575 2.94915 16.9674L13.7608 27.7792C14.9974 29.0158 17.0026 29.0158 18.2391 27.7792L29.0508 16.9674C32.7608 13.2575 32.7608 7.24247 29.0508 3.53249C25.4663 -0.052007 19.73 -0.173259 16 3.16878ZM14.145 5.77165L14.8804 6.50706C15.4987 7.12539 16.5013 7.12539 17.1196 6.50706L17.855 5.77165C20.3284 3.29834 24.3383 3.29834 26.8116 5.77165C29.285 8.24498 29.285 12.255 26.8116 14.7283L16 25.5401L5.18831 14.7283C2.715 12.255 2.715 8.24498 5.18831 5.77165C7.66164 3.29834 11.6717 3.29834 14.145 5.77165Z" fill="#81BB3F" />
                                </svg>
                            </span>

                            <button
                                class="add-to-cart px-2 rounded-full flex items-center bg-green-600 rounded-full">

                                <span class="ml-2 text-white">5 Kg</span>
                            </button>
                        </div>
                        <img class="h-40 mb-5 mx-auto mt-3" src="https://5.imimg.com/data5/SELLER/Default/2021/3/RC/KQ/FZ/18802101/hariyali-agro-1-500x500.jpg" alt="" />
                        <div class="text-center">
                            <h2 class="mb-2 text-lg text-green-600">Cocopeat</h2>
                            <h3 className='text-4xl'><sup className='coust text-sm'>₹</sup>799</h3>
                        </div>

                        <button className='btn-primary'>
                            <i class="fa fa-cart-arrow-down" aria-hidden="true">  Add to cart</i>
                        </button>

                    </div>

                    {/* 2 */}

                    <div class="menu ml-16 border-2 border-gray-300 rounded-lg shadow-lg" style={{ marginLeft: "80px" }}>
                        <div class="flex items-center justify-around mt-6 mb-3">
                            <span class="font-bold text-lg text-gray-400">
                                <svg width="25" height="17" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 3.16878C12.2699 -0.173259 6.53364 -0.052007 2.94915 3.53249C-0.760841 7.24247 -0.760841 13.2575 2.94915 16.9674L13.7608 27.7792C14.9974 29.0158 17.0026 29.0158 18.2391 27.7792L29.0508 16.9674C32.7608 13.2575 32.7608 7.24247 29.0508 3.53249C25.4663 -0.052007 19.73 -0.173259 16 3.16878ZM14.145 5.77165L14.8804 6.50706C15.4987 7.12539 16.5013 7.12539 17.1196 6.50706L17.855 5.77165C20.3284 3.29834 24.3383 3.29834 26.8116 5.77165C29.285 8.24498 29.285 12.255 26.8116 14.7283L16 25.5401L5.18831 14.7283C2.715 12.255 2.715 8.24498 5.18831 5.77165C7.66164 3.29834 11.6717 3.29834 14.145 5.77165Z" fill="#81BB3F" />
                                </svg>
                            </span>

                            <button
                                class="add-to-cart px-2 rounded-full flex items-center bg-green-600 rounded-full">

                                <span class="ml-2 text-white">5 Kg</span>
                            </button>
                        </div>
                        <img class="h-40 mb-5 mx-auto mt-3" src="https://5.imimg.com/data5/SELLER/Default/2021/3/RC/KQ/FZ/18802101/hariyali-agro-1-500x500.jpg" alt="" />
                        <div class="text-center">
                            <h2 class="mb-2 text-lg text-green-600">Cocopeat</h2>
                            <h3 className='text-4xl'><sup className='coust text-sm'>₹</sup>799</h3>
                        </div>

                        <button className='btn-primary'>
                            <i class="fa fa-cart-arrow-down" aria-hidden="true">  Add to cart</i>
                        </button>

                    </div>

                    {/* 3 */}

                    <div class="menu ml-20 border-2 border-gray-300 rounded-lg shadow-lg" style={{ marginLeft: "120px" }}>
                        <div class="flex items-center justify-around mt-6 mb-3">
                            <span class="font-bold text-lg text-gray-400">
                                <svg width="25" height="17" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 3.16878C12.2699 -0.173259 6.53364 -0.052007 2.94915 3.53249C-0.760841 7.24247 -0.760841 13.2575 2.94915 16.9674L13.7608 27.7792C14.9974 29.0158 17.0026 29.0158 18.2391 27.7792L29.0508 16.9674C32.7608 13.2575 32.7608 7.24247 29.0508 3.53249C25.4663 -0.052007 19.73 -0.173259 16 3.16878ZM14.145 5.77165L14.8804 6.50706C15.4987 7.12539 16.5013 7.12539 17.1196 6.50706L17.855 5.77165C20.3284 3.29834 24.3383 3.29834 26.8116 5.77165C29.285 8.24498 29.285 12.255 26.8116 14.7283L16 25.5401L5.18831 14.7283C2.715 12.255 2.715 8.24498 5.18831 5.77165C7.66164 3.29834 11.6717 3.29834 14.145 5.77165Z" fill="#81BB3F" />
                                </svg>
                            </span>

                            <button
                                class="add-to-cart px-2 rounded-full flex items-center bg-green-600 rounded-full">

                                <span class="ml-2 text-white">5 Kg</span>
                            </button>
                        </div>
                        <img class="h-40 mb-5 mx-auto mt-3" src="https://5.imimg.com/data5/SELLER/Default/2021/3/RC/KQ/FZ/18802101/hariyali-agro-1-500x500.jpg" alt="" />
                        <div class="text-center">
                            <h2 class="mb-2 text-lg text-green-600">Cocopeat</h2>
                            <h3 className='text-4xl'><sup className='coust text-sm'>₹</sup>799</h3>
                        </div>

                        <button className='btn-primary'>
                            <i class="fa fa-cart-arrow-down" aria-hidden="true">  Add to cart</i>
                        </button>

                    </div>
                </div>
            </section>

            {/* 3 menu */}
            <section class="container mx-auto py-10 mt-10">

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 col-gap-12 gap-x-20 row-gap-16">
                    <div class="menu ml-9 border-2 border-gray-300 rounded-lg shadow-lg">
                        <div class="flex items-center justify-around mt-6 mb-3">
                            <span class="font-bold text-lg text-gray-400">
                                <svg width="25" height="17" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 3.16878C12.2699 -0.173259 6.53364 -0.052007 2.94915 3.53249C-0.760841 7.24247 -0.760841 13.2575 2.94915 16.9674L13.7608 27.7792C14.9974 29.0158 17.0026 29.0158 18.2391 27.7792L29.0508 16.9674C32.7608 13.2575 32.7608 7.24247 29.0508 3.53249C25.4663 -0.052007 19.73 -0.173259 16 3.16878ZM14.145 5.77165L14.8804 6.50706C15.4987 7.12539 16.5013 7.12539 17.1196 6.50706L17.855 5.77165C20.3284 3.29834 24.3383 3.29834 26.8116 5.77165C29.285 8.24498 29.285 12.255 26.8116 14.7283L16 25.5401L5.18831 14.7283C2.715 12.255 2.715 8.24498 5.18831 5.77165C7.66164 3.29834 11.6717 3.29834 14.145 5.77165Z" fill="#81BB3F" />
                                </svg>
                            </span>

                            <button
                                class="add-to-cart px-2 rounded-full flex items-center bg-green-600 rounded-full">

                                <span class="ml-2 text-white">5 Kg</span>
                            </button>
                        </div>
                        <img class="h-40 mb-5 mx-auto mt-3" src="https://5.imimg.com/data5/SELLER/Default/2021/3/RC/KQ/FZ/18802101/hariyali-agro-1-500x500.jpg" alt="" />
                        <div class="text-center">
                            <h2 class="mb-2 text-lg text-green-600">Cocopeat</h2>
                            <h3 className='text-4xl'><sup className='coust text-sm'>₹</sup>799</h3>
                        </div>

                        <button className='btn-primary'>
                            <i class="fa fa-cart-arrow-down" aria-hidden="true">  Add to cart</i>
                        </button>

                    </div>

                    {/* 2 */}

                    <div class="menu ml-16 border-2 border-gray-300 rounded-lg shadow-lg" style={{ marginLeft: "80px" }}>
                        <div class="flex items-center justify-around mt-6 mb-3">
                            <span class="font-bold text-lg text-gray-400">
                                <svg width="25" height="17" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 3.16878C12.2699 -0.173259 6.53364 -0.052007 2.94915 3.53249C-0.760841 7.24247 -0.760841 13.2575 2.94915 16.9674L13.7608 27.7792C14.9974 29.0158 17.0026 29.0158 18.2391 27.7792L29.0508 16.9674C32.7608 13.2575 32.7608 7.24247 29.0508 3.53249C25.4663 -0.052007 19.73 -0.173259 16 3.16878ZM14.145 5.77165L14.8804 6.50706C15.4987 7.12539 16.5013 7.12539 17.1196 6.50706L17.855 5.77165C20.3284 3.29834 24.3383 3.29834 26.8116 5.77165C29.285 8.24498 29.285 12.255 26.8116 14.7283L16 25.5401L5.18831 14.7283C2.715 12.255 2.715 8.24498 5.18831 5.77165C7.66164 3.29834 11.6717 3.29834 14.145 5.77165Z" fill="#81BB3F" />
                                </svg>
                            </span>

                            <button
                                class="add-to-cart px-2 rounded-full flex items-center bg-green-600 rounded-full">

                                <span class="ml-2 text-white">5 Kg</span>
                            </button>
                        </div>
                        <img class="h-40 mb-5 mx-auto mt-3" src="https://5.imimg.com/data5/SELLER/Default/2021/3/RC/KQ/FZ/18802101/hariyali-agro-1-500x500.jpg" alt="" />
                        <div class="text-center">
                            <h2 class="mb-2 text-lg text-green-600">Cocopeat</h2>
                            <h3 className='text-4xl'><sup className='coust text-sm'>₹</sup>799</h3>
                        </div>

                        <button className='btn-primary'>
                            <i class="fa fa-cart-arrow-down" aria-hidden="true">  Add to cart</i>
                        </button>

                    </div>

                    {/* 3 */}

                    <div class="menu ml-20 border-2 border-gray-300 rounded-lg shadow-lg" style={{ marginLeft: "120px" }}>
                        <div class="flex items-center justify-around mt-6 mb-3">
                            <span class="font-bold text-lg text-gray-400">
                                <svg width="25" height="17" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 3.16878C12.2699 -0.173259 6.53364 -0.052007 2.94915 3.53249C-0.760841 7.24247 -0.760841 13.2575 2.94915 16.9674L13.7608 27.7792C14.9974 29.0158 17.0026 29.0158 18.2391 27.7792L29.0508 16.9674C32.7608 13.2575 32.7608 7.24247 29.0508 3.53249C25.4663 -0.052007 19.73 -0.173259 16 3.16878ZM14.145 5.77165L14.8804 6.50706C15.4987 7.12539 16.5013 7.12539 17.1196 6.50706L17.855 5.77165C20.3284 3.29834 24.3383 3.29834 26.8116 5.77165C29.285 8.24498 29.285 12.255 26.8116 14.7283L16 25.5401L5.18831 14.7283C2.715 12.255 2.715 8.24498 5.18831 5.77165C7.66164 3.29834 11.6717 3.29834 14.145 5.77165Z" fill="#81BB3F" />
                                </svg>
                            </span>

                            <button
                                class="add-to-cart px-2 rounded-full flex items-center bg-green-600 rounded-full">

                                <span class="ml-2 text-white">5 Kg</span>
                            </button>
                        </div>
                        <img class="h-40 mb-5 mx-auto mt-3" src="https://5.imimg.com/data5/SELLER/Default/2021/3/RC/KQ/FZ/18802101/hariyali-agro-1-500x500.jpg" alt="" />
                        <div class="text-center">
                            <h2 class="mb-2 text-lg text-green-600">Cocopeat</h2>
                            <h3 className='text-4xl'><sup className='coust text-sm'>₹</sup>799</h3>
                        </div>

                        <button className='btn-primary'>
                            <i class="fa fa-cart-arrow-down" aria-hidden="true">  Add to cart</i>
                        </button>

                    </div>
                </div>
            </section>

            {/* 4 menu */}
            <section class="container mx-auto py-10 mt-10">

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 col-gap-12 gap-x-20 row-gap-16">
                    <div class="menu ml-9 border-2 border-gray-300 rounded-lg shadow-lg">
                        <div class="flex items-center justify-around mt-6 mb-3">
                            <span class="font-bold text-lg text-gray-400">
                                <svg width="25" height="17" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 3.16878C12.2699 -0.173259 6.53364 -0.052007 2.94915 3.53249C-0.760841 7.24247 -0.760841 13.2575 2.94915 16.9674L13.7608 27.7792C14.9974 29.0158 17.0026 29.0158 18.2391 27.7792L29.0508 16.9674C32.7608 13.2575 32.7608 7.24247 29.0508 3.53249C25.4663 -0.052007 19.73 -0.173259 16 3.16878ZM14.145 5.77165L14.8804 6.50706C15.4987 7.12539 16.5013 7.12539 17.1196 6.50706L17.855 5.77165C20.3284 3.29834 24.3383 3.29834 26.8116 5.77165C29.285 8.24498 29.285 12.255 26.8116 14.7283L16 25.5401L5.18831 14.7283C2.715 12.255 2.715 8.24498 5.18831 5.77165C7.66164 3.29834 11.6717 3.29834 14.145 5.77165Z" fill="#81BB3F" />
                                </svg>
                            </span>

                            <button
                                class="add-to-cart px-2 rounded-full flex items-center bg-green-600 rounded-full">

                                <span class="ml-2 text-white">5 Kg</span>
                            </button>
                        </div>
                        <img class="h-40 mb-5 mx-auto mt-3" src="https://5.imimg.com/data5/SELLER/Default/2021/3/RC/KQ/FZ/18802101/hariyali-agro-1-500x500.jpg" alt="" />
                        <div class="text-center">
                            <h2 class="mb-2 text-lg text-green-600">Cocopeat</h2>
                            <h3 className='text-4xl'><sup className='coust text-sm'>₹</sup>799</h3>
                        </div>

                        <button className='btn-primary'>
                            <i class="fa fa-cart-arrow-down" aria-hidden="true">  Add to cart</i>
                        </button>

                    </div>

                    {/* 2 */}

                    <div class="menu ml-16 border-2 border-gray-300 rounded-lg shadow-lg" style={{ marginLeft: "80px" }}>
                        <div class="flex items-center justify-around mt-6 mb-3">
                            <span class="font-bold text-lg text-gray-400">
                                <svg width="25" height="17" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 3.16878C12.2699 -0.173259 6.53364 -0.052007 2.94915 3.53249C-0.760841 7.24247 -0.760841 13.2575 2.94915 16.9674L13.7608 27.7792C14.9974 29.0158 17.0026 29.0158 18.2391 27.7792L29.0508 16.9674C32.7608 13.2575 32.7608 7.24247 29.0508 3.53249C25.4663 -0.052007 19.73 -0.173259 16 3.16878ZM14.145 5.77165L14.8804 6.50706C15.4987 7.12539 16.5013 7.12539 17.1196 6.50706L17.855 5.77165C20.3284 3.29834 24.3383 3.29834 26.8116 5.77165C29.285 8.24498 29.285 12.255 26.8116 14.7283L16 25.5401L5.18831 14.7283C2.715 12.255 2.715 8.24498 5.18831 5.77165C7.66164 3.29834 11.6717 3.29834 14.145 5.77165Z" fill="#81BB3F" />
                                </svg>
                            </span>

                            <button
                                class="add-to-cart px-2 rounded-full flex items-center bg-green-600 rounded-full">

                                <span class="ml-2 text-white">5 Kg</span>
                            </button>
                        </div>
                        <img class="h-40 mb-5 mx-auto mt-3" src="https://5.imimg.com/data5/SELLER/Default/2021/3/RC/KQ/FZ/18802101/hariyali-agro-1-500x500.jpg" alt="" />
                        <div class="text-center">
                            <h2 class="mb-2 text-lg text-green-600">Cocopeat</h2>
                            <h3 className='text-4xl'><sup className='coust text-sm'>₹</sup>799</h3>
                        </div>

                        <button className='btn-primary'>
                            <i class="fa fa-cart-arrow-down" aria-hidden="true">  Add to cart</i>
                        </button>

                    </div>

                    {/* 3 */}

                    <div class="menu ml-20 border-2 border-gray-300 rounded-lg shadow-lg" style={{ marginLeft: "120px" }}>
                        <div class="flex items-center justify-around mt-6 mb-3">
                            <span class="font-bold text-lg text-gray-400">
                                <svg width="25" height="17" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 3.16878C12.2699 -0.173259 6.53364 -0.052007 2.94915 3.53249C-0.760841 7.24247 -0.760841 13.2575 2.94915 16.9674L13.7608 27.7792C14.9974 29.0158 17.0026 29.0158 18.2391 27.7792L29.0508 16.9674C32.7608 13.2575 32.7608 7.24247 29.0508 3.53249C25.4663 -0.052007 19.73 -0.173259 16 3.16878ZM14.145 5.77165L14.8804 6.50706C15.4987 7.12539 16.5013 7.12539 17.1196 6.50706L17.855 5.77165C20.3284 3.29834 24.3383 3.29834 26.8116 5.77165C29.285 8.24498 29.285 12.255 26.8116 14.7283L16 25.5401L5.18831 14.7283C2.715 12.255 2.715 8.24498 5.18831 5.77165C7.66164 3.29834 11.6717 3.29834 14.145 5.77165Z" fill="#81BB3F" />
                                </svg>
                            </span>

                            <button
                                class="add-to-cart px-2 rounded-full flex items-center bg-green-600 rounded-full">

                                <span class="ml-2 text-white">5 Kg</span>
                            </button>
                        </div>
                        <img class="h-40 mb-5 mx-auto mt-3" src="https://5.imimg.com/data5/SELLER/Default/2021/3/RC/KQ/FZ/18802101/hariyali-agro-1-500x500.jpg" alt="" />
                        <div class="text-center">
                            <h2 class="mb-2 text-lg text-green-600">Cocopeat</h2>
                            <h3 className='text-4xl'><sup className='coust text-sm'>₹</sup>799</h3>
                        </div>

                        <button className='btn-primary'>
                            <i class="fa fa-cart-arrow-down" aria-hidden="true">  Add to cart</i>
                        </button>

                    </div>
                </div>
            </section>

            {/* pagination */}
            <div class="py-9 mt-6">
                <nav class="pagination block">
                    <ul class="flex pl-0 rounded list-none flex-wrap">
                        <li>
                            <a href="#1" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid text-white" style={{ background: "#81BB3F" }}>
                                1
                            </a>
                        </li>
                        <li>
                            <a href="#5" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative text-gray-500">
                                2
                            </a>
                        </li>
                        <li>
                            <a href="#5" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative text-gray-500">
                                3
                            </a>
                        </li>
                        <li>
                            <a href="#5" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative text-gray-500">
                                4
                            </a>
                        </li>
                        <li>
                            <a href="#5" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative text-gray-500">
                                5
                            </a>
                        </li>
                        <li>
                            <a href="#5" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative text-gray-500">
                                6
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>


            <div className='bg-img ml-6 py-10 mb-6'>
                <div id="image">
                    <div className='flex justify-between px-12'>
                        <img src={logo} alt="" className='imglogo h-20 w-20 -ml-20' />
                        <p className='dammytext text-white'>
                        At ARSH, we provide all-natural products that your plant needs to grow, 
                        be it your home plant <br/>, backyard garden, or farm.
                        </p>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>


    )
}

export default Menu