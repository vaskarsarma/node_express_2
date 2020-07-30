const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
	res.send(
		'<html><body><h1>Add Product</h1><form action="/admin/product" method="POST"><input type="text" name="title"/><button type="submit">Add Product</button></form></body></html>',
	);
});

router.post('/product', (req, res) => {
	console.log(req.body);
	res.redirect('/');
});

module.exports = router;
