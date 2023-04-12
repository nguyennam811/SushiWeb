const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const MongoClient = require("mongodb").MongoClient;
const cookieParser = require("cookie-parser");
const ImportData = require("./routes/dataImport");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const adminRoute = require("./routes/admin");
const morgan = require("morgan");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

dotenv.config();

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server is running port ${PORT}...`);
});

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const dbName = "sushi";

exports.Connection = async () => {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collections = db.collections();
  return collections;
};

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use(morgan("dev"));

// import products
app.use("/api/import", ImportData);

//get products
app.use("/api/products", productRoutes);

// //get orders
app.use("/api/orders", orderRoutes);

//ROUTES
// app.use("/v1/auth", authRoute);
// app.use("/v1/user", userRoute);//ROUTES
app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);

// // Admin
app.use("/admin/auth", adminRoute);

// // Delete product
app.use("/api/delete", productRoutes);

// //update
app.use("/api/update", productRoutes);

// app.get("/", async (req, res) => {
//   const dt = await Connection()
//     .then(async (collections) => {
//       const result = await collections
//         .find((clt) => clt.collectionName === "products")
//         .find({})
//         .toArray();
//       return result;
//       res.send(result);
//     })
//     .catch(console.error)
//     .finally(() => client.close());
//   res.send(dt);
// });
