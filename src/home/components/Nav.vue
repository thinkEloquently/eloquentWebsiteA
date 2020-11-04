<template>
  <div class="header">
    <div class="sm">
      <div class="logo">
        <div class="logoBox">
          <img src="./../../assets/eloquent-logo.png" alt="eloquent logo" />
        </div>
      </div>
      <!--  -->
      <div class="toggleBtn">
        <div class="toggleBarHolder">
          <div class="toggleBarA"></div>
          <div class="toggleBarB"></div>
          <div class="toggleBarC"></div>
        </div>
      </div>
    </div>
    <div class="nav">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Our Service</a>
        </li>
        <li>
          <a href="#">Our Team</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.sm {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.logo {
  height: auto;
  background: green;
}
.logoBox {
  height: 50px;
  object-fit: contain;
}
.logoBox img {
  height: 50px;
  object-fit: contain;
}
/*  */
.toggleBarHolder {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.toggleBarA {
  width: 30px;
}
.toggleBarB {
  width: 20px;
}
.toggleBarC {
  width: 10px;
}
.toggleBarA,
.toggleBarB,
.toggleBarC {
  background: black;
  height: 2px;
  margin: 3px 0px;
  transition: 0.3s all;
}
</style>