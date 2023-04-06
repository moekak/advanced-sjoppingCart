import React, {createContext, useState, useEffect} from 'react'
import data from '../data'

export const ShopContext = createContext('')

export const ShopContextProvider = ({children}) =>{
    const [item, setItem] = useState(data)
    const [cartItem, setCartItem] = useState([]);
    const [selected, setSelected] = useState('')
    const [serach, setSearch] = useState()
    const categories = ['all','men', 'women']
    

 
// adding function
    const addToCart = (id) =>{
        const product = cartItem.find(item => item.id === id);
       console.log(cartItem);
        if(product){
           setCartItem((prev)=> prev.map((item) => item.id === id ? {...item, quantity: item.quantity + 1} : item));
        } else{
            setCartItem(
                [
                    ...cartItem,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
    }}

// remove function
    const remove =(id)=>{
        const product = cartItem.find(item => item.id === id);
        console.log(cartItem);
         if(product){
            setCartItem((prev)=> prev.map((item) => item.id === id ? {...item, quantity: item.quantity - 1} : item));
         }
}


    // useEffect (() =>{
    //     if (serach === ''){
    //         setItem(data);
    //     } else{
    //         const filterProducts = data.filter((product) => product.title.startsWith(serach));
    //         setItem(filterProducts)
    //     }
    // }, [serach])


    useEffect(() =>{
        if (!selected){
            setItem(data)
        } else{
            const filterProducts = data.filter((product) => product.category === selected);
            setItem(filterProducts)
        }
    }, [selected])

        

 

    
   



    const ContextValue = {
        item,
        setItem,
        addToCart,
        serach,
        setSearch,
        cartItem,
        remove,
        selected,
        setSelected,
        categories
     
        
        
    }

    return(
        <ShopContext.Provider value={ContextValue}>
            {children}
        </ShopContext.Provider>
    )

    }