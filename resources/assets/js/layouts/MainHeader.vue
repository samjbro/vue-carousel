<template>
    <section class="main-header">
        <div class="main-header__title" @click="goHome">
            <h1 class="main-header__logo">Jennifer Ward</h1>
            <h2 class="main-header__subtitle">Editor and Writer</h2>
        </div>
        <nav-bar/>
    </section>
</template>

<script>
    import NavBar from '@/components/NavBar';

    export default {
        components: {NavBar},

        methods: {
            goHome() {
                this.$router.push('/');
            }
        }
    }
</script>

<style lang="scss">
    @import "~#/abstracts/variables";

    .main-header {
        margin: 0 auto;
        height: $header-height;
        text-align: center;
        padding-top: 5rem;
        width: 75%;

        > * {
            border-bottom: 2px solid $color-primary;
        }

        &__title {
        border-top: 2px solid $color-primary;
            padding: 3rem 0;
            cursor: pointer;

        }
        &__logo {
            text-transform: uppercase;
            font-weight: 300;
            font-size: 3.5rem;
            font-family: $font-primary

        }
        &__subtitle {
            color: $color-primary;
            font-size: 3rem;
            font-weight: 100;
            font-family: $font-secondary;
        }
    }
</style>