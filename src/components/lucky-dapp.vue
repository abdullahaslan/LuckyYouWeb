<template>
  <div>
 <hello-metamask/>
 <lucky-component/>
</div>
</template>
<script>
import HelloMetamask from '@/components/hello-metamask'
import LuckyComponent from '@/components/lucky-component'
export default {
  name: 'lucky-dapp',
  beforeCreate () {
    console.log('registerWeb3 Action dispatched from lucky-dapp.vue')
    this.$store.dispatch('registerWeb3')
  },
  components: {
    'hello-metamask': HelloMetamask,
    'lucky-component': LuckyComponent
  }
}
</script>
<style scoped>
</style>