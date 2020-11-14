<template>
  <Home />
</template>

<script>
import Home from "./home/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
*,
*::before,
*::after {
  margin: 0;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
body {
  width: 100%;
  height: 100%;
  background: black;
}
a {
  text-decoration: none;
}
ul {
  padding: 0;
}
ul li {
  list-style: none;
}
#app {
  width: 100%;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
}
.elo-text-gold {
  color: #cc9933;
}
.elo-text-weight-600 {
  font-weight: 600;
}
.elo-row {
  display: flex;
  display: -ms-flex;
  flex-wrap: wrap;
  -moz-flex-wrap: wrap;
}
.elo-width-100,
.elo-width-md-100 {
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  width: 100%;
}
.elo-width-50 {
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  width: 50%;
}
.elo-width-70 {
  -ms-flex: 0 0 70%;
  flex: 0 0 70%;
  width: 70%;
}
.elo-flex {
  display: flex;
}
.elo-flex-direction-row {
  flex-direction: row;
}
.elo-flex-direction-column {
  flex-direction: column;
}
.elo-justify-content-center {
  justify-content: center;
}
.elo-align-items-center {
  align-items: center;
}
.elo-align-item-end {
  align-items: end;
}
.elo-align-self-end {
  align-self: end;
}
.elo-form-group {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 5px 0;
}
.elo-form-group label {
  color: #cc9933;
  padding: 4px 0px;
}
.elo-form-group input,
.elo-form-group textarea,
.elo-form-group button {
  width: 100%;
  padding: 15px 10px 15px 10px;
  border-radius: 10px;
  outline: none;
}
.elo-form-group input,
.elo-form-group textarea {
  color: #cc9933;
  border: 1px solid #cc9933;
  background: none;
}
.elo-form-group input:focus,
.elo-form-group textarea:focus {
  border: 1px solid #2b1e05;
}
.elo-form-group textarea {
  height: 150px;
  resize: vertical;
}
.elo-form-group button {
  background: #cc9933;
  color: black;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  transition: 0.5s all ease-in-out;
}
.elo-form-group button:hover {
  background: #3d2a05;
}
.elo-form-group ::placeholder {
  color: #573d0a;
}
.elo-section {
  width: 100%;
  padding: 20px;
}
.elo-section-b {
  width: 100%;
  padding: 5px 20px;
}
.elo-responsive-img {
  width: 100%;
  height: auto;
}
/*  */
.elo-padTop-5 {
  padding-top: 3rem;
}
/* margin */
.elo-mr-1 {
  margin-right: 1rem;
}
.elo-mt-4 {
  margin-top: 3rem;
}
.elo-ml-pot5 {
  margin-left: 0.5rem;
}
.elo-ml-pot3 {
  margin-left: 0.3rem;
}
.elo-mr-pot5 {
  margin-right: 0.5rem;
}
.elo-mb-1 {
  margin-bottom: 1rem;
}
/*  */
/* padding */
.elo-pb-1 {
  padding-bottom: 1rem 0;
}
/*  */
@media (min-width: 768px) {
  .elo-section {
    padding: 20px 100px;
  }
  .elo-section-b {
    padding: 5px 100px;
  }
  .elo-width-md-50 {
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    width: 50%;
  }
  .elo-width-md-100 {
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    width: 100%;
  }
}
</style>
