import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { OutlinedInput } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../css/product.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Use navigate function to go to a specific route
    navigate("/about");
  };

  useEffect(() => {
    // Fetch data from an API when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.kalpav.com/api/v1/product/category/retail"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data.response);
        setFilteredData(data.response);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFilterClick = () => {
    // Filter the fetched data based on the input value
    const filteredResults = products.filter((item) =>
      item.productCategory.productCategoryName
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    setFilteredData(filteredResults);
    setSearch("");
  };

  return (
    <>
      <div className="mainContainer">
        <h2>Products </h2>
        <div className="search">
          <OutlinedInput
            placeholder="search here"
            className="input"
            type="text"
            name="search"
            value={search}
            onChange={handleInputChange}
          />
          <Button onClick={handleFilterClick} variant="outlined">
            Search
          </Button>
          <Button
            style={{ margin: "10px" }}
            onClick={handleButtonClick}
            variant="outlined"
          >
            {" "}
            About Page
          </Button>
        </div>

        <div className="cardContainer">
          {Array.from(filteredData).map((item, index) => {
            return (
              <div key={item.id}>
                {/*   <div> {item.productCategory.productCategoryName}  </div> */}
                <Card className="card">
                  <CardActionArea>
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        <img
                          src={item.productCategory.productCategoryImage}
                          alt=""
                        />
                      </Typography>
                      <Typography>
                        {item.productCategory.productCategoryName}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
