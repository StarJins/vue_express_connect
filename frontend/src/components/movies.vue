<template>
    <div>
        <h1>영화 목록</h1>
        <div v-for="movie in movies" :key="movie.id">
            <img v-bind:src="movie.poster">
            <div>
                <strong>{{movie.name}}</strong>-<i>{{movie.director}}</i> [{{movie.year}}]
                <router-link :to="{name: 'movie', params: {id: movie.id}}">더보기</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.$http.get("api/movies").then((res) => {
            this.movies = res.data;
        });
    },
    data() {
        return {
            movies: []
        };
    }
};
</script>