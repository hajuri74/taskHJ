<template>
    <header>
        <router-link to="/">Home</router-link>
        <router-link to="/chart">Chart</router-link>
        <router-link to="/info">Info</router-link>
    </header>
</template>

<style lang="scss" scoped>
    header {
        background-color: #fff;
        width: 200px;
        height: 100vh;
        padding: 50px 24px;
        box-sizing: border-box;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(126, 142, 177, 0.12);

        a{
            display: block;
            color: #6c757d;
            margin-bottom: 14px;
            font-size: 18px;
        }
        a:hover{color: black;}
    }
</style>