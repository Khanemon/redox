const testController = (req, res) =>{
    res.status(200).send({
        message: "Welcome to my website",
        success: true,
        user: "Welcome again Emon Khan",
    });
};

module.exports = {testController};