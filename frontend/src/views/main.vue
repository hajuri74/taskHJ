<template>
    <div class="main">
        <div class="conWrap">
            <Crawl1/>
        </div>

        <div class="conWrap">    
            <div class="crawlWrap">
                <div class="title">Chart</div>
                <div class="chartWrap">
                    <Chart/>
                    <Chart1/>
                </div>
            </div>
            <div class="crawlWrap">
                <div class="title">느낀 점</div>
                <MyInfo/>
            </div>
        </div>
    </div>
</template>

<script>
import Crawl1 from "../components/Crawl1.vue";
import Chart from "../components/Chart.vue";
import Chart1 from "../components/Chart1.vue";
import MyInfo from "../components/MyInfo.vue";

export default {
    components:{Crawl1,Chart,Chart1,MyInfo},
    setup() {
        
    },
}
</script>

<style lang="scss" scope>
    .main {
        padding:0 30px;
        box-sizing: border-box; 
        overflow: hidden;

        .conWrap { display: grid; gap:20px; margin-bottom: 20px;}
        .conWrap:nth-of-type(1){
            grid-template-columns: 1fr 1fr;
        }

        .conWrap:nth-of-type(2){
            grid-template-columns: 60% 1fr;
        }

        .chartWrap{
            display: flex;
            justify-content: space-around;
        }
        .chartWrap>div:nth-of-type(1){
            width: 60%;
        }
        .chartWrap>div:nth-of-type(2){
            width: 35%;
        }
        
    }
</style>
