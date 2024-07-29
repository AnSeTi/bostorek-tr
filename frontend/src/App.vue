<template>
  <NavBar />
  <RouterView/>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght,wght@300;400;600;700&display=swap");
html,
body {
  font-family: "Mulish", sans-serif;
}
</style>

<!-- SFC single file component: componenetlerin her biri
 bağımsız bir vue dosyasında oluşturulur. temp scrpt style olan
 dosyaya sfc denir -->

<!-- SOC Seperation of Concerns:html css js kodlarının ayrı
  dosyalarda tutulması. İlgili konuların ayrıştırılması.
  Vue içerisinde 3 farklı alan vardır. Görünüm-dinamiklik-stiller -->

<!-- data içinde ki özelliklerin tamamı ilgili componenetin localine özeldir -->
