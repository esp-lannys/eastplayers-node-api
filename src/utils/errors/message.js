module.exports = (error, req, res, next) => {
	res.status(400).json({ status: 'Fail', error: error.message });
};
