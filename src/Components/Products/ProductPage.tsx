import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./products.scss";
import OrderCheckout from "../OrderCheckout";
import { Product } from "../../Common";

function ProductPage() {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const [product, setProduct] = useState<Product>({
    _id: "",
    name: "",
    description: "",
    price: 0,
    image_url: "",
    star_rating: 0,
    category: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get<{ product: Product }>(
          `http://localhost:5000/api/products/${id}`
        );

        if (!response.data) {
          throw new Error("No data received");
        }

        setProduct(response.data.product);
      } catch (error: any) {
        console.error("Error fetching product:", error.message);
      }
    };

    fetchProduct();
  }, [id]);
  return (
    <>
      <div
        id="product-page"
        style={{ marginTop: "100px" }}
        className="container container-sm container-lg container-md container-xl"
      >
        <div className="row">
          <div className="col-sm-12 col-12 col-md-6 col-lg-6">
            <img src={product.image_url} alt={product.name} />
          </div>
          <div className="col-sm-12 col-12 col-md-6 col-lg-6">
            <div className="d-flex flex-column justify-content-between">
              <div>
                <h1 className="product-heading">{product.name}</h1>
                <p className="product-desc">{product.description}</p>
              </div>
              <div className="mt-4">
                <h2>&#8377; {product.price}</h2>
                <Button
                  className="add-to-cart p-3 w-50"
                  onClick={() => setOpen(true)}
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OrderCheckout handleClose={handleClose} open={open} product={product} />
    </>
  );
}

export default ProductPage;
