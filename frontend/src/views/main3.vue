<template>
    <div class="main3">
        <div class="crawlWrap">
            <div class="title">느낀 점</div>
            <MyInfo/>
        </div>
    </div>
</template>

<script>
import MyInfo from "../components/MyInfo.vue";

export default {
    components:{MyInfo},
    setup() {
        
    },
}
</script>

<style lang="scss" scope>
    .main3{padding: 0 30px;
        box-sizing: border-box; 
        overflow: hidden;
        display: grid; grid-template-columns: 1fr;

        // .crawlWrap>div{
        //     width: 50%;
        // }
    }
</style>