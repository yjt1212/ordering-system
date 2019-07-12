<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   <!--  <p>双向绑定:{{ modelData }}</p>
    <input type="text" v-model="modelData" />
    <a v-bind:href="href_Url">v-bind,绑定属性</a>
    <div :xx123="abcxx">绑定属性,v-bind</div> -->
    <el-row>
      <el-col :span="8">
        <el-tabs>
          <el-tab-pane label="点菜">
            <el-table v-bind:data="goodsListObj">
              <el-table-column prop="goods" label="商品"></el-table-column>
              <el-table-column prop="num" label="数量"></el-table-column>
              <el-table-column prop="price" label="金额"></el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button type="text" size="small"
                    @click="addGoodsFn(scope.row)">添加</el-button>
                  <el-button type="text" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div style="margin-top: 15px;">
              <el-button type="primary" round>删除</el-button>
              <el-button type="success" round>结算</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="外送">外送</el-tab-pane>
          <el-tab-pane label="自取">自取</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="16">日常菜品</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Pos',
  data () {
    return {
      msg: 'Vue + elementUI, 点菜应用',
      modelData: '123',
      href_Url: 'http://www.baidu.com',
      abcxx: '自定义属性，随便什么值都可以',
      goodsListObj: [{
        goods: '汉堡',
        num: 11,
        price: 16
      }, {
        goods: '鸡肉卷',
        num: 22,
        price: 12
      }, {
        goods: '可乐',
        num: 33,
        price: 10
      }]
    }
  },
  methods: {
    addGoodsFn (n) {
      console.log(n.goods)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
  height: 200px;
  border-bottom: 1px solid #D3DCE6;
  background-color: #F9FAFC;
  text-align: left;
  padding: 10px;
}
.daily-goods-list ul li{
  list-style: none;
  float:left;
  border:1px solid #E5E9F2;
  padding:10px;
  margin:5px;
  background-color:#fff;
}
.o-price{
  color:#58B7FF;
}
.goods-type{
  clear: both;
}
.cookList li{
  list-style: none;
  width:23%;
  border:1px solid #E5E9F2;
  height: auot;
  overflow: hidden;
  background-color:#fff;
  padding: 2px;
  float:left;
  margin: 2px;
}
.cookList li span{
  display: block;
  float:left;
}
.cookList li span.foodImg{
  width:100px;
  height:100px;
  overflow:hidden;
  display: block;
  float:left;
}
.foodImg{
  width: 40%;
}
.foodName{
  font-size: 18px;
  padding-left: 10px;
  color:brown;
}
.foodPrice{
  font-size: 16px;
  padding-left: 10px;
}
</style>
