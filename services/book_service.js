const { book_repository_obj } = require("../repositories/book_repository");

exports.add_book = async (payload) => {
    console.log('payload: ', payload);
    
    const response = await book_repository_obj.create_book(payload);
    // console.log('response: ', response);
    return response;
};
exports.get_books = async (payload) => {
    console.log('payload: ', payload);
    
    const response = await book_repository_obj.get_all_book(payload);
    // console.log('response: ', response);
    return response;
};