const blogFunctions = require('./functions/blogFunctions')
const testFunctions = require('./functions/testFunctions')
const registerFunctions = require('./functions/registerFunctions')
const getuserFunctions = require('./functions/getuserFunctions')
const getAuthorFunctions= require('./functions/getAuthorFunctions')
const getTagsFunctions= require('./functions/getTagsFunctions')

exports.getAllBlogs = blogFunctions.getAllBlogs;
exports.uploadBlogs = blogFunctions.uploadBlogs;
exports.getTestById = testFunctions.getTests;
exports.postTestResults = testFunctions.postTestResults;
exports.postRegister = registerFunctions.postRegister;
exports.getUserByUid = getuserFunctions.getUserByUid;
exports.getAuthor= getAuthorFunctions.getAuthor;
exports.getTag = getTagsFunctions.getTag;
