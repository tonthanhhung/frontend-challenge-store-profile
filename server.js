const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const request = require("request");
const middlewares = jsonServer.defaults();
const multer = require("multer");
const ImgurStorage = require("@trevorblades/multer-storage-imgur");
require("dotenv").config();

server.use(middlewares);
server.use(jsonServer.bodyParser);

/***
 * This is simulation for this requirement;
 * Store’s name and RedInvoice’s name (company name in red invoice) will have server
   side validation of uniqueness
 */
server.use((req, res, next) => {
  if (req.method === "PUT") {
    const stores = router.db.get("stores").value();
    if (
      stores.find(
        store => store.id !== req.body.id && store.name === req.body.name
      )
    ) {
      return res.status(400).send("Store name is already exist");
    }

    if (
      stores.find(
        store =>
          store.id !== req.body.id &&
          store.redInvoice.name === req.body.redInvoice.name
      )
    ) {
      return res.status(400).send("Company name is already exist");
    }
  }
  next();
});

/**
 * This is a borrowed api, the return data may not be so trusted
 */
server.get("/cities", (req, res) => {
  request("https://thongtindoanhnghiep.co/api/city").pipe(res);
});
server.get("/districts", (req, res) => {
  const cityId = req.query["city"];
  const url = `https://thongtindoanhnghiep.co/api/city/${cityId}/district`;
  request(url).pipe(res);
});

const imgurClientId = process.env.IMGUR_CLIENT_ID;
server.post(
  "/image-upload",
  multer({
    storage: ImgurStorage({ clientId: imgurClientId })
  }).single("image"),
  (req, res) => {
    res.send(req.file.data.link);
  }
);

server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
