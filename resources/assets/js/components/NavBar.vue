<template>
    <nav class="nav-bar">
        <div class="nav-bar__item">
            <router-link class="nav-bar__link" to="/about">About</router-link>
        </div>
        <div class="nav-bar__item">
            <router-link class="nav-bar__link" to="/contact">Contact</router-link>
        </div>
        <div class="nav-bar__item">
            <router-link class="nav-bar__link" to="/writer">Writer</router-link>
        </div>
        <div class="nav-bar__item">
            <router-link class="nav-bar__link" to="/editor">Editor</router-link>
        </div>
    </nav>
</template>

<style lang="scss">
    @import "~#/abstracts/variables";
    .nav-bar {

        &__item {
            display: inline-block;
            width: 24%;
            margin: 1rem 0;

            &:not(:last-child) {
                border-right: 1px solid $color-primary;
            }
        }

        &__link {
            font-size: 1.3rem;
            text-decoration: none;
            text-transform: uppercase;
            line-height: 2.5rem;
        }
    }
</style>