<template>
  <div class="con-nav">
    <dl :class="nav.class" @mouseover="over">
      <dt>{{nav.title}}</dt>
      <dd
        v-for="(item, index) in nav.list"
        :key="index"
        :data-type="item.type"
        :class="{active: kind == item.type}"
      >{{item.name}}</dd>
    </dl>
    <ul class="con-body">
      <li v-for="(item, index) in list[this.kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" :alt="item.title">
          
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.sub_title">{{item.sub_title}}</div>
            <!-- 当时美团有三种情况，但是数据只有一种情况 -->
            <!-- 标题下面的文字，分三种情况 -->
            <!-- 门市价 -->
            <!-- <div class="price-info" v-if="item.rentNum && item.price_info.current_price"> -->
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price}}</span>
              </span>
              <!-- <span class="old-price">门市价¥{{}}</span> -->
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
            <!-- 抢光了 -->
            <!-- <div class="price-info" v-else-if="!item.rentNum">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">抢光了</span>
              </span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div> -->
            <!-- 人均 -->
            <!-- <div class="price-info" v-else>
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span
                  class="current-price numfont"
                >{{item.price_info.avg_price}} / {{item.price_info.units}}</span>
              </span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div> -->
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
// 现在不用引入了
// import api from '@/api/index'
export default {
  props: ["nav"],
  created() {
    // 现在改进的
    this.API.getResultsByKeywords().then( res => {
      this.list = res.data.data
    })
    // 之前的写法
    // api.getResultsByKeywords().then(res => {
    //   this.list = res.data.data
    // })
  },
  data() {
    return {
      kind: "all",
      list: []
    };
  },
  methods: {
    over(e) {
      let dom = e.target,
        tagName = dom.tagName.toLowerCase();
      if (this.kind == dom.getAttribute("data-type") || tagName !== "dd")
        return;

      this.kind = dom.getAttribute("data-type");

    }
  }
};
</script>
