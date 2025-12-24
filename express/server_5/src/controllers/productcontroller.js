
import productModel from "../models/ProductModel.js";
import sendMail from "../utils/mailer.js"

const getProduct = async(req,res)=>{
   try {
    const {page=1,limit=5,search=""} = req.query;


    // $regex is mongodb operator used for searching text patterns inside stings
    const query = {
        title:{$regex:search , $options:"i"},

    };
    const product = await productModel.find(query).skip((page-1)*limit).limit(Number(limit))

    const totle = await productModel.countDocuments(query)



    // const product = await productModel.countDocuments()


    res.status(200).json({
        totle,
        page:Number(page),
        pages:Math.ceil(totle/limit),
        product

    })
   } catch (error) {
   res.status(500).send(error)
   }
}

const postProduct = async(req,res)=>{
    try {
        
        const product = await productModel.create(req.body)

        await sendMail({
            to:"gunjkarshraddha6@gmail.com",
            subject:"new product added",
            html:`<h2>please pay your bill</h2>
                  <p><b>Name:</b>${product.title}</p>
                  <p><b>price:</b>${product.price}</p>
                  `
        })




        res.status(201).json({massage:"Product added",product})
    } catch (error) {
        res.status(500).send(error);
    }
}



export {getProduct,postProduct};
