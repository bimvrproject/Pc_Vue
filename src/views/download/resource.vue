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
        <el-menu-item index="1">资源列表</el-menu-item>
        <el-submenu index="2">
            <template slot="title">我的资源</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3" router="true" @click=" returndownload()">我的下载</el-menu-item>
        <el-menu-item index="4" router="true" >我的资料</el-menu-item>
        <div class="search">
            <el-select
                    v-model="value"
                    multiple
                    filterable
                    remote
                    reserve-keyword
                    placeholder="请输入关键词"
                    :remote-method="remoteMethod"
                    :loading="loading">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </div>

    </el-menu>



    <div class="demo-image__placeholder">
        <div class="block"  v-for="(site,index) in dataList" :modelid="site.id">
            <span class="demonstration">{{site.name}}</span>
            <el-image :src="src"></el-image>
            <el-tooltip class="item" effect="dark" content="下载到本地跟清晰" placement="top">
                <el-button type="primary" round @click="down(site.id)" >下载模型</el-button>
            </el-tooltip>

        </div>
    </div>
    </div>
</template>

<script>
    import api from '@/api/api.js';
    import qs from 'qs';
    export default {
        name: "resource",

        mounted() {
            this.list = this.states.map(item => {
                return { value: item, label: item };
            });
        },
        created(){
            this.dld();
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            returndownload() {
                this.$router.push('/download');
            },
            remoteMethod(query) {
                if (query !== '') {
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        this.options = this.list.filter(item => {
                            return item.label.toLowerCase()
                                .indexOf(query.toLowerCase()) > -1;
                        });
                    }, 200);
                } else {
                    this.options = [];
                }
            },
            dld(){
                let mythis=this;
                this.$http.get(api.GetAllList).then(function (response) {
                    mythis.dataList=response;
                    console.log(mythis.dataList);
                }).catch(function (err) {
                    console.log(err)
                })
            },
            down(id){
                this.$http.post(api.Download,qs.stringify({ modelid: id})).then(function (response) {
                    alert("下载成功");
                }).catch(function (error) {
                    alert("下载失败:"+error);
                  console.log(error);
                })
            },
            // test(index){
            //     var josn={id:index};
            //     console.log(josn)
            //     this.$http.post(api.Test,qs.stringify({ modelid: index+1})).then(function (response) {
            //
            //     }).catch(function (error) {
            //         console.log(error);
            //     })
            //     console.log(index)
            // },
        },
        data() {

            return {
                value: '',
                modelid:'',
                activeIndex: '1',
                activeIndex2: '1',
                src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                dataList: [],
            };
        },
    }
</script>

<style scoped>
    .demo-image__placeholder{
        width: 100%;
        height: 300px;
    }
.block {
    float: left;
    width: 20%;
    height: 300px;
    margin: 3% 1%;

}
    .search{
        margin: 10px auto;
    }
</style>
