export const getNotes = (req,res)=>{
      res.status(200).json({"message":"Hello from the backend!"});  
};

export const createNote = (req,res)=>{
      res.status(201).json({"message":"Note received!"});  
};

export const updateNote = (req,res)=>{
      res.status(200).json({"message":"Note updated!"});
};

export const deleteNote = (req,res)=>{
      res.status(200).json({"message":"Note deleted!"});  
};
