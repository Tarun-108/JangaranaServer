


const auth = async ( req , res , next ) => {
    try {
        const token = req.header("Authorization").replace('Bearer ' , '')

            if(token!="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdkMTg0NDgwMTY4ZDAwMjMwMjVjMjEiLCJpYXQiOjE2NTIzNjkxODd9.EjmS44a7czHY8DQ9mjFn58A9H37rLQ7QvvR4dRPw-1M") {
                res.status(401).send({
                    error : "Please Authenticate "
                })
            }else {
                next()
            }

    } catch( e ) {
        res.status(401).send({
            error : "Please Authenticate"
        })
    }
}

module.exports = auth