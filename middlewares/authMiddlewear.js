const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    try {
        const token = req.headers["authorization"].split(" ")[1];
        JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if (err) {
                return res.status(401).send({
                    success: false,
                    message: "Auth failed",
                });
            } else {
                req.body.userID = decode.userID;
                next();
            }
        })
    } catch (error) {
        console.log(error);
        return res.status(401).send({
            success: false,
            error,
            message: "Auth faild",
        });

    }
};