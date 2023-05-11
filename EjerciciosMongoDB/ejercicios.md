# Consultas Restaurantes

1. Escriba una consulta MongoDB para mostrar todos los documentos de la colección restaurantes. 

`db.restaurants.find()`

2. Escribe una consulta MongoDB para mostrar los campos restaurant_id, name, borough y cuisine de todos los documentos de la colección restaurant. 
   
`db.restaurants.find({}, {restaurant_id:1, name:1, borough:1, cuisine:1})`

3. Escriba una consulta MongoDB para mostrar los campos restaurant_id, name, borough y cuisine, pero excluya el campo _id de todos los documentos de la colección restaurant. 

`db.restaurants.find({}, {_id:0, restaurant_id:1, name:1, borough:1, cuisine:1})`

4. Escriba una consulta MongoDB para mostrar los campos restaurant_id, name, borough y zip code, pero excluya el campo _id para todos los documentos de la colección restaurant. 

`db.restaurants.find({}, {_id:0, restaurant_id:1, name:1, borough:1, "address.zipcode":1})`

5. Escriba una consulta MongoDB para mostrar todos los restaurantes que se encuentran en el distrito del Bronx. 

`db.restaurants.find({}, {_id:0, restaurant_id:1, name:1, borough:"Bronx"})`

6. Escriba una consulta MongoDB para mostrar los 5 primeros restaurantes que se encuentran en el distrito de Bronx. 

`db.restaurants.find({},{_id:0,name:1, borough:"Brox"}).limit(5)`

7. Escriba una consulta MongoDB para mostrar los 5 restaurantes siguientes después de omitir los 5 primeros que se encuentran en el distrito de Bronx. 


8. Escriba una consulta MongoDB para encontrar los restaurantes que han obtenido una puntuación superior a 90. 

`db.restaurants.find({"grades.score" : {"$gt" :90}})`

9.  Escribe una consulta en MongoDB para encontrar los restaurantes que han obtenido una puntuación superior a 80 pero inferior a 100. 

`db.restaurants.find({"grades.score" : {$gt: 80, $lt: 100}})`

10. Escriba una consulta MongoDB para encontrar los restaurantes que se ubican en un valor de latitud inferior a -95.754168.

`result`

11. Escribe una consulta MongoDB para encontrar los restaurantes que no preparan ninguna cocina de 'Americana' y su puntuación de grado superior a 70 y latitud inferior a -65.754168. 

`result`

12. Escriba una consulta MongoDB para encontrar los restaurantes que no preparan ninguna cocina de 'Americana' y han obtenido una puntuación superior a 70 y situados en la longitud inferior a -65.754168.
Nota : Realice esta consulta sin utilizar el operador $and. 

`result`

13.  Escriba una consulta MongoDB para encontrar los restaurantes que no preparan ningún tipo de cocina 'americana' y que han obtenido una puntuación 'A' y que no pertenecen al distrito de Brooklyn. El documento debe mostrarse según la cocina en orden descendente. 

`result`

14.  Escribe una consulta MongoDB para encontrar el Id del restaurante, el nombre, el municipio y la cocina de aquellos restaurantes que contengan 'Wil' como tres primeras letras de su nombre. 
    
`result`

15. Escriba una consulta MongoDB para encontrar el Id del restaurante, el nombre, el municipio y la cocina de los restaurantes cuyo nombre contenga "ces" en las tres últimas letras. 

`result`

16. Escriba una consulta MongoDB para encontrar el Id del restaurante, el nombre, el municipio y la cocina de aquellos restaurantes que contengan "Reg" como tres letras en alguna parte de su nombre. 

`result`

17. Escribe una consulta MongoDB para encontrar los restaurantes que pertenecen al distrito del Bronx y preparan platos americanos o chinos. 

`result`

18. Escriba una consulta MongoDB para encontrar el Id del restaurante, el nombre, el barrio y la cocina de los restaurantes que pertenecen a los barrios de Staten Island, Queens, Bronx o Brooklyn. 

`result`

