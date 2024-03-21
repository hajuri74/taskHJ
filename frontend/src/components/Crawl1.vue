<template>
    <div class="crawlWrap">
        <div class="title">NEWS URL</div>
        <table class="crawlTable1">
            <tr>
                <th>제목</th>
                <th>저장</th>
            </tr>
            <tr v-for="(data,i) in state.datas" :key="i">
                <td><a class="news" :href="data.link" target="_blank">{{data.title}}</a></td>
                <td><input type="checkbox" v-model="state.saveNum" :value="i"/></td>
            </tr>
        </table>
        <div class="bottomCon">
            <div class="paging">
                <div v-for="(data, i) in state.paging" :key="i">
                    <input @click="nowPaging(data)" type="radio" name="paging" :id='data'><label :for="data">{{data}}</label>
                </div>
            </div>
            <button @click="dataSave()" class="btn btn-primary">저장</button>
        </div>
    </div>
    
    <div class="crawlWrap">
        <div class="title">저장 된 NEWS</div>
        <table>
            <tr>
                <th>제목</th>
                <th>날짜</th>
                <th>삭제</th>
            </tr>
            <tr v-for="(data,i) in state.saveCon" :key="i">
                <td><a :href="data.link" target="_blank">{{data.title}}</a></td>
                <td>{{data.date}}</td>
                <td><input type="checkbox" v-model="state.deleteTitle" :value="data.title"/></td>
            </tr>
        </table>
        <button @click="dataDelete()" class="btn btn-primary crawlDelBtn">삭제</button>
    </div>
</template>

<script>
import { reactive } from "vue";
import axios from 'axios'

export default {
    setup() {
        let nowPage = 1;

        const state = reactive({ 
            datas: [],
            paging: [],
            saveNum: [],
            saveCon: [],
            deleteTitle: [],
        });

        const crawl = (nowPage) =>{
            axios.get("/crawl/"+nowPage,).then((res)=>{
                state.datas = res.data;
                for (let index =  res.data[0].pageFirst; index <= res.data[0].pageLast; index++) {
                    state.paging.push(index);
                }
            })
        }

        const nowPaging = (i)=>{
            state.paging.splice(0);
            crawl(i);
        }

        axios.get("/crawl/save/list").then((res)=>{
            state.saveCon = res.data;
        });

        const dataSave = ()=>{
            let title = [];
            let lknk = [];

            //체크 된 값 모두 가져오기
            let newsClass = document.getElementsByClassName("news");

            for (let index = 1; index <= state.saveNum.length; index++) {
                let num = state.saveNum[index-1];
                title.push(newsClass[num].innerText);
                lknk.push(newsClass[num].href);
            }

            axios.post("/crawl/save",{
                newsTitle:title,
                newsLink:lknk
            }).then((res)=>{
                //state.paging.splice(0);
                state.saveCon = res.data;
            });
        }

        const dataDelete = ()=>{
            axios.post("/crawl/news/delete",{
                title:state.deleteTitle,
            }).then((res)=>{
                state.saveCon = res.data;
            });
        }
    
        crawl(nowPage);
        return{state,nowPaging,dataSave,dataDelete}
    },

}
</script>

<style lang="scss" scoped>
    table {
        width:100%;
        tr:first-of-type {border-bottom: 2px solid #153d77;}
        tr:first-of-type th:nth-of-type(1){padding-left: 8px;}
        tr:first-of-type th:nth-of-type(2){padding-right: 8px;}
        tr:not(:first-of-type){border-bottom: 1px solid #dbdbdb;}
        tr th {
            padding-bottom: 8px;
            font-size: 0.9375rem;
        }
        tr td{
            padding: 8px;
            font-size: 0.9375rem;
        }
    }

    .crawlTable1{tr:nth-of-type(2) {display: none;}}

    .bottomCon{
        display: grid;
        grid-template-columns: 1fr 60px;
        margin-top: 16px;
        
        .paging{
            display: flex;
            gap: 20px;
            justify-content: center;
            margin-top: 4px;

            input[type='radio'],
            input[type='radio']:checked {
                appearance: none;
            }

            input[type='radio']:checked + label{
                text-decoration: underline;
                color: #6c757d;
                cursor: unset;
            }
            
            label{
                cursor: pointer;
                font-size: 0.9375rem;
            }
        }
    }

    .crawlDelBtn{float: right; margin-top: 16px;}
</style>