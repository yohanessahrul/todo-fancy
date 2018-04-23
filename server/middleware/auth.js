const jwt = require('jsonwebtoken')

module.exports = {
    cekAdminRole: function (req, res, next) {
        let getToken = req.headers.token
        let decoded = jwt.verify(getToken, 'risnauli')

        console.log(decoded.username)
        console.log(decoded.role)

        if(decoded.role == 'admin') {
            next()
        } else {
            res.status(400).json({
                message: 'Anda bukan admin !'
            })
        }
        
    }
}