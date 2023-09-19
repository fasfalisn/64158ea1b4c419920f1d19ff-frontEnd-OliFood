const path = require('path');

module.exports = {
  entry: {
	'Login' : './javascript/Login.js',
	'Signup' : './javascript/Signup.js',
	'Profile' : './javascript/Profile.js',
	'editProfile' : './javascript/editProfile.js',
	'MyProducts' : './javascript/MyProducts.js',
	'CustomerHome' : './javascript/CustomerHome.js',
	'Products' : './javascript/Products.js',
	'OrderSummary' : './javascript/OrderSummary.js',
	'MyOrders' : './javascript/MyOrders.js',
	'EditOrder' : './javascript/EditOrder.js',
	'NewProduct' : './javascript/NewProduct.js',
	'EditProduct' : './javascript/EditProduct.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};