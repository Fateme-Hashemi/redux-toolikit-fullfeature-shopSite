import React from 'react';
import { UseSelector, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';

const FilteredProducts = () => {

    const products = useSelector((state)=> state.products.filteredProducts)
    const {type} = useParams()
    console.log("filter" ,products)
    console.log("params" , type)

    return (
        <div>
           <div className='pt-16'>
                <div className='pl-14'>
                    <h1 className='text-4xl pb-4 font-inter text-gray-600 font-bold tracking-normal leading-none'>
                        {type}
                    </h1>

                </div>
                <div className="grid grid-cols-4 justify-items-center py-8 gap-12 ">
                 {products.filter((product)=> product.type === type).map((product, index)=> {
                    return (
                   <div key={product.id}>
                         <ProductCard
                        id={product.id}
                       img={product.img}
                       size={product.size}
                       price={product.price}
                       name={product.name}
                       type={product.type}
                       gender={product.gender}
                       text={product.text}
                       colors={product.colors}
                    />
                    </div>
                    )
                 })}
                </div>
           </div>
        </div>
    );
};

export default FilteredProducts;
