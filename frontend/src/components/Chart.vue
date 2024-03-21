<template>
    <div>
    <canvas
        ref="barChart"
    />
    </div>
</template>

<script>
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)
import { reactive } from "vue";
import axios from 'axios'

export default {
    data:() => ({
        type: 'bar',
        data: {
            labels: ['샌드버그 관련 기사', '저장한 기사'],
            datasets: [{
            label: '기사 분류',
            data: [ 12, 19 ],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
            }]
        },
        options: {
            scales: {
            y: {
                beginAtZero: true
            }
            }
        }
    }),
    mounted(){
        this.createChart()
    },
    methods:{
        createChart(){
            new Chart(this.$refs.barChart, {
            type:'bar',
            data:this.data,
            options:this.options
            })

        },
        createChart1(){
            new Chart(this.$refs.pieChart, {
            type:'pie',
            data:this.data,
            options:this.options
            })

        },

    },

    setup() {
        const state = reactive({ 
            datas: [],
        });

        axios.get("/crawl/chart/data",{
        }).then((res)=>{
            state.datas = res.data;
            console.log( state.datas);
        });
    },
}
</script>