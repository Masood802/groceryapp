<template>
  <Header></Header>
  <div class="main"></div>
  <div class="about">
    <h1>About Us</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, impedit
      ipsum illo hic minus nobis minima praesentium recusandae excepturi! Facere
      ad dolore voluptate minima, repellat sed corrupti sint, quos dolores quas
      consequuntur exercitationem incidunt perferendis error libero quidem earum
      voluptatum, veniam cupiditate doloribus saepe reprehenderit? Ad, fuga
      nemo. Inventore iste deleniti, fugit provident architecto, tenetur quas
      voluptatibus, dicta exercitationem vitae quia! Corrupti harum itaque,
      molestiae autem debitis dignissimos molestias repellat perspiciatis,
      voluptatum obcaecati voluptas nisi necessitatibus. Ullam odio minima quo
      fugit tempore voluptate iste. Repellendus id rem perferendis officia
      reprehenderit vel eos consectetur quasi enim, eligendi ratione, quae
      exercitationem magnam!
    </p>
  </div>
  <div class="footer">contact us</div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import Header from "../components/Header.vue";
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main {
  background-image: url("../assets/main.jpg");
  width: 100%;
  height: 30em;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.about h1 {
  text-align: center;
}
</style>
