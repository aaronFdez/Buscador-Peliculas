Vue.component('movie', {
    template: '#single-movie',
    props: ['selectedMovie']
});

var vm = new Vue({
    el: '#root',
    data: {
        title: 'Movues: find your tonight\'s plan',
        selectedMovie: {}
    },
    mounted: function () {
        this.searchMovie('matrix reloaded');
    },
    methods: {
        searchMovie: function(movie) {
            fetch('http://www.omdbapi.com/?apikey=b9aa932b&t=' + movie).then(function(response) {
                return response.json();
            }).then(function(json) {
                this.selectedMovie = json;
            }.bind(this));
        }
    }
});



fetch('http://www.omdbapi.com/?apikey=b9aa932b&t=' + movie)