export const getProducts = (req,res)=>{
      res.status(200).json({"message":"Hello from the backend!"});  
};

export const createProduct = (req,res)=>{
      res.status(201).json({"message":"Product received!"});  
};

export const updateProduct = (req,res)=>{
      res.status(200).json({"message":"Product updated!"});
};

export const deleteProduct = (req,res)=>{
      res.status(200).json({"message":"Product deleted!"});  
};
