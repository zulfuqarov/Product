import React, { useEffect, useState } from 'react'
import { createContext } from "react"
import App from '../App'
import axios from "axios"

export const ProductContext = createContext();

const Context = () => {
    const [loading, setloading] = useState(true)
    const [filterInputs, setfilterInputs] = useState("")
    const [filterButton, setfilterButton] = useState("")
    const [productState, setproductState] = useState({
        productData: [],
        cart: []
    })
    const getProductData = async (inputs, btnCategory) => {
        setloading(true)
        try {
            const getProductAxios = await axios.get("https://dummyjson.com/products")
            if (getProductAxios.data.products.length > 0) {
                const filteringProduct = getProductAxios.data.products.filter((oneFilter) => {
                    const inputsFiltering = oneFilter.title.toLowerCase().includes(inputs.toLowerCase())
                    const btnCategoryFiltering = oneFilter.category.toLowerCase().includes(btnCategory.toLowerCase())
                    return inputsFiltering && btnCategoryFiltering
                })
                setproductState((prevProduct) => {
                    return {
                        ...prevProduct,
                        productData: filteringProduct
                    }
                })
                setloading(false)
            }
            else {
                setloading(true)
                console.log("melumatlar gelmedi")
            }

        } catch (error) {
            setloading(false)
            console.log(error)
        }
    }

    const handleInputFilter = (e) => {
        setfilterInputs(e.target.value)
        getProductData(filterInputs, filterButton)
    }
    const filterButtonCheck = (category) => {
        setfilterButton(category)
        getProductData(filterInputs, filterButton)
    }
    const cartProduct = (product) => {
        setproductState((prevProduct) => {
            const checkProductCart = prevProduct.cart.find((oneFind) => oneFind.id === product.id)
            if (!checkProductCart) {
                return {
                    ...prevProduct,
                    cart: [...prevProduct.cart, { ...product, count: 1 }]
                }
            } else {
                const upCount = prevProduct.cart.map((oneProduct) => (
                    oneProduct.id === product.id ? { ...oneProduct, count: oneProduct.count + 1 } : oneProduct
                ))
                return {
                    ...prevProduct,
                    cart: upCount
                }
            }
        })
    }
    const removeProduct = (id) => {
        setproductState((prevProduct) => {
            const remove = prevProduct.cart.filter((oneFilter) => (
                oneFilter.id !== id
            ))
            return {
                ...prevProduct,
                cart: remove
            }
        })
    }
    const upCount = (product) => {
        setproductState((prevProduct) => {
            const upCountFilter = prevProduct.cart.map((oneProduct) => (
                oneProduct.id === product.id ? { ...oneProduct, count: oneProduct.count + 1 } : oneProduct
            ))
            return {
                ...prevProduct,
                cart: upCountFilter
            }
        })
    }
    const downCount = (product) => {
        setproductState((prevProduct) => {
            const downCountFilter = prevProduct.cart.map((oneProduct) => (
                oneProduct.id === product.id ? { ...oneProduct, count: Math.max(0, oneProduct.count - 1) } : oneProduct
            ))
            return {
                ...prevProduct,
                cart: downCountFilter
            }
        })
    }

// calculate carts shopping start
const CartProductLength = productState.cart.length


  const TotalPriceMap = productState.cart.map((oneProduct) => (
    oneProduct.price * oneProduct.count
  ))
  let TotalPrice = 0
  for (let i = 0; i < TotalPriceMap.length; i++) {
    TotalPrice += TotalPriceMap[i]
  }
// calculate carts shopping end

    useEffect(() => {
        getProductData(filterInputs, filterButton)
    }, [filterButton, filterInputs])


    

    return (
        <>
            <ProductContext.Provider value={{ productState, loading, getProductData, handleInputFilter, filterButtonCheck, cartProduct, removeProduct,upCount,downCount,CartProductLength,TotalPrice }}>
                <App />
            </ProductContext.Provider>
        </>
    )
}

export default Context 