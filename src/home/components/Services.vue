<template>
  <div class="elo-row">
    <div class="elo-width-100 elo-section-b">
      <h1 class="elo-text-gold">Our Expertices</h1>
    </div>
    <div class="services elo-section">
      <div class="elo-row services-icons">
        <font-awesome-icon :icon="['fab', 'js']" class="icon javaScript"/>
        <font-awesome-icon :icon="['fab', 'php']" class="icon php"/>
        <font-awesome-icon :icon="['fab', 'html5']" class="icon html5"/>
        <font-awesome-icon :icon="['fab', 'java']" class="icon java"/>
        <font-awesome-icon :icon="['fab', 'vuejs']" class="icon vue"/>
        <font-awesome-icon :icon="['fab', 'react']" class="icon react"/>
        <font-awesome-icon :icon="['fab', 'angular']" class="icon angular"/>
        <font-awesome-icon :icon="['fab', 'laravel']" class="icon laravel"/>
        <font-awesome-icon :icon="['fab', 'android']" class="icon android"/>
        <!--  -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon-b ionicon"
          viewBox="0 0 512 512"
        >
          <title>Logo Ionic</title>
          <path
            fill="currentColor"
            d="M256 153.9A102.1 102.1 0 10358.1 256 102.23 102.23 0 00256 153.9z"
          />
          <circle fill="currentColor" cx="402.59" cy="116.45" r="46.52" />
          <path
            fill="currentColor"
            d="M459.86 163.2l-1.95-4.28-3.11 3.52a70 70 0 01-28.06 19.32l-3 1.1 1.22 2.93A181.43 181.43 0 01439 256c0 100.92-82.1 183-183 183S73 356.92 73 256 155.08 73 256 73a180.94 180.94 0 0178.43 17.7l2.87 1.3 1.25-2.92A70.19 70.19 0 01359.21 62l3.67-2.93-4.17-2.07A221.61 221.61 0 00256 32C132.49 32 32 132.49 32 256s100.49 224 224 224 224-100.49 224-224a222.19 222.19 0 00-20.14-92.8z"
          />
        </svg>
        <!--  -->
        <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
          class="icon-b typeScript"
        >
          <path
            style="fill: #0078CF"
            d="M512,256c0,23.155-3.072,45.599-8.84,66.936c-13.479,49.894-41.66,93.748-79.621,126.631
            C378.64,488.469,320.073,512,256,512C114.615,512,0,397.385,0,256S114.615,0,256,0S512,114.615,512,256z"
          />
          <g>
            <path
              style="fill: currentColor"
              d="M503.16,322.936c-13.479,49.894-41.66,93.748-79.621,126.631c-3.709,0.199-7.586,0.293-11.609,0.293
                c-53.154,0-82.693-33.217-97.374-58.138l48.191-28.954c0,0,16.394,34.837,47.125,34.837c30.741,0,43.039-10.25,43.039-33.813
                c0-28.693-99.391-38.933-114.761-88.116c-15.37-49.183,5.12-118.868,76.852-113.737c44.826,3.197,70.04,25.213,82.651,41.273
                l-47.815,34.544c-10.25-29.706-52.255-29.706-60.458-5.12c-8.192,24.597,19.466,38.933,62.506,53.279
                C473.997,293.282,491.781,306.876,503.16,322.936z"
            />
            <polygon
              style="fill: currentColor"
              points="300.943,169.786 83.106,169.786 83.106,221.202 162.935,221.202 162.935,444.45 
                221.115,444.45 221.115,221.202 300.943,221.202 	"
            />
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
};
</script>

<style scoped>
.services-icons {
    width: 100%;
    justify-content: center;
    align-items: center;
}
.icon {
  font-size: 6rem;
}
.icon-b {
    width: 6rem;
    height: auto;
}
.icon,
.icon-b {
    margin: 15px;
}
.vue {
    color:  #41B883;
}
.javaScript {
    color: #F0DB4F;
}
.php {
    color: #787CB5;
}
.angular {
    color: #B52E31;
}
.laravel {
    color: #F05340;
}
.react {
    color: #61DBFB;
}
.html5 {
    color: #F16529;
}
.java {
    color: red;
}
.android {
    color: #A4C639;
}
.ionicon {
  color: #cc9933;
}
.typeScript {
  color: black;
}
</style>