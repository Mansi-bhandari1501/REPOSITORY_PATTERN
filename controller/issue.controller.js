// import { errorHandler } from "../lib/utils.js";
// import { bookService } from "../service/book.service.js";
// const {bookService} =require('../service/')
const {errorHandler} = require('../lib/utils.js');
const { issue_service } = require('../services/index.js');


// exports.IssueBook = async (req,res) => {
//     // console.log(req,"REQUEST DATA")
//     try{
//         const response = await issueService.addNewIssue(req);
//         console.log("response",response)
//         return res.status(201).send({
//             success:true,
//             message: 'IssueBook added successfully',
//             Issue: response
//         })
//     }
//     catch(error)
//     {
//         console.log('error: ', error);
//         errorHandler(res,error);
//     }
// }
// exports.getIssues = async (req,res) => {
//     try{
//         const response = await issueService.getAllIssue(req);
//         console.log("response",response)
//         return res.status(200).send({
//             success:true,
//             message: 'Issue Fetched successfully',
//             Issue: response
//         })
//     }
//     catch(error)
//     {
//         console.log('error: ', error);
//         errorHandler(res,error);
//     }
// }
// exports.deleteIssue = async (req,res) => {
//     try{
//         const response = await issueService.deleteIssue(req);
//         console.log("response",response)
//         return res.status(200).send({
//             success:true,
//             message: 'Issue deleted succefully',
//             Issue: response
//         })
//     }
//     catch(error)
//     {
//         console.log('error: ', error);

//         errorHandler(res,error);
//     }
// }
// exports.getSingleIssue = async (req,res) => {
//     try{
//         const response = await issueService.getIssueById(req);
//         console.log("response",response)
//         return res.status(200).send({
//             success:true,
//             message: 'Issue fetched succefully',
//             Issue: response
//         })
//     }
//     catch(error)
//     {
//         console.log('error: ', error);

//         errorHandler(res,error);
//     }
// }
// exports.editIssue = async (req,res) => {
//   try{
//       const response = await issueService.editIssue(req);
//       console.log("response",response)
//       return res.status(200).send({
//           success:true,
//           message: 'Issue updated successfully',
//           Issue: response
//       })
//   }
//   catch(error)
//   {
//       console.log('error: ', error);
//       errorHandler(res,error);
//   }
// }
// exports.acceptIssue = async (req,res) => {
//   try{
//       const response = await issueService.acceptIssue(req);
//       console.log("response",response)
//       return res.status(200).send({
//           success:true,
//           message: 'Issue updated successfully',
//           Issue: response
//       })
//   }
//   catch(error)
//   {
//       console.log('error: ', error);
//       errorHandler(res,error);
//   }
// }


class IssueController {
    static async IssueBook(req, res) {
        
        try{
            const response = await issue_service.addNewIssue(req.body);
            console.log("response",response)
            return res.status(201).send({
                success:true,
                message: 'IssueBook added successfully',
                Issue: response
            })
        }
            
         catch (error) {
            IssueController.handleError(res, error);
      }
    }
  
    static async getIssues(req, res) {
        try{
            const response = await issue_service.get_all_issue(req);
            console.log("response",response)
            return res.status(200).send({
                success:true,
                message: 'Issue Fetched successfully',
                Issue: response
            })
        } catch (error) {
            IssueController.handleError(res, error);
      }
    }
    static async deleteIssue(req, res) {
        try{
            const response = await issue_service.deleteIssue(req);
            console.log("response",response)
            return res.status(200).send({
                success:true,
                message: 'Issue deleted succefully',
                Issue: response
            })
        } catch (error) {
            IssueController.handleError(res, error);
      }
    }
    static async getSingleIssue(req, res) {
        console.log('req:--------------------------------------------------------------------------------------------------------- ', req.params);
        try{
            const response = await issue_service.getIssueById(req.params);
            console.log("response",response)
            return res.status(200).send({
                success:true,
                message: 'Issue fetched succefully',
                Issue: response
            })
        } catch (error) {
            IssueController.handleError(res, error);
      }
    }
    static async editIssue(req, res) {
        try{
            const response = await issue_service.editIssue(req);
            console.log("response",response)
            return res.status(200).send({
                success:true,
                message: 'Issue updated successfully',
                Issue: response
            })
        } catch (error) {
            IssueController.handleError(res, error);
      }
    }
  
    static async acceptIssue(req, res) {
        try{
            const response = await issue_service.acceptIssue(req);
            console.log("response",response)
            return res.status(200).send({
                success:true,
                message: 'Issue updated successfully',
                Issue: response
            })
        } catch (error) {
            IssueController.handleError(res, error);
      }
    }
  
    static handleError(res, error) {
      console.error(error);
      return errorHandler(res, error);
    }
  }
  
  module.exports = IssueController;