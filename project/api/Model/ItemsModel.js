const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    itemSaleImg: {
        type: String
    },
    ItemName:{
        type: String,
        require:true
    },
    ItemPrice: {
        type: Number,
        require: true
    },
    ItemOwner: {
        type: String,
        require: true
    },
    ItemDetail: {
        type: String,
    },

    date:{
        type: Date,
        default: Date.now
    }
},{
   collection:"ItemsData" 
});

module.exports = mongoose.model('Item', AdminSchema);