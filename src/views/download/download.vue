<template>
    <div>
        <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item index="1" @click="returnhome()">资源列表</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的资源</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3" router="true" @click=" returndownload()">我的下载</el-menu-item>
            <el-menu-item index="4" router="true" >我的资料</el-menu-item>
        </el-menu>

        <div class="demo-image__placeholder">
            <div class="block"  v-for="(site,index) in dataList" :id="site.id" >
                <span class="demonstration">{{site.name}}</span>
                <el-image :src="src"></el-image>
                <el-tooltip class="item" effect="dark" content="打开模型" placement="top">
                    <el-button type="success" icon="el-icon-check" circle @click="open(site.id)"></el-button>
                </el-tooltip>
                <el-tooltip class="item" effect="dark" content="删除模型" placement="top">
                <el-button type="danger" icon="el-icon-delete" circle @click="del(site.id)"></el-button>
                </el-tooltip>
            </div>
        </div>
    </div>
</template>

<script>
    import api from '@/api/api.js';
    import qs from 'qs';
    export default {
        name: "download",
        data() {

            return {
                activeIndex: '1',
                activeIndex2: '1',
                src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                dataList: [],
            };
        },
        created(){
            this.dld();
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            returnhome(){
                this.$router.push('/resource');
            },
            dld(){
                let mythis=this;
                this.$http.get(api.GetList).then(function (response) {
                    mythis.dataList=response;
                    console.log(mythis.dataList);
                }).catch(function (err) {
                    console.log(err)
                })
            },
            open(id){
                this.$http.post(api.Openexe,qs.stringify({ id: id})).then(function (response) {
                }).catch(function (error) {
                    alert("打开失败:"+error);
                    console.log(error);
                })
            },
            del(id){
                let mythis=this;
                this.$http.post(api.Remove,qs.stringify({ id: id})).then(function (response) {
                    // alert("删除成功");
                    mythis.dld();
                }).catch(function (error) {
                    alert("删除失败:"+error);
                    console.log(error);
                })
            },

        }
    }
</script>

<style scoped>
    .demo-image__placeholder{
        width: 100%;
        height: 300px;
    }
    .block{
        float: left;
        width: 20%;
        height: 300px;
        margin: 3% 1%;

    }
</style>
