<template>
    <div>
        <h1>상세 목록</h1>
        <div>
            <img v-bind:src="movie.poster">
            <div>
                <strong>{{movie.name}}</strong>-<i>{{movie.director}}</i> [{{movie.year}}]
                <router-link :to="{name: 'movies'}">돌아가기</router-link>
            </div>
            <div>
                {{movie.description}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        const id = this.$route.params.id;
        this.$http.get("/api/movies/" + id).then((res) => {
            this.movie = res.data[0];
        });
    },
    data() {
        return {
            movie: {}
        };
    }
};
</script>