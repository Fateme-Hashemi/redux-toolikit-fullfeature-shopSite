import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import {useParams} from "react-router-dom"
import { Tooltip, Button } from "@material-tailwind/react";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';
const SingleProduct = () => {
  const dispatch = useDispatch()
    const product = useSelector((state) => state.products.singleProduct )

    const productSize = product[0].size ? product[0].size[0] : ""
    //for showing default size in select box
    const productColor = product[0].color ? product[0].color[0] : ""


    const [size, setSize] = useState(productSize)
    const [color, setColor] = useState(productColor)

    const {id} = useParams()
    //get specific id with params from URL that user clicked

    return (
        <div>
          {product
            .filter((product) => product.id === id)
            .map((item, index) => {
              return (
                <div key={item.id}  className="flex justify-center items-center py-10">
                  <div  className="pl-44 grow-[2]">
                    <img className='h-[850px] rounded-lg' src={item.img} alt={item.name} />

                  </div>
                    <div className='grow-[3] '>
                      <div className='max-w-lg'>
                        <h5 className='text-2xl font-inter font-bold tracling-none leading-none pb-4' >
                          {item.name}
                          </h5>
                          <p className='text-orange-700 text-xl font-bold tracking-normal leading-none pb-4'>
                            50% OFF
                          </p>
                            <p className='text-gray-600 text-xl font-bold tracking-normal leading-none pb-4'>
                              {item.text}
                            </p>
                            <div className='pb-4'>

                              {/* some items dont have any size for example bags, so it causes error when we choose bags, here we define condition to prevent errors */}
                             {item.size ? (
                              <div>
                                  <label
                                  htmlFor="size"
                                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                     >
                                Pick a size
                              </label>
      
      
                              <select
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={size}
                                onChange={(e) => setSize( e.target.value)}
                              >
                                {item.size.map((item, index)=> {
                                  return (
                                    <option key={index}
                                    value={item}
                                    >
                                        {item}
                                    </option>
                                  )
                                })}
                              </select>
                              </div>) 
                              :
                              (
                                <div>
                                    <label
                                    htmlFor="size"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                       >
                                  Pick a size
                                </label>
        
        
                                <select
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  value={size}
                                  disabled={true}
                                  onChange={(e) => setSize( e.target.value)}
                                >
                                  {item?.size?.map((item, index)=> {
                                    return (
                                      <option key={index}
                                      value={item}
                                      >
                                          {item}
                                      </option>
                                    )
                                  })}
                                </select>
                                </div>) }
                          
                                <div className='pb-4'>
                                    <label
                                    htmlFor="size"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                       >
                                  Pick a color
                                </label>
        
        
                                <select
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  value={color}
                                  onChange={(e) => setColor( e.target.value)}
                                >
                                  {item.color.map((color, index)=> {
                                    return (
                                      <option key={index}
                                      value={color}
                                      >
                                          {color}
                                      </option>
                                    )
                                  })}
                                </select>
                                </div>
                                  <Tooltip content="Add to Cart" placement="bottom">
                                  <Button
                                   color="gray"
                                    size="lg"
                                    variant="outlined"
                                    ripple={true}
                                    onClick={()=> dispatch(addToCart({
                                        id: item.id, 
                                        name: item.name,
                                        price: item.price,
                                        img: item.img,
                                        color: color,
                                        size: size,
                                        amount : 1,
                                        totalPrice : item.price

                                    }
                                    ))}>
                                      Add to Cart
                                    </Button>
                                  </Tooltip>
                             
                            </div>

                      </div>
                    </div>
                </div>
              );
            })}
        </div>
      );
      
};

export default SingleProduct;