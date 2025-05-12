// We are making this utility so that each time DB is connected just this function is called. Not again n again try catch block which we used in DB connection code.


const asyncHandler = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve((requestHandler(req,res,next))).catch((err) => next(err))
        // Inside .catch(), there's an arrow function: (err => next(err)). This means that if an error occurs, it gets passed as the argument err to the function.
        // The function calls next(err), which is an Express function used to pass errors to the middleware.
    }
}

export {asyncHandler}


// Same work we did can be done using bottom syntax :-


// It is a higher order function below as it accepts a functon as a paramter. A function that is accepted is passing to another function.

// const asyncHandler = (fn) => {() => {}} // This is also valid and works same as below.

// const asyncHandler = (fn) => async (req,res,next) => {
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message,
//         })
//     }
// }