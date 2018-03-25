<template>
    <section class="home">
        <carousel/>
    </section>
</template>

<script>
    import Carousel from '@/components/Carousel';
    export default {
        components: {Carousel}
    }
</script>

<style lang="scss">
    .home {
        height: 100%;
        padding-top: 5%;
    }
</style>