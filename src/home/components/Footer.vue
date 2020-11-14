<template>
  <div class="elo-section">
    <div class="elo-width-70">
      <div class="logo">
        <div class="logoBox">
          <img src="./../../assets/eloquent-logo.png" alt="eloquent logo" />
        </div>
      </div>
      <div class="footer-text">
        <p>we help bring your we related application to reality</p>
      </div>
    </div>
    <div class="elo-mt-4">
      <h3 class="elo-text-gold elo-mb-1">Get In Touch</h3>
      <ul class="">
        <li>
          <font-awesome-icon :icon="['fas', 'envelope']" class="icon" />
          <span class="elo-text-gold elo-ml-pot5"
            >thinkeloquently@gmail.com</span
          >
        </li>
        <li>
          <font-awesome-icon :icon="['fas', 'phone-square-alt']" class="icon" />
          <a href="tel:+2347035432921" class="elo-text-gold elo-ml-pot5">
            <span class="elo-ml-pot3">+234</span>
            <span class="elo-ml-pot3">907</span>
            <span class="elo-ml-pot3">557</span>
            <span class="elo-ml-pot3">9421</span>
        </a>
        </li>
        <li>
          <font-awesome-icon :icon="['fas', 'phone-square-alt']" class="icon" />
          <a href="tel:+2347035432921" class="elo-text-gold elo-ml-pot5">
            <span class="elo-ml-pot3">+234</span>
            <span class="elo-ml-pot3">803</span>
            <span class="elo-ml-pot3">188</span>
            <span class="elo-ml-pot3">5415</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="social elo-mt-4">
      <h3 class="elo-text-gold elo-mb-1">Socials</h3>
      <ul class="elo-flex">
        <li>
          <font-awesome-icon
            :icon="['fab', 'facebook-square']"
            class="icon elo-mr-pot5"
          />
        </li>
        <li>
          <font-awesome-icon :icon="['fab', 'linkedin']" class="icon" />
        </li>
      </ul>
    </div>
   
  </div>
   <div class="copyRight elo-section elo-text-gold">
      <span
        >Copyright &copy; {{ createDate }} eloquent Team. All rights
        reserved.</span
      >
    </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      createDate: new Date("2020").getFullYear(),
      todayYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.logo {
  height: auto;
}
.logoBox {
  width: 150px;
  height: 70px;
}
.logoBox img {
  width: 140px;
  height: 70px;
  object-fit: contain;
}
.footer-text {
  color: #705117;
}
.icon {
  font-size: 1.5rem;
  color: #cc9933;
}
</style>