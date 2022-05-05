import React from 'react'
import logo from './assets/images/logo.png'
import user from './assets/images/user.jpg'

function Nav({ fixed }) {

    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <>
            <nav className="bg-gray-50 relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                            href="#logo"
                        >
                            <img className='h-16 w-16' src={logo} alt="" />
                        </a>


                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i class="fa fa-bars" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <a
                                    className="avtive px-8 py-2 flex items-center text-xs uppercase font-bold leading-snug text-orange-400 hover:opacity-75"
                                    href="#home"
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-8 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-800 hover:opacity-75"
                                    href="#ABOUT"
                                >
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-8 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-800 hover:opacity-75"
                                    href="#shope"
                                >
                                    Shope
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-8 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-800 hover:opacity-75"
                                    href="#export"
                                >
                                    Export
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-8 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-800 hover:opacity-75"
                                    href="#blogs"
                                >
                                    Blogs
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-6 mr-10 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-800 hover:opacity-75"
                                    href="#contact"
                                >
                                    Contact
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className="px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-green-800 hover:opacity-75"
                                    href="#pablo"
                                >
                                    <svg width="25" height="17" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 3.16878C12.2699 -0.173259 6.53364 -0.052007 2.94915 3.53249C-0.760841 7.24247 -0.760841 13.2575 2.94915 16.9674L13.7608 27.7792C14.9974 29.0158 17.0026 29.0158 18.2391 27.7792L29.0508 16.9674C32.7608 13.2575 32.7608 7.24247 29.0508 3.53249C25.4663 -0.052007 19.73 -0.173259 16 3.16878ZM14.145 5.77165L14.8804 6.50706C15.4987 7.12539 16.5013 7.12539 17.1196 6.50706L17.855 5.77165C20.3284 3.29834 24.3383 3.29834 26.8116 5.77165C29.285 8.24498 29.285 12.255 26.8116 14.7283L16 25.5401L5.18831 14.7283C2.715 12.255 2.715 8.24498 5.18831 5.77165C7.66164 3.29834 11.6717 3.29834 14.145 5.77165Z" fill="#81BB3F" />
                                    </svg>

                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-green-800 hover:opacity-75"
                                    href="#logs"
                                >
                                    <svg width="25" height="17" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9102 1.99699C12.4055 0.825856 13.6023 0 15 0C16.3977 0 17.5945 0.825856 18.0898 1.99699C23.0337 3.29715 26.6667 7.64126 26.6667 12.8V20.3155L29.7202 24.7125C30.061 25.2035 30.0928 25.8347 29.8028 26.355C29.5128 26.8752 28.948 27.2 28.3333 27.2H20.7743C20.3698 29.9138 17.9387 32 15 32C12.0613 32 9.6301 29.9138 9.22575 27.2H1.66666C1.05201 27.2 0.487248 26.8752 0.197215 26.355C-0.0928184 25.8347 -0.0610352 25.2035 0.279915 24.7125L3.33333 20.3155V12.8C3.33333 7.64126 6.96638 3.29715 11.9102 1.99699ZM12.6423 27.2C12.9855 28.1322 13.9115 28.8 15 28.8C16.0885 28.8 17.0145 28.1322 17.3577 27.2H12.6423ZM15 4.8C10.3976 4.8 6.66666 8.38173 6.66666 12.8V20.8C6.66666 21.1158 6.56926 21.4246 6.38675 21.6875L4.78086 24H25.2192L23.6133 21.6875C23.4307 21.4246 23.3333 21.1158 23.3333 20.8V12.8C23.3333 8.38173 19.6023 4.8 15 4.8Z" fill="#81BB3F" />
                                    </svg>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-green-800 hover:opacity-75"
                                    href="#logs"
                                >
                                    <svg width="25" height="17" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.82314 3.72316L6.61826 21.8914C6.63859 22.0414 6.68114 22.1843 6.74247 22.3167C6.92711 22.7154 7.28197 23.0192 7.71376 23.1346C7.84567 23.1701 7.98391 23.1878 8.12531 23.1854H24.5697C25.2309 23.1854 25.8137 22.7517 26.0037 22.1185L30.4949 7.14752C30.631 6.69425 30.5446 6.20335 30.2621 5.82367C29.9796 5.44401 29.5343 5.22025 29.061 5.22025H7.08288L6.59049 2.01975C6.57204 1.88592 6.53592 1.75776 6.48454 1.63767C6.39127 1.41898 6.24848 1.22955 6.07206 1.08107C5.9084 0.943052 5.71473 0.839483 5.50224 0.781546C5.3685 0.744927 5.22816 0.726572 5.08459 0.728968H2.11331C1.28649 0.728968 0.616211 1.39923 0.616211 2.22606C0.616211 3.05288 1.28649 3.72316 2.11331 3.72316H3.82314ZM9.3861 20.1912L7.54352 8.21444H27.0489L23.4559 20.1912H9.3861Z" fill="#81BB3F" />
                                    </svg>

                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    className="px-2 flex items-center text-xs uppercase font-bold leading-snug text-green-800 hover:opacity-75"
                                    href="#logs"
                                >
                                    <img src={user} alt="user" className='rounded-full h-9 w-9 border-2 border-green-500' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

           
        </>
    )
}

export default Nav