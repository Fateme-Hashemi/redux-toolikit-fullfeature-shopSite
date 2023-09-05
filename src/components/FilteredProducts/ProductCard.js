import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
import { useDispatch } from 'react-redux';
import {Link} from "react-router-dom"
import { singleProduct } from '../../features/Products/ProductsSlice';




const ProductCard = ({id, name, img, price, gender,type, size, text, colors}) => {

    const dispatch= useDispatch();
    


    return (
            <Link to={`/product/${type}/` +  id}>
              <Card className="w-93" onClick={()=> dispatch(singleProduct(id))} >
        <CardHeader color="blue" className="relative h-96">
          <img src={img} alt="img-blur-shadow" className="h-full w-full" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            {name}
          </Typography>
          <Typography>{text}</Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">{price}$</Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
            {colors?.map((color, index) => {
              return (
                <i
                  className="fas fa-map-marker-alt fa-sm mt-[3px] rounded-full p-2 mr-4 "
                  key={index}
                  style={{ backgroundColor: color }}
                ></i>
              );
            })}
          </Typography>
        </CardFooter>
      </Card>
      </Link>
    );
};

export default ProductCard;