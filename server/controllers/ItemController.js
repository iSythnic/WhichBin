import BinModel from "../models/BinsModel.js";
import ItemModel from "../models/ItemModel.js";

export const createItem = async (req, res) =>
{
    const {name, description, bin} = req.body;
    const image = req.file.originalname;
    const item = ItemModel({name, description, bin, image});
    try{
        await item.save();
        res.status(200).json(item);
    }catch(error)
    {
        res.status(500).json({message: error.message});
    }

}

export const getItem = async(req, res) =>
{
    const id = req.params.id;
    try{
        const item = await ItemModel.findById(id);
        res.status(200).json(item);
    }catch(error)
    {
        res.status(500).json({message: error.message});
    }
}

export const getItemBySearch = async(req, res) =>
{
    const {searchQuery} = req.query;

    try{
        const item = await ItemModel.find({name: {$regex: `^${searchQuery}`, $options: 'i'}});
        res.status(200).json({data: item});
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

export const updateItem = async(req, res) =>
{
    const id = req.params.id;
    try{
        const item = await ItemModel.findByIdAndUpdate(id, {
            name: req.body.name,
            description: req.body.description,
            bin: req.body.bin,
            image: req.file.originalname
        }, {new: true});
        res.status(200).json(item);
    }catch(error)
    {
        res.status(500).json({message: error.message});
    }
}

export const deleteItem = async(req, res) =>
{
    const id = req.params.id;
    try{
        await ItemModel.findByIdAndDelete(id);
        res.status(200).json({message: `Sucessfully deleted ${id}`});
    }catch(error){
        res.status(500).json({message: error.message});
    }
}