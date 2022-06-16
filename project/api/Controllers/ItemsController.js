const Items = require("../Model/ItemsModel");
const mongoose = require("mongoose");

exports.GetItem = async (req, res) =>{
  try {
      const items = await Items.find();
      res.json(items);
  } catch (err) {
      res.json({ message: err });
  }
};

exports.CreateItem = async (req, res) => {
  const url = req.protocol + "://" + req.get("host");
  const item = new Items({
    _id: new mongoose.Types.ObjectId(),
    ItemName: req.body.ItemName,
    ItemPrice: req.body.ItemPrice,
    ItemOwner: req.body.ItemOwner,
    ItemDetail: req.body.ItemDetail,
    itemSaleImg: url + "/public/" + req.file.filename,
  });
  try {
    const savedItem = await item.save().then((result) => {
      res.status(201).json({
        message: "User registered successfully!",
        userCreated: {
          _id: result._id,
          itemSaleImg: result.itemSaleImg,
          ItemName: result.ItemName,
          ItemPrice: result.ItemPrice,
          ItemOwner: result.ItemOwner,
          ItemDetail: result.ItemDetail,
        },
      });
    });
    res.json(savedItem);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.GetItemById = (req, res) => {
  Items.findById(req.params.itemId, function (err, response) {
    if (err) {
      res.status(201).json({
        code: 201,
        message: "Error From GetItemById",
      });
    } else {
      res.status(200).json({
        code: 200,
        message: "GetItemById Successfully!",
        data: response,
      });
    }
  });
};

exports.DeleteItem = (req, res) => {
  Items.remove({ _id: req.params.itemId }, function (err, response) {
    if (err) {
      res.status(201).json({
        code: 201,
        message: "Error From DeleteItem",
      });
    } else {
      res.status(200).json({
        code: 200,
        message: "DeleteItem Successfully!",
        data: response,
      });
    }
  });
};

exports.UpdateItem = async (req, res) => {
  const url = req.protocol + "://" + req.get("host");
  const UpdateItem = {
    ItemName: req.body.ItemName,
    ItemPrice: req.body.ItemPrice,
    ItemOwner: req.body.ItemOwner,
    ItemDetail: req.body.ItemDetail,
    itemSaleImg:  url + "/public/" + req.file.filename,
  };
  Items.findByIdAndUpdate(
    { _id: req.params.itemId },
    UpdateItem,
    function (err, response) {
      if (err) {
        res.status(201).json({
          code: 201,
          message: "Error Update Data",
        });
      } else {
        res.status(200).json({
          code: 200,
          message: "Update Data Successfully!",
          data: response,
        });
      }
    }
  );
};
