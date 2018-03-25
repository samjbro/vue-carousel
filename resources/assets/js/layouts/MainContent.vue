<template>
    <section class="main-content">
        <router-view/>
    </section>
</template>

<style lang="scss">
    @import "~#/abstracts/variables";
    .main-content {
        height: calc(100% - #{$header-height} - #{$footer-height});
        margin: 0 auto;
        /*padding-top: 10%;*/
    }
</style>