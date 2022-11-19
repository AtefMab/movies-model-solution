function makeMovie(title,duration,releaseDate,imdb){
  return { 
  	title : title,
  	duration : duration,
  	releaseDate : releaseDate,
  	imdb : imdb 
  }
}
var movie1 = makeMovie ( "harry potter",160,"01/01/2020",7.1)
var movie2 = makeMovie ("cindrella", 30, "02/02/2022",1)
var movie3 = makeMovie ("inception",180,"10/10/2012",7)

function displayMovie(obj){
	return "this movie is " + obj.title + " duration is " + obj.duration + " rating is " + obj.imdb

}
displayMovie(movie1)
var movies = [movie1,movie2,movie3]
function displayMovies(array){
	
      for ( var i = 0; i<array.length;i++){
      	 console.log(displayMovie (array[i])) 
          
      } 

}
displayMovies(movies)
function avgDuration(array){
	var result = 0
	for ( var i = 0;i<array.length;i++){
		result+= array[i].duration
	}return Math.floor(result / array.length)

}
avgDuration(movies)
function searchMovies(array,query){
	var newQuery = query.toLowerCase()
	for(var i =0;i<array.length;i++){
		var title = array[i].title.toLowerCase()
		if(title.includes(newQuery)){
			return true 
		}
		 

	}
      return false

}
searchMovies(movies)


