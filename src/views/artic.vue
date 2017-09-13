<template>
    <div class="main clearfix" style="overflow: hidden;position: relative;min-height: 1000px;">
        <div style="position: absolute;left: 0;top: 0;">
            <Row>
                <Col span="8">
                <Menu :theme="theme2" accordion>
                    <Submenu v-for="(item,index) in menu" :name="index" :key="index">
                        <template slot="title">
                            <Icon type="ios-paper"></Icon>
                            {{item.name}}
                        </template>
                        <MenuItem class="menu_item" v-for="(title,i) in item.children" :name="index+'-'+i" :key="index+'-'+i">{{title.name}}</MenuItem>
                    </Submenu>
                </Menu>
                </Col>
            </Row>
        </div>
        <div class="" style="width:100%;padding-left: 250px;height: 500px;">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                theme2: 'dark',
                menu:''
            }
        },
        methods:{
            getInit(){
                let _this = this;
                if(!this.$store.state.articMenu){
                    this.$store.state.axios({
                        url:this.$store.state.cmnUrl+'/v1/cmn/category/list',
                        method:'get',
                        params:{'id':1}
                    }).then(function (response) {
                        _this.menu = response.data.rows;
                        console.log(_this.menul)
                        if(response.data.err_code==0){
                            for(let i=0;i<_this.menu.length;i++){
                                if(_this.menu[i].children.length>8){
                                    _this.menu[i].children = Object.keys(_this.menu[i].children).map(key=> _this.menu[i].children[key]).slice(0,7);
                                }
                            }
                        }else {
                            _this.$router.push('/')
                        }
                    })
                }
            }
        },
        created(){
            this.getInit();
        }
    }
</script>

<style scoped>
.menu_item{width: 240px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;display: block;}
</style>