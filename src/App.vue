
<template>
  <d-layout>
    <d-header class="dheader">Header</d-header>
    <d-layout>
      <d-aside class="daside">Aside</d-aside>
      <d-content class="main-content">Content</d-content>
    </d-layout>
    <d-footer class="dfooter">Footer</d-footer>
  </d-layout>
 </template>
<script setup lang="ts"></script>

<style>
.dheader,
.dfooter {
  background: #333854;
  color: #fff;
  text-align: center;
  line-height: 40px;
}

.daside {
  background: #f8f8f8;
  width: 100px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
