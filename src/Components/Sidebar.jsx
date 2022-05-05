import React from 'react'

function Sidebar() {
  return (
    <div>
      {/* */}
      <aside class="w-48 mt-4 ml-10 py-4" aria-label="Sidebar" >
        <div className='ml-3 py-2 text-lg'>
          <i class="fa fa-sort" aria-hidden="true" style={{ fontSize: "12px" }}>  Sort</i>
        </div>
        <div class="sidenav overflow-y-auto py-2 px-3 bg-gray-50 rounded dark:bg-gray-800" style={{ Width: "354px", height: "280px" }}>

          <ul class="space-y-2 py-4">
            <li>
              <a href="#" class="bg flex items-center p-1 text-base font-normal text-gray-900 rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">

                <span class="ml-2">Featured</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-1 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <span class="flex-1 ml-1 whitespace-nowrap">New Arrivals</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-1 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">

                <span class="flex-1 ml-1 whitespace-nowrap">Discount</span>

              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-1 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">

                <span class="flex-1 ml-1 whitespace-nowrap">Price (Highest first)</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-1 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">

                <span class="flex-1 ml-1 whitespace-nowrap">Products</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-1 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <span class="flex-1 ml-1 whitespace-nowrap">Price (Lowest first)</span>
              </a>
            </li>
          </ul>
        </div>

       
      </aside>

      {/* filter */}
      <aside class="w-48 ml-10 -mt-3" aria-label="Sidebar" >
        <div className='ml-3 py-2 text-lg'>
          <i class="fa fa-filter" aria-hidden="true" style={{ fontSize: "12px" }}>  Filters</i>
        </div>
        <div class="sidenav overflow-y-auto py-2 px-3 bg-gray-50 rounded dark:bg-gray-800" style={{ Width: "354px", height: "330px" }}>

          <ul class="space-y-2 py-4">
            <li>
              <a href="#" class="bg flex items-center p-1 text-base font-normal text-gray-900 rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">

                <span class="ml-2">All Products</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-1 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <span class="flex-1 ml-1 whitespace-nowrap">Natural Insecticide</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-1 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">

                <span class="flex-1 ml-1 whitespace-nowrap">Plant Growth<br/> Promoters</span>

              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-1 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">

                <span class="flex-1 ml-1 whitespace-nowrap">Fertilizers</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-1 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">

                <span class="flex-1 ml-1 whitespace-nowrap">Plant Potting Mix</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-1 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <span class="flex-1 ml-1 whitespace-nowrap">Garden Tools & <br/> Accessories</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* qnty */}
      <aside class="w-48 ml-10 " aria-label="Sidebar" >
        <div className='ml-3 py-2 text-lg'>
          <i class="fa fa-archive" aria-hidden="true" style={{ fontSize: "12px" }}>  Quantity</i>
        </div>
        <div class="sidenav overflow-y-auto py-2 px-3 bg-gray-50 rounded dark:bg-gray-800" style={{ Width: "354px", height: "280px" }}>

          <ul class="space-y-2 py-4">
            <li>
              <a href="#" class="bg flex items-center p-1 text-base font-normal text-gray-900 rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">

                <span class="ml-2">250 ml/g</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-1 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <span class="flex-1 ml-1 whitespace-nowrap">500 ml/g</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-1 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">

                <span class="flex-1 ml-1 whitespace-nowrap">1 Litre/Kg</span>

              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-1 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">

                <span class="flex-1 ml-1 whitespace-nowrap">10 Kg</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-1 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">

                <span class="flex-1 ml-1 whitespace-nowrap">15 Kg</span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-1 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <span class="flex-1 ml-1 whitespace-nowrap">20 Kg</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>


    </div>
  )
}

export default Sidebar