19. Escriba una consulta MongoDB para encontrar el Id del restaurante, el nombre, el barrio y la cocina de aquellos restaurantes que no pertenezcan al barrio de Staten Island, Queens, Bronx o Brooklyn. 

`result`

20. Escriba una consulta en MongoDB para obtener el Id. del restaurante, el nombre, el municipio y la cocina de los restaurantes que hayan obtenido una puntuación no superior a 10. Vaya al editor. 

`result`

21. Escribe una consulta MongoDB para encontrar el Id del restaurante, el nombre y las calificaciones de aquellos restaurantes que obtuvieron una calificación de "A" y puntuaron 11 en una ISOFecha "2014-08-11T00:00:00Z" entre muchas de las fechas de encuestas.. 

`result`

22. Escribe una consulta en MongoDB para encontrar el Id del restaurante, el nombre y las calificaciones de aquellos restaurantes en los que el 2º elemento de la matriz de calificaciones contenga una calificación de "A" y una puntuación de 9 en una ISODate "2014-08-11T00:00:00Z". 

`result`

23. Escriba una consulta MongoDB para encontrar el Id del restaurante, el nombre, la dirección y la ubicación geográfica de aquellos restaurantes en los que el 2º elemento de la matriz coord contenga un valor superior a 42 y hasta 52.. 

`result`

24. Escribir una consulta MongoDB para ordenar el nombre de los restaurantes en orden ascendente junto con todas las columnas. 

`result`

25. Escriba una consulta MongoDB para ordenar el nombre de los restaurantes en orden descendente junto con todas las columnas. 

`result`

26. Escriba una consulta MongoDB para ordenar los nombres de los restaurantes en orden ascendente y para esa misma cocina el distrito debe estar en orden descendente. 

`result`

27. Escribir una consulta MongoDB para saber si todas las direcciones contienen la calle o no. 

`result`

28. Escribir una consulta MongoDB que seleccione todos los documentos de la colección restaurantes donde el valor del campo coord sea Double. 

`result`

29. Escribir una consulta MongoDB que seleccione el Id del restaurante, el nombre y las notas de aquellos restaurantes que devuelvan 0 como resto después de dividir la puntuación entre 7. 

`result`

30. Escribe una consulta MongoDB que encuentre el nombre del restaurante, el barrio, la longitud y la actitud y la cocina para aquellos restaurantes que contengan 'mon' como tres letras en alguna parte de su nombre. 

`result`

31. Escribe una consulta en MongoDB para encontrar el nombre del restaurante, el barrio, la longitud, la latitud y la cocina de aquellos restaurantes que contengan "Mad" en las tres primeras letras de su nombre. 

`result`

32. Escribe una consulta MongoDB para encontrar los restaurantes que tienen al menos una nota con una puntuación inferior a 5. 

`result`

33. Escribe una consulta MongoDB para encontrar los restaurantes que tengan al menos una nota con una puntuación inferior a 5 y que estén situados en el distrito de Manhattan. 

`result`

34. Escribe una consulta en MongoDB para encontrar los restaurantes que tengan al menos una nota inferior a 5 y que estén situados en los distritos de Manhattan o Brooklyn. 

`result`

35. Escribe una consulta MongoDB para encontrar los restaurantes que tienen al menos una nota con una puntuación inferior a 5 y que están situados en el barrio de Manhattan o Brooklyn, y su cocina no es americana. 

`result`

36. Escribe una consulta MongoDB para encontrar los restaurantes que tienen al menos una calificación con una puntuación inferior a 5 y que se encuentran en el distrito de Manhattan o Brooklyn, y su cocina no es americana o china. 

`result`

37. Escribe una consulta MongoDB para encontrar los restaurantes que tienen una calificación con una puntuación de 2 y una calificación con una puntuación de 6. 

`result`

38. Escribe una consulta MongoDB para encontrar los restaurantes que tienen una calificación con una puntuación de 2 y una calificación con una puntuación de 6 y se encuentran en el distrito de Manhattan. 

