const express = require("express");
const app = express();
const query = require("./db/customers");

app.use(express.json({ limit: "50mb" }));
const port = 3000;

// Get all customers
app.get("/api/customers", query.getAllCustomers);

// Get customer by id
app.get("/api/customers/:id", query.getCustomerById);

//Add new Customer

app.post("/api/customers",query.addCustomer);
app.listen(port, () => {
  console.log("listening on port 3000");
});
//Deleting a customer Starting 
app.delete("/api/customers/:id",query.deleteCustomer)

//Updating Customer
app.put("/api/customers/:id",query.updateCustomer)
