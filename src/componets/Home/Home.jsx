import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../../Context/Context'

const Home = () => {
  const context = useContext(ProductContext)
  // console.log(context.productState.productData)
  return (
    <section className='container mx-auto'>

      <form className='mt-[100px]'>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input onChange={context.handleInputFilter} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." />
          <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
      </form>

      <div className='flex flex-row space-x-3 max-xl:flex-col '>
        <div className='basis-4/6'>
          {
            context.productState.productData &&
              context.productState.productData.length > 0 ? (
              <div className='grid grid-cols-3 gap-3 max-xl:grid-cols-2 max-md:grid-cols-1'>
                {
                  context.productState.productData.map((oneProduct, index) => (
                    <div key={index} className='pt-[120px] grid '>
                      <div className="w-full max-md:mx-auto max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <button >
                          <img className="p-8 rounded-t-lg h-[270px]" src={oneProduct.images[0]} alt="product image" />
                        </button>
                        <div className="px-5 pb-5">
                          <button >
                            <h5 className="text-xl h-[80px] font-semibold tracking-tight text-gray-900 dark:text-white">{oneProduct.title}</h5>
                          </button>
                          <div className="flex items-center mt-2.5 mb-5">
                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                              <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                              </svg>
                              <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                              </svg>
                              <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                              </svg>
                              <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                              </svg>
                              <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                              </svg>
                            </div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">${oneProduct.price}</span>
                            <button onClick={() => context.cartProduct(oneProduct)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            ) : <div>

              {
                context.loading &&
                <div className='w-full h-[80vh] flex flex-col justify-center items-center'>
                  <div role="status">
                    <svg aria-hidden="true" className="w-[120px] h-[120px] text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              }

            </div>
          }
        </div>
        <div className='basis-2/6 pt-[120px]'>
          <h1 className='text-center text-[22px] font-bold'>Category</h1>
          <div className='flex flex-col justify-center items-center'>
            <button onClick={() => context.filterButtonCheck("")} className='text-white text-[18px] font-semibold hover:bg-slate-400 hover:text-black transition-all w-[200px] my-[10px] h-[50px] rounded-lg bg-slate-700'>All Category</button>
            <button onClick={() => context.filterButtonCheck("smartphones")} className='text-white text-[18px] font-semibold hover:bg-slate-400 hover:text-black transition-all w-[200px] my-[10px] h-[50px] rounded-lg bg-slate-700'>smartphones</button>
            <button onClick={() => context.filterButtonCheck("laptops")} className='text-white text-[18px] font-semibold hover:bg-slate-400 hover:text-black transition-all w-[200px] my-[10px] h-[50px] rounded-lg bg-slate-700'>laptops</button>
            <button onClick={() => context.filterButtonCheck("fragrances")} className='text-white text-[18px] font-semibold hover:bg-slate-400 hover:text-black transition-all w-[200px] my-[10px] h-[50px] rounded-lg bg-slate-700'>fragrances</button>
            <button onClick={() => context.filterButtonCheck("skincare")} className='text-white text-[18px] font-semibold hover:bg-slate-400 hover:text-black transition-all w-[200px] my-[10px] h-[50px] rounded-lg bg-slate-700'>skincare</button>
            <button onClick={() => context.filterButtonCheck("groceries")} className='text-white text-[18px] font-semibold hover:bg-slate-400 hover:text-black transition-all w-[200px] my-[10px] h-[50px] rounded-lg bg-slate-700'>groceries</button>
            <button onClick={() => context.filterButtonCheck("home-decoration")} className='text-white text-[18px] font-semibold hover:bg-slate-400 hover:text-black transition-all w-[200px] my-[10px] h-[50px] rounded-lg bg-slate-700'>home-decoration</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home