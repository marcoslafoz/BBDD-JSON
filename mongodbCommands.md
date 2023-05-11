# Comandos mongodb

**db.collection.find({FILTRO},{PROYECCIÓN})**

- `use database1` Usar database
- `db.collection.find({"nombre" : "Marcos"})` Consulta normal
- `db.collection.find({"horario.dia" : "lunes"})` Consulta de objeto dentro de otro
- `db.collection.find().skip(5)` Salta los primeros 5 ressultados
- `db.collection.find().limit(5)`  Muestra solo los 5 primeros
- `db.collection.find({"grades.score" : {$gt: 80, $lt: 100}},{})` Muestra los resultados que grades.score sea > 80 y < 100 