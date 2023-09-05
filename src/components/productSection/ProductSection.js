import React from 'react';
import {storeData} from "../../assets/data/dummyData"
import ProductSectionItem from "./ProductSectionItem"


const ProductSection = () => {
    return (
        <div>
            <div className="bg-black p-2 w-[50%] mx-auto rounded-md mt-6">
                <h2 className="text-red-600 text-center text-lg font-inter font-bold tracking-normal leading-none">
                SUMMER T-Shirt SALE 30%
                </h2>
            </div>
            <div className='grid grid-cols-3 gap-4 justify-items-center py-8 gap-4 mx-auto max-w-7xl'>
                {storeData.slice(0,6).map((product, index)=> {
                    return(
                        <div>
                            <ProductSectionItem
                                id={product.id}
                                img={product.img}
                                text={product.text}
                                price={product.price}
                                name={product.name}
                                color={product.color}
                                size={product.size}
                                totalPrice={product.totalPrice}

                             />
                        </div>
                    )
                })}
            </div>

        </div>
    );
};

export default ProductSection;