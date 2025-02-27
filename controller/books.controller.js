
const {errorHandler} = require('../lib/utils.js');
const { book_service } = require('../services/index.js');

// exports.addBook = async (req,res) => {
//     // console.log(req,"REQUEST DATA")
//     try{
//         const response = await book_service.add_book(req.body);
//         console.log("response",response)
//         return res.status(201).send({
//             success:true,
//             message: 'Book added successfully',
//             Books: response
//         })
//     }
//     catch(error)
//     {
//         console.log('error: ', error);
//         errorHandler(res,error);
//     }
// }
// exports.getBooks = async (req,res) => {
//     try{
//         const response = await booksService.getAllBooks(req);
//         console.log("response",response)
//         return res.status(200).send({
//             success:true,
//             message: 'Book Fetched successfully',
//             Books: response
//         })
//     }
//     catch(error)
//     {
//         console.log('error: ', error);
//         errorHandler(res,error);
//     }
// }
// exports.deleteBook = async (req,res) => {
//     try{
//         const response = await book_service.deleteBook(req);
//         console.log("response",response)
//         return res.status(200).send({
//             success:true,
//             message: 'Book deleted succefully',
//             Books: response
//         })
//     }
//     catch(error)
//     {
//         console.log('error: ', error);

//         errorHandler(res,error);
//     }
// }
// exports.getBook = async (req,res) => {
//     try{
//         const response = await book_service.getBookById(req);
//         console.log("response",response)
//         return res.status(200).send({
//             success:true,
//             message: 'Book fetched succefully',
//             Books: response
//         })
//     }
//     catch(error)
//     {
//         console.log('error: ', error);

//         errorHandler(res,error);
//     }
// }
// exports.editBook = async (req,res) => {
//   try{
//       const response = await book_service.editBook(req);
//     //   console.log("response",response)
//       return res.status(200).send({
//           success:true,
//           message: 'Book updated succefully',
//           Books: response
//       })
//   }
//   catch(error)
//   {
//       console.log('error: ', error);
//       errorHandler(res,error);
//   }
// }



class BookController {
    static async addBook(req, res) {
        
            // console.log(req,"REQUEST DATA")
            try{
                const response = await book_service.add_book(req.body);
                console.log("response",response)
                return res.status(201).send({
                    success:true,
                    message: 'Book added successfully',
                    Books: response
                })
            }
            
         catch (error) {
            BookController.handleError(res, error);
      }
    }
  
    static async getBooks(req, res) {
        try{
            const response = await book_service.get_books(req);
            console.log("response",response)
            return res.status(200).send({
                success:true,
                message: 'Book Fetched successfully',
                Books: response
            })
        } catch (error) {
        BookController.handleError(res, error);
      }
    }
    static async deleteBook(req, res) {
        try{
            const response = await book_service.deleteBook(req);
            console.log("response",response)
            return res.status(200).send({
                success:true,
                message: 'Book deleted succefully',
                Books: response
            })
        } catch (error) {
        BookController.handleError(res, error);
      }
    }
    static async getBook(req, res) {
        try{
            const response = await book_service.getBookById(req);
            console.log("response",response)
            return res.status(200).send({
                success:true,
                message: 'Book fetched succefully',
                Books: response
            })
        } catch (error) {
        BookController.handleError(res, error);
      }
    }
    static async editBook(req, res) {
        try{
            const response = await book_service.editBook(req);
          //   console.log("response",response)
            return res.status(200).send({
                success:true,
                message: 'Book updated succefully',
                Books: response
            })
        } catch (error) {
        BookController.handleError(res, error);
      }
    }
  
    static handleError(res, error) {
      console.error(error);
      return errorHandler(res, error);
    }
  }
  
  module.exports = BookController;