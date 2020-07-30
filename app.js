const express = require('express');

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
	res.status(404).send('<h1>Page Not Found </h1>');
});

app.listen(3000, () => {
	console.log(`Server started on 3000`);
});
