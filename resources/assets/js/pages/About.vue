<template>
    <section class="about">
        <div class="about__wrapper">
            <div class="about__text">
                <h1 class="about__title">Jennifer Ward</h1>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci amet corporis deserunt dignissimos ex exercitationem,
                incidunt maiores nesciunt odio possimus quo quos sed temporibus totam voluptatibus.
                Incidunt laudantium nisi vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Impedit labore nam porro quae qui quos repellendus tempore veniam!
                    Enim labore magni maiores necessitatibus porro quia repudiandae suscipit vel? Accusamus, expedita!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci amet corporis deserunt dignissimos ex exercitationem,
                incidunt maiores nesciunt odio possimus quo quos sed temporibus totam voluptatibus.
                Incidunt laudantium nisi vero! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Impedit labore nam porro quae qui quos repellendus tempore veniam!
                    Enim labore magni maiores necessitatibus porro quia repudiandae suscipit vel? Accusamus, expedita!
                </span>
            </div>
            <div class="about__shape">
                <div class="about__image"></div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .about {
        height: 100%;
        padding-top: 5%;

        &__wrapper {
            width: 75%;
            margin: 0 auto;
            height: 100%;
        }

        &__title {
            font-weight: 400;
            padding-bottom: 1rem;
        }

        &__text {
            display: inline-block;
            /*float: right;*/
            padding-top: 5rem;
            font-size: 1.5rem;
            width: 60%;

        }

        &__shape {
            display: inline-block;
            /*float: left;*/
            position: relative;
            width: 25rem;
            height: 25rem;
            -webkit-shape-outside: circle(50% at 50% 50%);
            shape-outside: circle(50% at 50% 50%);
            -webkit-clip-path: circle(50% at 50% 50%);
            clip-path: circle(50% at 50% 50%);
            backface-visibility: hidden;
        }

        &__image {
            background-image: url(../../images/profile.jpg);
            background-size: cover;
            height: 100%;
            width: 100%;
        }
    }
</style>