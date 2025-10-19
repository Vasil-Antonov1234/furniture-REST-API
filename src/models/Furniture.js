import { Schema, model } from "mongoose";

const furnitureSchema = new Schema({
    make: {
        type: String,
        required: [true, "Make is required!"],
        minLength: [4, "Make is too short!"]
    },
    model: {
        type: String,
        required: [true, "Model is required!"],
        minLength: [4, "Model is too short!"]
    },
    year: {
        type: Number,
        required: [true, "Year is required!"],
        min: [1950, "Year must be above 1950!"],
        max: [2050, "Year cannot be above 2050!"]
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minLength: [10, "Description is too short!"]
    },
    price: {
        type: Number,
        required: [true, "Price is required!"],
        min: [0, "Price must be a positive number!"]
    },
    img: {
        type: String,
        required: [true, "Image url is required!"],
    },
    material: String
});

const Furniture = model("Furniture", furnitureSchema);

export default Furniture;