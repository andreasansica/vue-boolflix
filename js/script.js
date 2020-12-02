
const apiFilm = 'https://api.themoviedb.org/3/discover/movie?api_key=cdc836995bbe4f5d53914d1b44fbad34&query='

var app = new Vue({
  el:'#app',
  data:{
    films:[],
    search_film: "",
  },


  methods:{

    //   CERCO I FILM CON L'INPUT
    addFilm: function(){
      axios.get(apiFilm + this.search_film)
      .then(risposta =>{
        this.films = risposta.data.results
        // console.log(this.films);
    })
  }
}



})
