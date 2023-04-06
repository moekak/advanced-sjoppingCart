import React, {useContext} from 'react'
import { ShopContext } from '../../context/ShopCart';
import './item.css'
import Items from './Items';
import Select from 'react-select'

const Item = () => {

    const { filter, selected, setSelected, item, categories, search, setSearch } =useContext(ShopContext);

  return (
    <div className="item-container">
        <div className="filter-button">
            <h3>Sort by</h3>
            {/* <input type="search" placeholder='Serach here...' onChange={(e) => setSearch(e.target.value)}/> */}
            <select value={selected} name='filter' onChange={(e) => setSelected(e.target.value)} >
                {categories.map((category) =>{
                    return(
                        <option  key={category} >
                            {category}
                        </option>
                    )

                })}
            </select>
        </div>
        <div className="items-container">
           {item.map((item) =>{
            return(
                <div className="product-container">
                    <img src={item.img} alt="" />
                    <div className="desc">
                        <h3>{item.title}</h3>
                        <h2>${item.price}</h2>
                    </div>
                </div>
            )
           })}
        </div>


    </div>
  )
}

export default Item