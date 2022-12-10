<template>
  <d-layout class="dlayout-2">
    <d-header class="dheader-2">
      <div class="logo">
        <span class="logo-devui">
          <img
            src="https://devui.design/components/assets/logo.svg"
            width="26px"
            height="26px"
          />
        </span>
        <span class="text">DevUI</span>
      </div>
    </d-header>
    <d-layout>
      <d-aside class="daside-2">
        <d-accordion :data="menu" class="menu"></d-accordion>
      </d-aside>
      <d-content class="dcontent-2">
        <d-breadcrumb class="dbreadcrumb">
          <d-breadcrumb-item>
            <span>DevUI</span>
          </d-breadcrumb-item>
          <d-breadcrumb-item>
            <span>面包屑</span>
          </d-breadcrumb-item>
        </d-breadcrumb>
        <div class="inner-content"></div>
      </d-content>
    </d-layout>
    <d-footer class="dfooter-2">footer</d-footer>
  </d-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const menu = ref([
      {
        title: '内容一',
        open: true,
        children: [
          { title: '子内容1' },
          { title: '子内容2' },
          { title: '子内容3' }
        ]
      },
      {
        title: '内容二',
        children: [
          { title: '子内容1' },
          { title: '子内容2' },
          { title: '子内容3' }
        ]
      },
      {
        title: '内容三（默认展开）',
        open: true,
        children: [
          { title: '子内容1(禁用)', disabled: true },
          { title: '子内容2(默认激活)', active: true },
          { title: '子内容3' }
        ]
      }
    ])
    return {
      menu
    }
  }
})
</script>

<style>
.dlayout-2 {
  background-color: #fff;
}
.dlayout-2 li {
  list-style: none;
}

.daside-2 {
  border-left: 1px solid transparent;
}

.dheader-2 {
  text-align: left;
  height: 40px;
  background-color: #333854;
  position: relative;
}
.dheader-2 .search {
  color: #fff;
  margin-right: 40px;
  position: absolute;
  right: 0;
}

.dheader-2 .logo {
  position: absolute;
  left: 0;
  margin-left: 20px;
  height: 40px;
  width: 120px;
  color: #fff;
  font-size: 16px;
  line-height: 40px;
}
.dheader-2 .logo .logo-devui {
  margin-top: 8px;
}
.dheader-2 .logo .logo-devui,
.dheader-2 .logo .text {
  display: inline-block;
  vertical-align: top;
}

.dcontent-2 {
  padding: 0 40px;
  background-color: #f3f6f8;
}
.dcontent-2 .inner-content {
  background-color: #fff;
  padding: 16px;
  height: 100%;
}
.dcontent-2 .dbreadcrumb {
  margin-top: 8px;
}
.dfooter-2 {
  color: #fff;
  background-color: #333854;
  padding: 8px 24px;
}
</style>
