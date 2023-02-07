<template>
  <div class="layout-wrapper">
    <a-layout v-if="!inQiankun" class="whole-page">
      <a-layout-header>Header</a-layout-header>
      <a-layout>
        <a-layout-sider :collapsed="collapsed">
          <a-menu
            :openKeys="openKeys"
            :selectedKeys="selectedKeys"
            mode="inline"
            theme="light"
            @click="handleClick"
          >
            <template v-for="routeItem in routes[0].children">
              <a-menu-item v-if="!routeItem.hidden" :key="routeItem.path">
                {{ routeItem.name }}
              </a-menu-item>
            </template>
          </a-menu>
          <a-button
            class="collapsedBtn"
            @click="() => (collapsed = !collapsed)"
          >
            <MenuUnfoldOutlined v-if="collapsed" />
            <MenuFoldOutlined v-else />
          </a-button>
        </a-layout-sider>
        <a-layout-content><router-view /></a-layout-content>
      </a-layout>
    </a-layout>
    <div v-else class="whole-page">
      <router-view />
    </div>
  </div>
</template>
<script>
import { routes } from '@/router/index.js'
export default {
  data() {
    return {
      openKeys: [],
      selectedKeys: [],
      collapsed: false,
      routes,
      inQiankun: window.__POWERED_BY_QIANKUN__
    }
  },
  watch: {
    $route: {
      handler({ path }) {
        let key = path.split('/').slice(0, 2).join('/')
        this.selectedKeys = [key]
      },
      immediate: true
    }
  },
  methods: {
    handleClick(t) {
      this.$router.push(t.key)
    }
  }
}
</script>
<style lang="less" scoped>
.layout-wrapper {
  height: 100vh;
}
.whole-page {
  height: 100%;
  :deep(.ant-layout-header) {
    height: 48px;
  }
  :deep(.ant-menu) {
    height: 100%;
  }
  :deep(.ant-layout-sider-children) {
    position: relative;
  }
  .collapsedBtn {
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
}
</style>
