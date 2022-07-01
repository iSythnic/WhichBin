import BinModel from "../models/BinsModel.js";
import express, { json } from 'express';

export const getBin = async(req, res) =>
{
    const id = req.params.id;

    try{
        const bin = await BinModel.findById(id);
        res.status(200).json(bin);
    }catch(error)
    {
        res.status(500).json({message: error.message});
    }
}

export const getBinBySearch = async(req, res) =>
{
    const searchQuery = req.query;
    try{
        const bin = await BinModel.find({name: {$regex: `^${searchQuery}`, $options: 'i'}});
        res.status(200).json({data: bin});
    }catch(error){
        res.status(500).json({message:error});
    }
}
export const createBin = async(req, res) =>
{
    const {name, description, items} = req.body;
    const image = req.file.originalname;
    const newBin = BinModel({name, description, items, image});

    try{
        await newBin.save();
        res.status(200).json(newBin);
    }catch(error)
    {
        res.status(500).json({message: error.message});
    }
}

export const updateBin = async(req, res) =>
{
    const id = req.params.id;
    try{
        const bin = await BinModel.findByIdAndUpdate(id, {
            name: req.body.name,
            description: req.body.description,
            image: req.file.originalname,
            items: req.body.items
        }, {new: true});
        res.status(200).json(bin);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

export const deleteBin = async(req, res) =>
{
    const id = req.params.id;

    try{
        await BinModel.findByIdAndDelete(id);
        res.status(200).json({message: `Sucessfully deleted ${id}`});
    }catch(error)
    {
        res.status(500).json({message: error.message});
    }
}