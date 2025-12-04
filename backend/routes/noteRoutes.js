import express from 'express';
const router = express.Router();

router.get("/",getNotes);

router.post("/",createNote);

router.put("/:id",updateNote)

router.delete("/:id",deleteNote)

export default router;

