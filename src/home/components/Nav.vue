<template>
  <div class="header" id="nav">
    <div class="sm">
      <div class="logo">
        <div class="logoBox">
          <img src="./../../assets/eloquent-logo.png" alt="eloquent logo" />
        </div>
      </div>
      <!--  -->
      <div class="toggleBarHolder" @click="toggleBtn" ref="toggleBarHolder">
        <div class="toggleBarA"></div>
        <div class="toggleBarB"></div>
        <div class="toggleBarC"></div>
      </div>
    </div>
    <div class="nav" ref="navMenu">
      <ul>
        <li>
          <a data-title="nav" @click="scrollToview">Home</a>
        </li>
        <li>
          <a data-title="services" @click="scrollToview">Our Service</a>
        </li>
        <li>
          <a data-title="ourteam" @click="scrollToview">Our Team</a>
        </li>
        <li>
          <a data-title="contactus" @click="scrollToview">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  methods: {
    toggleBtn() {
      const toggleBarHolder = this.$refs.toggleBarHolder;
      if (toggleBarHolder.classList.contains("togglechange")) {
        toggleBarHolder.classList.remove("togglechange");
      } else {
        toggleBarHolder.classList.add("togglechange");
      }
      this.showNav();
    },
    showNav() {
      const nav = this.$refs.navMenu;
      nav.classList.toggle("showNav")
    },
    scrollToview(event) {
      const navTitle = event.target.dataset.title
      document.querySelector( `#${navTitle}` ).scrollIntoView( {
          behavior: 'smooth'
      } )

    }
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: black;
  overflow: hidden;
  padding: 10px 20px;
}
.sm {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: black;
  position: relative;
  z-index: 99;
}
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
  background: #cc9933;
  height: 2px;
  margin: 3px 0px;
  transition: 0.3s all;
}
.togglechange .toggleBarA {
  transform: rotate(-45deg) translate(-6px, 6px);
}
.togglechange .toggleBarB {
  opacity: 0;
}
.togglechange .toggleBarC {
  width: 30px;
  transform: rotate(45deg) translate(-5px, -6px);
}
/*  */
.nav {
  width: 100%;
  /* padding: 10px 20px; */
  padding: 0;
  height: 0;
  transition: 1s all ease-in-out;
  transform: translateY(-100%);
}
.showNav {
  padding: 10px 0;
  height: 250px;
  transform: translateY(0%);
}

.nav ul {
  padding: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
}
.nav ul li {
  padding: 16px 0;
}
.nav ul li a {
  font-size: 1rem;
  font-weight: 500;
  display: block;
  text-decoration: none;
  color: #cc9933;
}
@media screen and (min-width: 768px) {
  .header {
    flex-direction: row;
    padding: 10px 100px;
  }
  .toggleBarHolder {
    display: none;
  }
  .sm {
    width: 30%;
  }
  .nav {
    width: 70%;
    display: initial;
    display: flex;
    justify-content: flex-end;
    align-content: center;
  }
  .nav ul {
    flex-direction: row;
  }
  .nav ul li a {
    padding: 10px;
  }
}
</style>