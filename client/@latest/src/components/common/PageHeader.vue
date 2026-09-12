<script setup>defineProps({title:String,description:String,breadcrumbs:{type:Array,default:()=>[]}})</script>
<template><div class="page-header"><div><div class="breadcrumbs"><template v-for="(item,i) in breadcrumbs" :key="item"><span v-if="i"> / </span>{{item}}</template></div><h1>{{title}}</h1><div v-if="description" class="muted">{{description}}</div></div><div><slot/></div></div></template>
