import React, { useContext } from 'react'
import { ProductContext } from '../../Context/Context'

const Carts = () => {
  const context = useContext(ProductContext)
  return (
    <div className='pt-[100px] pb-[100px]'>
      <h1 className='text-center text-[22px] font-bold'>Shoping Cart</h1>
      {
        context.productState.productData &&
        <div className='grid grid-cols-3 gap-3 max-xl:grid-cols-2 max-md:grid-cols-1'>
          {
            context.productState.cart.map((Product, index) => (
              <div key={index} className='pt-[120px] grid '>
                <div className="w-full max-md:mx-auto max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <button >
                    <img className="p-8 rounded-t-lg h-[270px]" src={Product.images[0]} alt="product image" />
                  </button>
                  <div className='pl-[20px]'>
                    <p className='text-[17px] font-semibold'>{Product.title}</p>
                    <p className='text-[16px] font-semibold'>Count: {Product.count}</p>
                    <p></p>
                    <div className=' flex flex-row justify-between w-[170px]'>
                      <button onClick={() => context.upCount(Product)} className='text-[22px] font-semibold'>+</button>
                      <button onClick={() => context.removeProduct(Product.id)} className='text-[16px] text-red-700 font-semibold'>Delete</button>
                      <button onClick={() => context.downCount(Product)} className='text-[22px] font-semibold'>-</button>
                    </div>
                    <p className='float-right text-red-600 pt-[7px]'>Price: ${(Product.price * Product.count).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))
          }
          <div className='fixed right-[100px] bottom-0 bg-white max-md:right-[30px]'>
            <h1 className='text-[22px] text-red-600 font-bold'>TotalCount: <span className='pl-[20px]'>${context.TotalPrice}</span></h1>
          </div>
        </div>
      }
    </div>
  )
}

export default Carts