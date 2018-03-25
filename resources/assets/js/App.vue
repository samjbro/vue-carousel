<template>
    <section class="app">
        <main-header/>
        <main-content/>
        <main-footer/>
    </section>
</template>

<script>
    import MainHeader from '@/layouts/MainHeader';
    import MainContent from '@/layouts/MainContent';
    import MainFooter from '@/layouts/MainFooter';
    export default {
        components: {MainHeader, MainContent, MainFooter}
    }
</script>

<style lang="scss">
    .app {
        height: 100vh;
    }
</style>