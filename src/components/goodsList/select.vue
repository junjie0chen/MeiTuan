<template>
    <div class="m-goodsList-select">
        <dl class="tab">
            <dt>
                {{title}}
                <i class="el-icon-caret-bottom"></i>
            </dt>
            <dd>
                <dl>
                    <dt class="select-title">{{title}}</dt>
                    <span v-for="(item, index) in list" :key="index">
                       {{item.name}}
                    </span>
                </dl>
            </dd>
        </dl>
    </div>
</template>

<script>
  export default {
    props: [
      "title",
      "list",
    ]
  }
</script>

