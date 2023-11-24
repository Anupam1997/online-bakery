import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Product } from "../../Common";
import {
  Alert,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Snackbar,
} from "@mui/material";
import axios from "axios";

function OrderCheckout({
  open,
  handleClose,
  product,
}: {
  open: boolean;
  handleClose: any;
  product: Product;
}) {
  const [message, setMessage] = useState("");
  const [branch, setBranch] = useState("");
  const [branches, setBranches] = useState<any[]>([]);

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await axios.get<{ branches: any[] }>(
          "http://localhost:5000/api/branches"
        );

        if (!response.data) {
          throw new Error("No data received");
        }

        setBranches(response.data.branches);
      } catch (error: any) {
        console.error("Error fetching branches:", error.message);
      }
    };

    fetchBranches();
  }, []);
  const handleChange = (event: SelectChangeEvent) => {
    setBranch(event.target.value as string);
  };

  const createOrder = async () => {
    const username = localStorage.getItem("username");
    try {
      const { data } = await axios.post("http://localhost:5000/api/orders", {
        username,
        branchId: branch,
        product: {
          product_id: product._id,
          name: product.name,
          price: product.price,
        },
        order_type: product.category,
        total_amount: product.price,
      });
      setMessage(data.message);
    } catch (error) {
      console.log(error);
    } finally {
      handleClose();
    }
  };

  return (
    <>
      <Snackbar open={Boolean(message)} autoHideDuration={6000}>
        <Alert
          onClose={() => setMessage("")}
          severity="success"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          Order {product.name}
        </DialogTitle>
        <DialogContent
          sx={{
            width: "500px",
            height: "500px",
          }}
        >
          <h1>Price: &#8377;{product.price}</h1>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Branch</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={branch}
              label="Branch"
              onChange={handleChange}
            >
              {branches.map((branch: any) => {
                return (
                  <MenuItem key={branch.branchId} value={branch.branchId}>
                    {`${branch.name}, ${branch.address}, ${branch.city}`}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={() => createOrder()} autoFocus>
            Buy
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default OrderCheckout;
