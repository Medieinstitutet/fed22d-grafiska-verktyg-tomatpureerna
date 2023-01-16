<script setup>
import { ref } from 'vue';
import ButtonAtom from '../../button/ButtonAtom.vue';

const showCookieBanner = ref(true);

function hideCookies() {
  showCookieBanner.value = false;
}

</script>

<template>
  <div class="cookiebanner" v-if="showCookieBanner">
    <p>Vi använder kakor för att kunna ge dig en bra upplevelse
      när du besöker vår webbplats. Du kan välja att godkänna att
      vi använder kakor under ditt besök genom att klicka på “Acceptera”</p>
    <ButtonAtom btn-msg="Acceptera" class="cookiebanner__button__accept" @btn-click="hideCookies"/>
  </div>
</template>

<style scoped lang="scss">
@import '_cookiebanner.scss'
</style>
