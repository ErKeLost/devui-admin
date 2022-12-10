<script setup lang="ts"></script>

<template>
  <div flex h-screen justify-center>
    <div relative flex-1 f-c-c hidden w-0 lg:block>
      <img
        absolute
        inset-0
        object-cover
        w-250
        h-100
        src="../../assets/devui-design.svg"
        alt=""
      />
    </div>
    <div
      flex
      flex-col
      justify-center
      items-center
      flex-1
      px-4
      py-12
      sm:px-6
      lg:flex-none
      lg:px-20
      xl:px-24
      relative
    >
      <div flex items-center w-full h-full max-w-128 mx-auto lg:w-128>
        <transition name="bounceInDown" mode="out-in" appear>
          13123123
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bounceInDown-enter-active {
  animation: bounceInDown 0.5s ease-in;
}
.bounceInDown-leave-active {
  animation: bounceInDown 0.5s ease-in reverse;
}
</style>
