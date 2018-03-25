<template>
    <section class="slide">
        <div class="slide__image-box">
            <img class="slide__image" :src="getImageUrl(0)" alt="Magazine Cover">
        </div>
        <div class="slide__image-box">
            <img class="slide__image" :src="getImageUrl(1)" alt="Magazine Cover">
        </div>
        <div class="slide__image-box">
            <img class="slide__image" :src="getImageUrl(2)" alt="Magazine Cover">
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            images: {
                type: Array,
                required: true
            }
        },
        methods: {
            getImageUrl(index) {
                return "../../images/" + this.images[index] + ".jpg";
            }
        }
    }
</script>

<style lang="scss">
    @import "~#/abstracts/variables";

    .slide {
        width: 100%;
        margin: 0 auto;

        &__image-box {

            float: left;
            width: 33%;
            padding: 0 2rem;
        }

        &__image {
            width: 100%;
            box-shadow: 1rem 1rem 2rem rgba($color-black, .5);
            cursor: pointer;
            transition: transform .2s;

            &:hover {
                transform: scale(1.2);
            }
        }
    }
</style>