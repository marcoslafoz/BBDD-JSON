use('restaurant')

db.getCollection('restaurants').find({},{_id:0,name:1, borough:"Brox"}).limit(5)