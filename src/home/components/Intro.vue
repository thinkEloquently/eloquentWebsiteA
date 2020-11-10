<template>
  <div class="intro">
    <div class="intro-svg">
      <img
        src="./../../assets/svg/undraw_mobile_development.svg"
        alt="mobile development"
      />
    </div>

    <div class="intro-text">
      <div class="sm-intro-text">
        <span class="static-text">We</span>
        <span class="switch-text" ref="switchTextSpan"></span>
        <p class="typing-para">
          <span class="typed-text" ref="typedTextSpan"></span>
          <span class="cursor" ref="cursorSpan">&nbsp;</span>
        </p>
      </div>
      <div class="narrative">
        <p>
          with the fast growing demand for tech experts, we at Eloquent have
          come up with Solutions to meet global demainds. <br>
          <!-- <i>- "miss lawal"</i> -->
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro",
  data() {
    return {
      switchTextSpan: null,
      cursorSpan: null,
      typedTextSpan: null,
      textData: null,
      textDataA: [
        "Web Applications",
        "Mobile Applications",
        "Enterprise Applications",
      ],
      textDataB: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "python",
        "Java",
        "TypeScript",
      ],
      switchData: ["Build", "Teach"],
      typingDelay: 200,
      textDataArrayIndex: 0,
      charIndex: 0,
      switchIndex: 0,
      newTextDelay: 2000,
    };
  },
  methods: {
    switchTyping() {},
    typing() {
      if (this.charIndex < this.textData[this.textDataArrayIndex].length) {
        if (!this.cursorSpan.classList.contains("typing")) {
          this.cursorSpan.classList.add("typing");
        }
        this.typedTextSpan.textContent += this.textData[
          this.textDataArrayIndex
        ].charAt(this.charIndex);
        this.charIndex++;
        setTimeout(this.typing, this.typingDelay);
      } else {
        this.cursorSpan.classList.remove("typing");
        setTimeout(this.erase, this.newTextDelay);
      }
    },
    erase() {
      if (this.charIndex > 0) {
        if (!this.cursorSpan.classList.contains("typing")) {
          this.cursorSpan.classList.add("typing");
        }
        this.typedTextSpan.textContent = this.textData[
          this.textDataArrayIndex
        ].substring(0, this.charIndex - 1);
        this.charIndex--;
        setTimeout(this.erase, this.typingDelay);
      } else {
        this.cursorSpan.classList.remove("typing");

        /*  */
        this.textDataArrayIndex++;
        if (this.textDataArrayIndex >= this.textData.length) {
          this.textDataArrayIndex = 0;
        }

        if (this.textDataArrayIndex === 0) {
          /*  */
          this.switchIndex++;
          if (this.switchIndex >= this.switchData.length) {
            this.switchIndex = 0;
          }
          switch (this.switchIndex) {
            case 0:
              this.textData = this.textDataA;
              break;
            case 1:
              this.textData = this.textDataB;
              break;

            default:
              this.textData = this.textDataA;
              break;
          }
          this.switchTextSpan.textContent = this.switchData[this.switchIndex];
        }
        setTimeout(this.typing, this.typingDelay + 1100);
      }
    },
    loadDefaultData() {
      this.textData = this.textDataA;
      this.switchTextSpan.textContent = this.switchData[this.switchIndex];
    },
  },
  mounted() {
    this.typedTextSpan = this.$refs.typedTextSpan;
    this.cursorSpan = this.$refs.cursorSpan;
    this.switchTextSpan = this.$refs.switchTextSpan;
    this.loadDefaultData();
    if (this.textData.length) setTimeout(this.typing, this.newTextDelay + 250);
  },
};
</script>

<style scoped>
.intro {
  display: flex;
  flex-direction: column-reverse;
  overflow: hidden;
  padding: 20px;
}
.intro-svg {
  width: 100%;
}
.intro-svg img {
  width: 100%;
  object-fit: cover;
  object-position: top left;
}

/*  */
.intro-text {
  color: #cc9933;
}
.static-text,
.switch-text {
  font-size: 3rem;
  font-weight: bold;
}
.switch-text {
  margin-left: 10px;
}
.typing-para {
  font-size: 1.8rem;
}
.typed-text {
  font-weight: normal;
  /* color: white; */
}
.cursor {
  display: inline-block;
  width: 3px;
  background: #ccc;
  margin-left: 0.1rem;
  animation: blink 1s infinite;
}
@keyframes blink {
  0% {
    background: #ccc;
  }
  49% {
    background: #ccc;
  }
  50% {
    background: transparent;
  }
  99% {
    background: transparent;
  }
  100% {
    background: #ccc;
  }
}
.cursor .typing {
  animation: none;
}
.narrative {
  width: 50%;
  font-size: 0.7rem;
}

.narrative p {
  font-size: 0.7rem;
  text-align: left;
  padding: 20px 0;
}

@media screen and (min-width: 758px) {
  .intro {
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    padding: 20px 100px;
  }
  .intro-svg {
    position: relative;
    width: 50%;
  }
  .intro-text {
    /* position: absolute;
    z-index: 2;
    top:10%;
    left: 0; */
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .static-text,
  .switch-text {
    font-size: 3rem;
  }
}
</style>