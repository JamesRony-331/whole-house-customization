<script setup>
import { Loading, Box, Warning } from '@element-plus/icons-vue'
const props=defineProps({type:{type:String,default:'empty'},title:String,description:String})
const icons={loading:Loading,empty:Box,error:Warning}
</script>
<template><div class="status-view"><el-icon :class="{spin:type==='loading'}"><component :is="icons[type]"/></el-icon><h3>{{title||({loading:'正在加载',empty:'暂无内容',error:'加载失败'}[type])}}</h3><p>{{description}}</p><slot/></div></template>
<style scoped>.status-view{padding:64px 20px;text-align:center;color:var(--c-muted)}.status-view .el-icon{font-size:34px;color:var(--c-brass)}.status-view h3{margin:12px 0 4px;color:var(--c-text);font:500 20px var(--font-display)}.status-view p{margin:0 0 16px}.spin{animation:spin 1s linear infinite}@keyframes spin{to{transform:rotate(1turn)}}</style>
