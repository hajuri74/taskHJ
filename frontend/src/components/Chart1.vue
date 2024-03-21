<template>
    <div>
    <canvas
        ref="pieChart"
    />
    </div>
</template>

<script>
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

export default {

    data:() => ({
        type: 'pie',
        data: {
            labels: ['샌드버그 관련 기사', '저장한 기사'],
            datasets: [{
            label: '기사 분류',
            data: [ 12, 19 ],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
            ],
                hoverOffset: 4
            }]
        }
    }),
    mounted(){
        this.createChart()
    },
    methods:{
        createChart(){
            new Chart(this.$refs.pieChart, {
            type:'pie',
            data:this.data,
            options:this.options
            })

        },

    }

    
}
</script>