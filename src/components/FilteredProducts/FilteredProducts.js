import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';
import { Button } from '@material-tailwind/react';
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import {
    filterBySize,
    filterByColor,
    genderFilter,
    sortByPrice,
    filterProducts,
    sortByLowestPrice
} from '../../features/Products/ProductsSlice';
import Error from "../error/Error"

const FilteredProducts = () => {
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch()
    const { type } = useParams()
    
    const products = useSelector((state) => state.products.filteredProducts)
    const error = useSelector((state) => state.products.error)
   

    const genderButtons = ["male", "female"];
    const colorButtons = ["red", "black", "yellow", "purple", "green", "gray"];
    const sizeButtons = ["s", "M", "L", "XL"]

  

    // Function to update query parameters in the URL
    const updateQueryParams = (queryParams) => {
        const searchParams = new URLSearchParams(location.search);
        for (const param in queryParams) {
            searchParams.set(param, queryParams[param]);
        }
        history.push({ search: searchParams.toString() });
    }

    // Function to handle gender filter
    const handleGenderFilter = (gender) => {
        dispatch(genderFilter(gender));
        updateQueryParams({ gender });
    }

    // Function to handle color filter
    const handleColorFilter = (color) => {
        dispatch(filterByColor(color));
        updateQueryParams({ color });
    }

    // Function to handle size filter
    const handleSizeFilter = (size) => {
        dispatch(filterBySize(size));
        updateQueryParams({ size });
    }

    // Function to handle sorting by price
    const handleSortByPrice = () => {
        dispatch(sortByPrice());
        updateQueryParams({ sortBy: 'highestprice' });
    }

    // Function to handle sorting by lowest price
    const handleSortByLowestPrice = () => {
        dispatch(sortByLowestPrice());
        updateQueryParams({ sortBy: 'lowestPrice' });
    }


// Function to clear filters
const clearFilters = () => {
  const searchParams = new URLSearchParams(location.search);
  // Remove query parameters related to filters
  searchParams.delete('gender');
  searchParams.delete('color');
  searchParams.delete('size');
  searchParams.delete('sortBy');
  
  history.push({ search: searchParams.toString() });
  // After clearing filters, you can also dispatch the action to update the state accordingly
  dispatch(filterProducts(type));
}

  

    return (
        <div>
            <div className='pt-16'>
                <div className='pl-14'>
                    <h1 className='text-4xl pb-4 font-inter text-gray-600 font-bold tracking-normal leading-none'>
                        {type}
                    </h1>

                    <div className="flex items-center justify-between py-8 ">

                        <div className='flex items-center'>
                            {genderButtons.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Button
                                            color="gray"
                                            size="lg"
                                            variant="outlined"
                                            ripple={true}
                                            className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                                            onClick={() => handleGenderFilter(item)}
                                        >
                                            {item}
                                        </Button>
                                    </div>
                                )
                            })}

                            <Button
                                color="gray"
                                size="lg"
                                variant="outlined"
                                ripple={true}
                                className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                                onClick={handleSortByPrice}
                            >
                                Highest Price
                            </Button>
                            <Button
                                color="gray"
                                size="lg"
                                variant="outlined"
                                ripple={true}
                                className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                                onClick={handleSortByLowestPrice}
                            >
                                Lowest Price
                            </Button>
                            <Menu>
                                <MenuHandler>
                                    <Button
                                        color="gray"
                                        size="lg"
                                        variant="outlined"
                                        ripple={true}
                                        className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                                    >
                                        Select a color
                                    </Button>
                                </MenuHandler>
                                <MenuList>
                                    {colorButtons.map((item, index) => {
                                        return (
                                            <MenuItem
                                                style={{ color: item }}
                                                key={index}
                                                onClick={() => handleColorFilter(item)}
                                            >
                                                {item}
                                            </MenuItem>
                                        );
                                    })}
                                </MenuList>
                            </Menu>

                            <Menu>
                                <MenuHandler>
                                    <Button
                                        disabled={type === "Bags" || type === "Shoes"}
                                        color="gray"
                                        size="lg"
                                        variant="outlined"
                                        ripple={true}
                                        className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                                    >
                                        Select a size
                                    </Button>
                                </MenuHandler>
                                <MenuList>
                                    {sizeButtons.map((item, index) => {
                                        return (
                                            <MenuItem
                                                key={index}
                                                onClick={() => handleSizeFilter(item)}
                                            >
                                                {item}
                                            </MenuItem>
                                        );
                                    })}
                                </MenuList>
                            </Menu>
                        </div>

                        <div className='pr-8'>
                            <Button
                                color="gray"
                                size="lg"
                                variant="outlined"
                                ripple={true}
                                className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
                                onClick={clearFilters}
                            >
                                Clear Filter
                            </Button>
                        </div>
                    </div>

                </div>
                {error ? (
                    <Error></Error>
                ) : (
                    <div className="grid grid-cols-4 justify-items-center py-8 gap-12 ">
                        {products
                            .filter((product) => product.type === type)
                            .map((product, index) => {
                                return (
                                    <div key={index} className="">
                                        <ProductCard
                                            id={product.id}
                                            name={product.name}
                                            text={product.text}
                                            img={product.img}
                                            price={product.price}
                                            colors={product.color}
                                        ></ProductCard>
                                    </div>
                                );
                            })}
                    </div>
                )}
            </div>
        </div>
    );
};
export default FilteredProducts;
