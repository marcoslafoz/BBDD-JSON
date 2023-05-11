# Comandos mongodb

- `use database1` Usar database
- `db.usuario.find({"nombre" : "Marcos"})` Consulta normal
- `db.usuario.find({"horario.dia" : "lunes"})` Consulta de objeto dentro de otro
- `db.restaurants.find().skip(5)` Salta los primeros 5 ressultados
- `db.restaurants.find().limit(5)`  Muestra solo los 5 primeros
- `db.restaurants.find({"grades.score" : {$gt: 80, $lt: 100}},{})` Muestra los resultados que grades.score sea > 80 y < 100 