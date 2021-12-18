var result = 0;

$(document).on("keypress", "input", function(e){
    if(e.which == 13){
        requestAPI();
        document.getElementById("leftButton").style.visibility="visible";
        document.getElementById("rightButton").style.visibility="visible";
        document.getElementById("leftButton").className = "btn btn-primary disabled"
        result = 0;
            
    }
});


function leftButtonPress() {
    --result
    requestAPI()
    if (result == 0) {
        document.getElementById("leftButton").className = "btn btn-primary disabled"
    }
    if (result <= 49) {
        document.getElementById("rightButton").className = "btn btn-primary"
    }
}

function rightButtonPress() {
    ++result
    requestAPI()
    document.getElementById("leftButton").className = "btn btn-primary"
    if (result == 49) {
        document.getElementById("rightButton").className = "btn btn-primary disabled"
    }
    
}

url = fetch('https://api.jikan.moe/v3/search/anime?q=naruto')
.then(function (response) {
    return response.json();
  })
.then(function (myjson) {

    var airingStatus = document.getElementById("airingStatus")

    document.getElementById("animeTitle").innerHTML = myjson.results[result].title
    document.getElementById("animeCover").src = myjson.results[result].image_url
    document.getElementById("infoTitle").innerHTML = myjson.results[result].title
    document.getElementById("animeInfo").innerHTML = myjson.results[result].synopsis
    document.getElementById("mal").href = `${myjson.results[result].url}`
    airingStatus.innerHTML = myjson.results[result].airing
    document.getElementById("showEpisodes").innerHTML = myjson.results[result].episodes
    if (myjson.results[result].episodes < 100) {
        document.getElementById("showEpisodes").style.fontSize = "x-large"
    }
    document.getElementById("ageRating").innerHTML = myjson.results[result].rated
    if (myjson.results[result].rated == "R+") {
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
        document.getElementById("leftButton").style.visibility="visible";
        document.getElementById("rightButton").style.visibility="visible";
        document.getElementById("animeTitle").innerHTML = myjson.results[result].title
        document.getElementById("animeCover").src = myjson.results[result].image_url
        document.getElementById("infoTitle").innerHTML = myjson.results[result].title
        document.getElementById("animeInfo").innerHTML = myjson.results[result].synopsis
        document.getElementById("mal").href = `${myjson.results[result].url}`
        airingStatus.innerHTML = myjson.results[result].airing
        document.getElementById("showEpisodes").innerHTML = myjson.results[result].episodes
        if (myjson.results[result].episodes < 100) {
            document.getElementById("showEpisodes").style.fontSize = "x-large"
        } else {
            document.getElementById("showEpisodes").style.fontSize = "small"
        }
        document.getElementById("ageRating").innerHTML = myjson.results[result].rated
        if (myjson.results[result].rated == "R+") {
            document.getElementById("ageRating").style.fontSize = "x-large"
        } else {
            document.getElementById("ageRating").style.fontSize = "small"
        }

    })


}

