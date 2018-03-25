<template>
    <section class="carousel" >
        <div class="carousel__control carousel__control--left" @click="prev">&lang;</div>
        <div class="carousel__gallery" @mouseover="stopSlideshow" @mouseleave="startSlideshow">
            <transition name="carousel__slide">
                <slide :class="['carousel__slide', directionClass]"
                       :key="slides[0].id" :images="slides[0].images"/>
            </transition>
            <div class="carousel__progress">
                <div :class="['carousel__marker', {active: key === slides[0].id-1}]"
                     v-for="(marker, key) in slides.length">.
                </div>
            </div>
        </div>
        <div class="carousel__control carousel__control--right" @click="triggerNext">&rang;</div>
    </section>
</template>

<script>
    import Slide from '@/components/Slide';

    export default {
        components: {Slide},
        data() {
            return {
                slides: [
                    {id: 1, images: ['sew-3', 'sew-4', 'sew-5']},
                    {id: 2, images: ['sew-6', 'sew-7', 'sew-8']},
                    {id: 3, images: ['sew-3', 'sew-4', 'sew-5']},
                    {id: 4, images: ['sew-6', 'sew-7', 'sew-8']},
                    {id: 5, images: ['sew-6', 'sew-7', 'sew-8']},
                    {id: 6, images: ['sew-3', 'sew-4', 'sew-5']},
                    {id: 7, images: ['sew-6', 'sew-7', 'sew-8']},
                ],
                forward: true,
                intervalId: null
            }
        },
        computed: {
            directionClass() {
                return this.forward ? 'slide-right' : 'slide-left';
            }
        },
        methods: {
            prev() {
                this.stopSlideshow();
                this.forward = false;
                setTimeout(() => this.slides.unshift(this.slides.pop()), 100);

                setTimeout(() => this.startSlideshow(), 8000);
            },
            next() {
                this.forward = true;
                setTimeout(() => this.slides.push(this.slides.shift()), 100);

            },

            triggerNext() {
                this.stopSlideshow();
                this.forward = true;
                setTimeout(() => this.slides.push(this.slides.shift()), 100);
            },

            startSlideshow() {
                if (!this.intervalId) {
                    this.intervalId = setInterval(() => {
                        this.next('auto');
                    }, 5000);
                }
            },

            stopSlideshow() {
                clearInterval(this.intervalId);
                this.intervalId = null;

            },
            temp() {
                console.log('mouse over');
            },
            temp2() {
                console.log('mouse left');
            }
        },
        created() {
            this.startSlideshow();
        }
    }
</script>

<style lang="scss">
    @import "~#/abstracts/variables";

    .carousel {
        height: 40rem;
        position: relative;
        &__slide {
            font-size: 10rem;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);

            &-move {
                transition: transform 1s;
            }

            &-enter.slide-right {
                transform: translate(-200%, -50%);
            }

            &-leave-to.slide-right {
                transform: translate(100%, -50%);
            }

            &-enter.slide-left {
                transform: translate(100%, -50%);
            }

            &-leave-to.slide-left {
                transform: translate(-200%, -50%);
            }

            &-enter, &-leave-to {
                opacity: 0;
            }

            &-enter-to,
            &-leave {
                opacity: 1;
                transform: translate(-50%, -50%);
            }

            &-enter-active, &-leave-active {
                transition: all 1s;
            }

            &--showing {
                color: red;
            }
        }

        &__control {

            &::selection {
                background-color: transparent;
            }

            position: absolute;
            font-size: 10rem;
            color: $color-primary;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            transition: transform .2s;
            backface-visibility: hidden;
            z-index: 1000;

            &:hover {
                transform: translateY(-50%) scale(1.5);
            }

            &--left {
                left: 8rem;

            }

            &--right {
                right: 8rem;

            }
        }

        &__gallery {
            margin: 0 auto;
            width: 75%;
            height: 100%;
            position: relative;
            top: 50%;
            transform: translateY(-50%);

        }

        &__image {
            width: 33%;
            background-size: cover;
            padding: 0 2rem;
            &--1 {
            }
            &--2 {
            }
            &--3 {
            }
        }

        &__progress {
            position: absolute;
            font-size: 6rem;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, 50%);

        }
        &__marker {
            display: inline-block;
            transition: all 1s;
            backface-visibility: hidden;

            &.active {
                color: $color-primary;
                transform: scale(1.4) translateY(-.6rem);
            }
        }
    }
</style>