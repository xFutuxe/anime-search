
$(document).on("keypress", "input", function(e){
    if(e.which == 13){
        requestAPI();
    }
});

url = fetch('https://api.jikan.moe/v3/search/anime?q=naruto')
.then(function (response) {
    return response.json();
  })
.then(function (myjson) {


    var airingStatus = document.getElementById("airingStatus")

    document.getElementById("animeTitle").innerHTML = myjson.results[0].title
    document.getElementById("animeCover").src = myjson.results[0].image_url
    document.getElementById("infoTitle").innerHTML = myjson.results[0].title
    document.getElementById("animeInfo").innerHTML = myjson.results[0].synopsis
    document.getElementById("mal").href = `${myjson.results[0].url}`
    airingStatus.innerHTML = myjson.results[0].airing
    document.getElementById("showEpisodes").innerHTML = myjson.results[0].episodes
    if (myjson.results[0].episodes < 100) {
        document.getElementById("showEpisodes").style.fontSize = "x-large"
    }
    document.getElementById("ageRating").innerHTML = myjson.results[0].rated
    if (myjson.results[0].rated == "R+") {
        document.getElementById("ageRating").style.fontSize = "x-large"
    }
    
})



function requestAPI () {
    var value = document.getElementById("inputBox").value
    var airingStatus = document.getElementById("airingStatus")


    url = fetch('https://api.jikan.moe/v3/search/anime?q='+value+'')
    .then(function (response) {
	    return response.json();
	  })
    .then(function (myjson) {
        document.getElementById("animeTitle").innerHTML = myjson.results[0].title
        document.getElementById("animeCover").src = myjson.results[0].image_url
        document.getElementById("infoTitle").innerHTML = myjson.results[0].title
        document.getElementById("animeInfo").innerHTML = myjson.results[0].synopsis
        document.getElementById("mal").href = `${myjson.results[0].url}`
        airingStatus.innerHTML = myjson.results[0].airing
        document.getElementById("showEpisodes").innerHTML = myjson.results[0].episodes
        if (myjson.results[0].episodes < 100) {
            document.getElementById("showEpisodes").style.fontSize = "x-large"
        } else {
            document.getElementById("showEpisodes").style.fontSize = "small"
        }
        document.getElementById("ageRating").innerHTML = myjson.results[0].rated
        if (myjson.results[0].rated == "R+") {
            document.getElementById("ageRating").style.fontSize = "x-large"
        } else {
            document.getElementById("ageRating").style.fontSize = "small"
        }

    })


}

