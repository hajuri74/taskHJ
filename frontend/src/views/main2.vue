<template>
    <div class="main2">
        <div class="crawlWrap">
            <Chart/>
        </div>
        <div class="crawlWrap">
            <Chart1/>
        </div>
    </div>
</template>

<script>
import Chart from "../components/Chart.vue";
import Chart1 from "../components/Chart1.vue";

export default {
    components:{Chart,Chart1},
    setup() {
        
    },
}
</script>

<style lang="scss" scope>
    .main2{padding: 0 30px;
        box-sizing: border-box; 
        overflow: hidden;
        display: grid; grid-template-columns: 1fr 1fr;
        gap:20px;

        .crawlWrap>div{
            width: 50%;
            position: relative;
            top:50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
    }
</style>