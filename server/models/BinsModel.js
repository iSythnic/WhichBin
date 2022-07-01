import mongoose from 'mongoose';

const BinSchema = mongoose.Schema(
    {
        name: {type: String, required: true, unique: true},
        description: {type: String, required: true}, 
        items: [{type: mongoose.Schema.Types.ObjectId, ref: 'items'}]
    },
    {
        timestamps: true
    }
);

var BinModel = mongoose.model("bins", BinSchema);

export default BinModel;
