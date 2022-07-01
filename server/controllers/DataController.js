import BinModel from "../models/BinsModel.js";
import ItemModel from "../models/ItemModel.js";

export const getAllBins = async (req, res) =>
{
    try{
        res.status(200).json(BinModel.find());
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

export const getAllItems = async(req, res) =>
{
    try{
        res.status(200).json(ItemModel.find());
    }catch(error){
        res.status(500).json({message: error.message});
    }
}