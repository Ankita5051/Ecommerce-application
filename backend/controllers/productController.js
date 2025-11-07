
import {v2 as cloudinary} from "cloudinary";
import productModel from "../models/productModel.js";
// Add product 

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestSeller
    } = req.body;

    // Extract files
    const image1 = req.files.image1?.[0];
    const image2 = req.files.image2?.[0];
    const image3 = req.files.image3?.[0];
    const image4 = req.files.image4?.[0];

    // // Convert to array and filter undefined
    // const images = [image1, image2, image3, image4].filter(item => item !== undefined);

    // Upload to Cloudinary
    // const imagesUrl = await Promise.all(
    //   images.map(async (item) => {
    //     const result = await cloudinary.uploader.upload(item.path, {
    //       resource_type: 'image'
    //     });
    //     return result.secure_url;
    //   })
    // );

    const images = [image1, image2, image3, image4].filter(Boolean);
    const imagesUrl = images.map(file => file.path); // Cloudinary gives the URL as `file.path`

    const productData = {
        name,
        description,
        category,
        price:Number(price),
        subCategory,
        bestSeller:bestSeller==='true'?true:false,
        sizes:JSON.parse(sizes),
        image:imagesUrl,
        date:Date.now()
    }

    const product = new productModel(productData);
    await product.save();

    res.status(200).json({
      success: true,
      message: 'Product uploaded successfully',
      data: product
    });
  } catch (error) {
    console.error('Upload Error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};


// remove product
const removeProduct = async(req,res) =>{
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Product Removed."})
    } catch (error) {
        console.error('remove Error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
}

// get Product list
const listProducts = async(req,res) =>{
    try {
         const products = await productModel.find({});
         res.json({success:true,products});
    } catch (error) {
        console.error('Upload Error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
}

// Get a product details
const singleProduct = async(req,res) =>{

    try {

        const {productId} = req.body;
        const product=await productModel.findById(productId)
        res.json({success:true,message:"Product detail fetched.",product})
    } catch (error) {
        console.error('Fetching Error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
}

export {addProduct,removeProduct,listProducts,singleProduct}