import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { ProductContext } from '../../Context/Context';
const Navbar = () => {
  const context = useContext(ProductContext)
  const [navbar, setNavbar] = useState(false);
  const [shopingIcon, setshopingIcon] = useState(false)


  const clickShopingIcon = () => {
    setshopingIcon(!shopingIcon)
  }






  return (
    <nav className="w-full fixed top-0  z-20 bg-white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="#">
              <h2 className="text-2xl font-bold">LOGO</h2>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-600 hover:text-blue-600">
                <Link to="/">Home</Link>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link to="/Carts">Carts</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <i onClick={clickShopingIcon} className="fa-solid max-md:hidden fa-cart-shopping cursor-pointer"><p className='inline-block text-[10px] text-white rounded-xl p-[3px] bg-red-600'>{context.CartProductLength}</p></i>
        </div>
      </div>
      {
        shopingIcon &&
        <div className='fixed  z-20 right-0 top-0 mr-[30px] w-[300px] bg-white max-md:hidden p-[10px]'>
          <i onClick={clickShopingIcon} className="fa-solid fa-xmark float-right text-[22px] cursor-pointer text-black "></i>
          <div className=''>
            <h1 className='text-[22px] font-bold text-center'>Carts</h1>
            <div className='flex flex-col overflow-y-scroll h-[600px]'>
              {context.productState.cart &&
                context.productState.cart.map((Product, index) => (
                  < div key={index} className='flex flex-row pt-[20px]' >
                    <div className='w-[100px] pt-[10px]'>
                      <img className='w-full ' src="https://img2.akspic.ru/attachments/crops/2/7/4/8/2/128472/128472-gora-minimalizm-voshod_solnca-zakat-utro-3840x2160.jpg" alt="" />
                    </div>
                    <div className='pl-[20px]'>
                      <p className='text-[17px] font-semibold'>{Product.title}</p>
                      <p className='text-[16px] font-semibold'>Count: {Product.count}</p>
                      <p></p>
                      <div className='w-[100%] flex flex-row justify-between'>
                        <button onClick={() => context.upCount(Product)} className='text-[18px] font-semibold'>+</button>
                        <button onClick={() => context.removeProduct(Product.id)} className='text-[16px] text-red-700 font-semibold'>Delete</button>
                        <button onClick={() => context.downCount(Product)} className='text-[18px] font-semibold'>-</button>
                      </div>
                      <p className='float-right text-red-600 pt-[7px]'>Price: ${(Product.price * Product.count).toFixed(2)}</p>
                    </div>
                  </div >
                ))
              }
            </div>
            <div className='pt-[40px]'>
              <h3 className='text-[18px] text-red-700 font-bold'>Total Price: <span className='inline-block pl-[40px] text-[18px] font-bold'>{context.TotalPrice}$</span></h3>
            </div>
          </div>
        </div>
      }
    </nav>
  );
}

export default Navbar


