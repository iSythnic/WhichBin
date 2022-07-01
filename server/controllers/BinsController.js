import BinModel from "../models/BinsModel.js";
import express, { json } from 'express';

export const getBin = async(req, res) =>
{
    const name = req.params.name;

    try{
        const bin = await BinModel.findOne({name: name});
        res.status(200).json(bin);
    }catch(error)
    {
        res.status(500).json({message: error.message});
    }
}

export const createBin = async(req, res) =>
{
    const {name, description, items} = req.body;
    const newBin = BinModel({name, description, items});

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
        const bin = await BinModel.findByIdAndUpdate(id, req.body, {new: true});
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