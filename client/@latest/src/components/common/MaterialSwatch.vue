<script setup>defineProps({label:String,color:String,active:Boolean})</script>
<template><button :class="['swatch',{active}]" type="button"><span :style="{background:color}"></span>{{label}}</button></template>
<style scoped>.swatch{display:inline-flex;align-items:center;gap:8px;padding:7px 10px;background:#fff;border:1px solid var(--c-border);border-radius:3px;color:var(--c-text);cursor:pointer}.swatch span{width:20px;height:20px;border:1px solid rgba(0,0,0,.12)}.swatch.active{border-color:var(--c-primary);box-shadow:inset 0 0 0 1px var(--c-primary)}</style>
