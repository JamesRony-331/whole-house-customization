<script setup>
import { ref } from 'vue'
import { Menu, Close } from '@element-plus/icons-vue'
const open=ref(false)
const nav=[['首页','/home'],['产品中心','/products'],['案例灵感','/cases'],['在线定制','/customize'],['我的订单','/workspace']]
</script>
<template>
  <header class="app-header"><div class="container header-inner">
    <router-link to="/home" class="brand display-title">木序定制<small>全屋柜类定制专家</small></router-link>
    <nav :class="['main-nav',{open}]"><router-link v-for="item in nav" :key="item[1]" :to="item[1]" @click="open=false">{{item[0]}}</router-link></nav>
    <div class="header-actions"><router-link to="/login" class="login-link">登录</router-link><el-button type="primary" @click="$router.push('/customize')">开始定制</el-button></div>
    <button class="menu-button" @click="open=!open" aria-label="切换导航"><el-icon><component :is="open?Close:Menu"/></el-icon></button>
  </div></header>
</template>
<style scoped>
.app-header{height:var(--header-h);background:rgba(255,255,255,.96);border-bottom:1px solid var(--c-border);position:sticky;top:0;z-index:50}.header-inner{height:100%;display:flex;align-items:center}.brand{font-size:25px;white-space:nowrap}.brand small{display:block;font:9px/1.2 var(--font-ui);letter-spacing:.18em;color:var(--c-muted);margin-top:-2px}.main-nav{display:flex;gap:38px;margin:auto}.main-nav a{height:var(--header-h);display:grid;place-items:center;position:relative}.main-nav a.router-link-active::after{content:"";position:absolute;bottom:0;left:4px;right:4px;height:2px;background:var(--c-primary)}.header-actions{display:flex;align-items:center;gap:24px}.menu-button{display:none;background:none;border:0;font-size:22px}.login-link:hover{color:var(--c-primary)}
@media(max-width:860px){.main-nav{display:none;position:absolute;top:var(--header-h);left:0;right:0;padding:12px 24px;background:#fff;border-bottom:1px solid var(--c-border)}.main-nav.open{display:grid}.main-nav a{height:46px;display:flex}.main-nav a.router-link-active::after{left:0;right:auto;width:28px}.header-actions{margin-left:auto}.menu-button{display:grid;margin-left:12px}}
@media(max-width:520px){.header-actions .login-link{display:none}.header-actions .el-button{display:none}.brand{font-size:22px}}
</style>
