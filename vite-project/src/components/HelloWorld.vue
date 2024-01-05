<script setup lang="ts">
import { ref, reactive } from 'vue'

const images = reactive([
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
  'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
])
</script>

<template>
  <div class="layout-demo">
    <a-layout style="height: 400px;">
      <!-- 头部 -->
      <a-layout-header>
        <div class="menu-demo">
          <a-menu mode="horizontal" :default-selected-keys="['1']">
            <a-menu-item key="0" :style="{ padding: 0, marginRight: '38px' }" disabled>
              <div
                :style="{
                  width: '80px',
                  height: '30px',
                  borderRadius: '2px',
                  background: 'var(--color-fill-3)',
                  cursor: 'text',
                }"
              />
            </a-menu-item>
            <a-menu-item key="1">Home</a-menu-item>
            <a-menu-item key="2">Solution</a-menu-item>
            <a-menu-item key="3">Cloud Service</a-menu-item>
            <a-menu-item key="4">Cooperation</a-menu-item>
          </a-menu>
        </div>
      </a-layout-header>

      <!-- 主体 -->
      <a-layout-content>
        <div>
          <a-carousel
            :autoPlay="true"
            animation-name="card"
            show-arrow="never"
            indicator-position="outer"
            :style="{
              width: '100%',
              height: '240px',
            }"
          >
            <a-carousel-item v-for="image in images" :style="{ width: '60%' }">
              <img
                :src="image"
                :style="{
                  width: '100%',
                }"
              />
            </a-carousel-item>
          </a-carousel>
        </div>

        <div :style="{ background: 'var(--color-fill-2)', padding: '28px' }" >
          <a-page-header
            :style="{ background: 'var(--color-bg-2)' }"
            title="ArcoDesign"
          >
            <template #breadcrumb>
              <a-breadcrumb>
                <a-breadcrumb-item>Home</a-breadcrumb-item>
                <a-breadcrumb-item>Channel</a-breadcrumb-item>
                <a-breadcrumb-item>News</a-breadcrumb-item>
              </a-breadcrumb>
            </template>
            <template #subtitle>
              <a-space>
                <span>ArcoDesign Vue 2.0</span>
                <a-tag color="red" size="small">Default</a-tag>
              </a-space>
            </template>
            <template #extra>
              <a-space>
                <a-button>Cancel</a-button>
                <a-button type="primary">Save</a-button>
              </a-space>
            </template>
            <p>
              For other uses, see Design
            </p>
            <p>
              A design is a plan or specification for the construction of an object or system or for the
              implementation of an activity or process, or the result of that plan or specification in the
              form of a prototype, product or process. The verb to design expresses the process of
              developing a design. In some cases, the direct construction of an object without an explicit
              prior plan (such as in craftwork, some engineering, coding, and graphic design) may also be
              considered to be a design activity. The design usually has to satisfy certain goals and
              constraints, may take into account aesthetic, functional, economic, or socio-political
              considerations, and is expected to interact with a certain environment. Major examples of
              designs include architectural blueprints,engineering drawings, business processes, circuit
              diagrams, and sewing patterns.Major examples of designs include architectural
              blueprints,engineering drawings, business processes, circuit diagrams, and sewing patterns.
            </p>
          </a-page-header>
        </div>


      </a-layout-content>

      <!-- 底部 -->
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
.layout-demo :deep(.arco-layout-header),
.layout-demo :deep(.arco-layout-footer),
.layout-demo :deep(.arco-layout-sider-children),
.layout-demo :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-white);
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}

.layout-demo :deep(.arco-layout-header),
.layout-demo :deep(.arco-layout-footer) {
  height: 64px;
  background-color: var(--color-primary-light-4);
}

.layout-demo :deep(.arco-layout-sider) {
  width: 206px;
  background-color: var(--color-primary-light-3);
}

.layout-demo :deep(.arco-layout-content) {
  background-color: rgb(var(--arcoblue-6));
}

/*导航*/
.menu-demo {
  box-sizing: border-box;
  width: 100%;
  padding: 40px;
  background-color: var(--color-neutral-2);
}
</style>

