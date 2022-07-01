import mongoose from "mongoose";

const ItemSchema = mongoose.Schema(
    {
        name: {type:String, required: true},
        description: {type:String, required: true},
        image: {type:String, required: true},
        bin: {type: mongoose.Schema.Types.ObjectId, ref: 'bins', required: true}
    },
    {
        timestamp: true
    }
);

var ItemModel = mongoose.model("items", ItemSchema);

export default ItemModel;