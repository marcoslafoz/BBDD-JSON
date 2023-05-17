use('biblioteca')

//Recuperar las copias de los libros que necesitan ser retirados/comprados de nuevo urgentemente
db.libros.find({ estado: 5 })

//Recupera todos los libros que fueron publicados entre 1980 y 1996
db.libros.find({"anyoPublicacion" : {$gt: 1980, $lt: 1996}})

//Recupera todos los libros de Ficción
db.libros.find({"genero" : { $in: ["Ficción"] }},{})