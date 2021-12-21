const myMongo = require('./mongo')

 exports.addDrink = post =>{
   return myMongo.createDocument('drink', post)
 }
 exports.getDrinks = (x) =>{
 	return myMongo.getEverything('drink', {searchBy: '1'})

}
exports.deleteDrink = (id) =>{
	return myMongo.deleteDocument('drink', id)
}

exports.updateDrink = (newPrice, id) =>{
	console.log(id)
	console.log(newPrice)
	return myMongo.updateDocument('drink', id, newPrice)

}

exports.addCocktail = post =>{
	return myMongo.createDocument('cocktail', post)
  }
  exports.getCocktails = (y) =>{
	  return myMongo.getEverything('cocktail', {searchBy: '1'})
 
 }
 exports.deleteCocktail = (id) =>{
	 return myMongo.deleteDocument('cocktail', id)
 }
 
 exports.updateCocktail = (newPrice, id) =>{
	 console.log(id)
	 console.log(newPrice)
	 return myMongo.updateDocument('cocktail', id, newPrice)
 
 }

 exports.addWhiskey = post =>{
	return myMongo.createDocument('whiskey', post)
  }
  exports.getWhiskeys = (z) =>{
	  return myMongo.getEverything('whiskey', {searchBy: '1'})
 
 }
 exports.deleteWhiskey = (id) =>{
	 return myMongo.deleteDocument('whiskey', id)
 }
 
 exports.updateWhiskey = (newPrice, id) =>{
	 console.log(id)
	 console.log(newPrice)
	 return myMongo.updateDocument('whiskey', id, newPrice)
 
 }
