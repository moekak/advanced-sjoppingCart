import React, {useContext} from 'react'
import { ShopContext } from '../../context/ShopCart';

const Items = ({id, title, price, img, category}) => {
    const { selected, item} =useContext(ShopContext);
    const categories = item.filter((item) => item.category === selected)
  return (
    <div className="items-container">
        
        {category === selected ? <p>{price}</p>: <p>moeka</p>}
    </div>
  )
}

export default Items