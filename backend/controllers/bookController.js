import Book from "../models/Book.js";
import { isValidObjectId, findDocumentById, checkValidationErrors } from "../utils/index.js";

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.error("Error at getAllBooks", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const getABook = async (req, res) => {
  const { id } = req.params;

  if (isValidObjectId(id, res)) return;

  try {
    const book = await findDocumentById(Book, id, res);
    if (!book) return;

    res.status(200).json(book);
  } catch (error) {
    console.error("Error at getABooks", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const createABook = async (req, res) => {
  try {
    const { title, author } = req.body;

    const existingBook = await Book.findOne({ title, author });

    if (existingBook) {
      return res
        .status(400)
        .json({ error: "A book with same title and author already exist!" });
    }

    const newBook = await Book.create(req.body);

    return res
      .status(201)
      .json({ message: "Book created succesfully", book: newBook });
  } catch (error) {
    // Handle mongoose validation error
    if (error.name === "ValidationError") {
      if (checkValidationErrors(error, res)) return;
    } else {
      console.error("Error at createABook", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
};

const updateABook = async (req, res) => {
  const { id } = req.params;
  const { title, author, description, pageNumber, rating } = req.body;

  if (isValidObjectId(id, res)) return;

  try {
    const book = await findDocumentById(Book, id, res);
    if (!book) return;

    book.title = title || book.title;
    book.author = author || book.author;
    book.description = description || book.description;
    book.pageNumber = pageNumber || book.pageNumber;
    book.rating = rating || book.rating;

    await book.save();

    res.status(200).json({ message: "The Book Updated Succesfully" });
  } catch (error) {
    console.error("Error at updateABook", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteABook = async (req, res) => {

  console.log("req.user",req.user);

  const { id } = req.params;

  if (isValidObjectId(id, res)) return;

  try {
    const book = await findDocumentById(Book, id, res);
    if (!book) return;

    await book.deleteOne();
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Error at deleteABook", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export { getAllBooks, createABook, getABook, updateABook, deleteABook };
