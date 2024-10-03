<template>
  <NavBar />
  <RouterView/>
  <TheFooter/>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
  name: "App",
  components: {
    NavBar,
    TheFooter
  },
};
</script>

<style>

</style>

<!-- SFC single file component: componenetlerin her biri
 bağımsız bir vue dosyasında oluşturulur. temp scrpt style olan
 dosyaya sfc denir -->

<!-- SOC Seperation of Concerns:html css js kodlarının ayrı
  dosyalarda tutulması. İlgili konuların ayrıştırılması.
  Vue içerisinde 3 farklı alan vardır. Görünüm-dinamiklik-stiller -->

<!-- data içinde ki özelliklerin tamamı ilgili componenetin localine özeldir -->
