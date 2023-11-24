import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { TextField } from "@mui/material";
import "./products.scss";
import { useNavigate } from "react-router-dom";
import { Star } from "@mui/icons-material";
import { Product } from "../../Common";

function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<{ products: Product[] }>(
          "http://localhost:5000/api/products",
          {
            params: {
              search: searchTerm,
              category: categoryFilter,
            },
          }
        );

        if (!response.data) {
          throw new Error("No data received");
        }

        setProducts(response.data.products);
      } catch (error: any) {
        console.error("Error fetching products:", error.message);
      }
    };

    fetchProducts();
  }, [searchTerm, categoryFilter]);

  return (
    <div
      id="product-card"
      style={{ marginTop: "100px" }}
      className="container container-sm container-lg container-md container-xl"
    >
      <div className="row">
        <div className="col-4">
          <TextField
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-4"></div>
      </div>
      <div className="row">
        {products.map((product: Product) => {
          return (
            <div className="col-12 col-xl-4 col-lg-6 col-md-6 col-sm-12 py-3">
              <Card
                sx={{
                  borderTopLeftRadius: "50px",
                  borderBottomRightRadius: "50px",
                  borderBottomLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                }}
              >
                <CardMedia
                  onClick={() => navigate(`/products/${product._id}`)}
                  component="img"
                  sx={{
                    cursor: "pointer",
                  }}
                  height="194"
                  image={product.image_url}
                  alt="Paella dish"
                />
                <CardContent>
                  <div>
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">&#8377; {product.price}</p>
                  </div>
                </CardContent>
                <CardActions
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="star-rating">
                    <Star fontSize="small" style={{ color: "gold" }} />{" "}
                    {product.star_rating}
                  </div>
                  <Button className="add-to-cart" onClick={() => console.log}>
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductsPage;
