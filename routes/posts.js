

const posts=require('../posts') 

exports.loadRoutes = app =>{


	app.get('/drink/:searchBy', (req, res) => {
		posts.getDrinks(req.params.searchBy).then(data=>{
			res.send(data)
		})
	})


	app.post('/drink',async (req,res)=>{
		var form = new multiparty.Form();
		form.parse(req, async function(err, fields, files) {
			const post = {
				name: fields?.name[0] ||'',
				glassType: fields?.glassType[0] || '', 
				price: fields?.price[0] || '',
				alcohol: fields?.alcohol[0] || '',
				searchBy: fields?.searchBy[0] || '',

			}
			posts.addDrink(post).then(data=>{
				res.send(data)
			})
		});
	})
	app.delete('/drink/:id', (req,res)=>{
		posts.deleteDrink(req.params.id).then(data=>{
			res.send(data)
		})
	})


	app.put('/drink/edit-drink/:id',async (req,res)=>{
		var form = new multiparty.Form();
		form.parse(req, async function(err, fields, files) {
			const price = fields?.price[0] || ''
			posts.updateDrink(price, req.params.id).then(data=>{
				res.send(data)
			})
		});
	})


	




	app.get('/cocktail/:searchBy', (req, res) => {
		posts.getCocktails(req.params.searchBy).then(data=>{
			res.send(data)
		})
	})


	app.post('/cocktail',async (req,res)=>{
		var form = new multiparty.Form();
		form.parse(req, async function(err, fields, files) {
			const post = {
				name: fields?.name[0] ||'',
				glassType: fields?.glassType[0] || '', 
				price: fields?.price[0] || '',
				alcohol: fields?.alcohol[0] || '',
				searchBy: fields?.searchBy[0] || '',

			}
			posts.addCocktail(post).then(data=>{
				res.send(data)
			})
		});
	})
	app.delete('/cocktail/:id', (req,res)=>{
		posts.deleteCocktail(req.params.id).then(data=>{
			res.send(data)
		})
	})


	app.put('/cocktail/edit-drink/:id',async (req,res)=>{
		var form = new multiparty.Form();
		form.parse(req, async function(err, fields, files) {
			const price = fields?.price[0] || ''
			posts.updateCocktail(price, req.params.id).then(data=>{
				res.send(data)
			})
		});
	})






	app.get('/whiskey/:searchBy', (req, res) => {
		posts.getWhiskeys(req.params.searchBy).then(data=>{
			res.send(data)
		})
	})


	app.post('/whiskey',async (req,res)=>{
		var form = new multiparty.Form();
		form.parse(req, async function(err, fields, files) {
			const post = {
				name: fields?.name[0] ||'',
				glassType: fields?.glassType[0] || '', 
				price: fields?.price[0] || '',
				alcohol: fields?.alcohol[0] || '',
				searchBy: fields?.searchBy[0] || '',

			}
			posts.addWhiskey(post).then(data=>{
				res.send(data)
			})
		});
	})
	app.delete('/whiskey/:id', (req,res)=>{
		posts.deleteWhiskey(req.params.id).then(data=>{
			res.send(data)
		})
	})


	app.put('/whiskey/edit-drink/:id',async (req,res)=>{
		var form = new multiparty.Form();
		form.parse(req, async function(err, fields, files) {
			const price = fields?.price[0] || ''
			posts.updateWhiskey(price, req.params.id).then(data=>{
				res.send(data)
			})
		});
	})
}














