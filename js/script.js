
const apiFilm = 'https://api.themoviedb.org/3/search/movie?api_key=cdc836995bbe4f5d53914d1b44fbad34&query=';

const apiSerie = 'https://api.themoviedb.org/3/search/tv?api_key=cdc836995bbe4f5d53914d1b44fbad34&query=';

var app = new Vue({
  el:'#app',
  data:{
    films:[],
    serieTV : [],
    voto: 5,
    search_film: "",
  },



  methods:{

    //   CERCO I FILM CON L'INPUT
    addFilm: function(){
      axios.get(apiFilm + this.search_film)
      .then(risposta =>{
        this.films = risposta.data.results;
        this.search_film = "";

        //   METTO IL VOTO DA 1 A 5 DIVIDENDOLO PER 2
        this.films.forEach(element =>{
          element.vote_average = Math.ceil(element.vote_average/ 2)
        })

    })


    //   CERCO LE SERIE TV
    axios.get(apiSerie + this.search_film)
    .then(risposta =>{
      this.serieTV = risposta.data.results;

      //   METTO IL VOTO DA 1 A 5 DIVIDENDOLO PER 2
      this.serieTV.forEach(element =>{
        element.vote_average = Math.ceil(element.vote_average/ 2)
      })
    })

    //   RIPRISTINO OUTPUT IN CASO DI NUOVA RICERCA
    this.films = "";
  }
}



})