`result`

39. Escribe una consulta MongoDB para encontrar los restaurantes que tienen una nota con una puntuación de 2 y una nota con una puntuación de 6 y están situados en el distrito de Manhattan.

`result`

40. Escribe una consulta en MongoDB para encontrar el número de restaurantes que han sido calificados en cada mes del año. 

`result`

41. Escribe una consulta MongoDB para encontrar la puntuación media de cada cocina. 

`result`

42. Escribe una consulta MongoDB para encontrar la puntuación más alta de cada cocina.

`result`

43. Escriba una consulta MongoDB para encontrar la puntuación más baja de cada cocina. 

`result`

44. Escribe una consulta MongoDB para encontrar la puntuación media de cada municipio. 

`result`

45. Escriba una consulta MongoDB para encontrar la puntuación más alta de cada municipio. 

`result`

46. Escriba una consulta MongoDB para encontrar la puntuación más baja de cada distrito. 

`result`

47. Escribir una consulta MongoDB para encontrar el nombre y la dirección de los restaurantes que recibieron una calificación de "A" en una fecha determinada. 

`result`

48. Escriba una consulta MongoDB para encontrar el nombre y la dirección de los restaurantes que recibieron una calificación de "B" o "C" en una fecha específica. 

`result`

49. Escribe una consulta MongoDB para encontrar el nombre y la dirección de los restaurantes que tienen al menos una nota 'A' y una nota 'B'. 

`result`

50. Escribe una consulta MongoDB para encontrar el nombre y la dirección de los restaurantes que tienen al menos una calificación 'A' y ninguna calificación 'B'. 

`result`

51. Escriba una consulta MongoDB para encontrar el nombre ,la dirección y las calificaciones de los restaurantes que tienen al menos una calificación 'A' y ninguna calificación 'C'. 

`result`

52. Escribe una consulta MongoDB para encontrar el nombre, la dirección y las calificaciones de los restaurantes que tienen al menos una calificación 'A', ninguna calificación 'B' y ninguna calificación 'C'. 

`result`

53. Escribe una consulta MongoDB para encontrar el nombre y la dirección de los restaurantes que tienen la palabra 'café' en su nombre. 

`result`

54. Escribe una consulta MongoDB para encontrar el nombre y la dirección de los restaurantes cuyo código postal empiece por '10'. 

`result`

55. Escribe una consulta MongoDB para encontrar el nombre y la dirección de los restaurantes que tengan una cocina que empiece por la letra 'B'.

`result`

56. Escribe una consulta MongoDB para encontrar el nombre, la dirección y la cocina de los restaurantes que tienen una cocina que termina con la letra 'y'. 

`result`

57. Escriba una consulta MongoDB para encontrar el nombre, la dirección y la cocina de los restaurantes cuya cocina contenga la palabra "Pizza". 

`result`

58. Escribe una consulta MongoDB para encontrar los restaurantes que han conseguido una puntuación media más alta. 

`result`

59. Escribe una consulta MongoDB para encontrar todos los restaurantes con el mayor número de calificaciones "A". 

`result`

60. Escribir una consulta MongoDB para encontrar el tipo de cocina que tiene más probabilidades de recibir una calificación de "C". 

`result`

61. Escribe una consulta MongoDB para encontrar el restaurante que tiene la puntuación media más alta para lacuisine "turca". 

`result`

62. Escriba una consulta MongoDB para encontrar los restaurantes que obtuvieron la puntuación total más alta. 

`result`

63. Escribe una consulta MongoDB para encontrar todos los restaurantes chinos de Brooklyn. 

`result`

64. Escribe una consulta MongoDB para encontrar el restaurante con la fecha de calificación más reciente. 

`result`

65. Escribe una consulta MongoDB para encontrar los 5 restaurantes con la puntuación media más alta para cada tipo de cocina, junto con sus puntuaciones medias. 

`result`

66. Escribe una consulta MongoDB para encontrar los 5 restaurantes de cada municipio con mayor número de calificaciones "A". 

`result`