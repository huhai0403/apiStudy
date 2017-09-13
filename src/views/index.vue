<template>
    <div class="main">
        <Carousel class="index" v-model="value1">
            <CarouselItem>
                <div class="demo-carousel"><router-link to="/spb">1</router-link></div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel"><router-link to="/artic">2</router-link></div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">3</div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">4</div>
            </CarouselItem>
        </Carousel>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value1: 0
            }
        }
    }
</script>
<style scoped>
    .index {height: 400px;width: 100%;}
    .demo-carousel{height: 400px;background: rgba(0,0,0,0.3);text-align: center;font-size: 40px;line-height: 400px;}
</style>