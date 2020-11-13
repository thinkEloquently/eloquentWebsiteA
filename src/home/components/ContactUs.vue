<template>
  <div class="elo-row elo-padTop-5">
    <div class="elo-section-b">
      <h1 class="elo-text-gold">Leave us a message</h1>
    </div>
    <div class="elo-custom-grid elo-section">
      <div class="k">
        <form
        @submit="sendEmail"
          autocomplete="on"
          class="elo-width-100 elo-flex elo-flex-direction-column elo-justify-content-center elo-align-items-center"
        >
          <div class="elo-form-group">
            <label for="name">* Name:</label>
            <input
              type="text"
              v-model="name"
              name="name"
              placeholder="Johnson Wills"
            />
          </div>

          <div class="elo-form-group">
            <label for="email">* Email:</label>
            <input
              type="email"
              v-model="email"
              name="mail"
              placeholder="JohnsonWills@eloquent.com"
            />
          </div>

          <div class="elo-form-group">
            <label for="message">* Message</label>
            <textarea
              name="message"
              placeholder="Hi! pls type your message here"
              v-model="message"
            ></textarea>
          </div>

          <div class="elo-form-group">
            <button type="submit" :disabled="isDisabled">
              <span v-if="spinStatus">
                <font-awesome-icon
                  :icon="['fas', 'circle-notch']"
                  spin
                  class="icon"
                />
              </span>
              <span v-if="isSent">
                <font-awesome-icon
                  :icon="['fas', 'check-circle']"
                  class="icon"
                />
              </span>
              <span v-if="!spinStatus && !isSent">Click to leave your message</span>
            </button>
          </div>
        </form>
      </div>
      <div class="h elo-flex elo-align-self-end">
        <div class="img-holder elo-width-100">
          <img
            src="./../../assets/svg/undraw_designer_life.svg"
            alt=""
            class="elo-responsive-img"
          />
        </div>
        <!-- <form action="" id="contactForm">
                    Reach us through
                    <p id="p1">
                        <img src="phone.png" alt=""> +234 903 020 4879 <br><br>
                        <a href="mailto:thinkingeloquently@gmail.com">
                            <img src="./../../assets/png/mail.png" alt=""> thinkingeloquently@gmail.com
                        </a>
                        <br><br>
                        Our media Handles: <br>
                        <a href="https://m.facebook.com/thinkEloquently" title="Visit our facebook page">
                            <img src="./../../assets/png/facebook.png" alt="">
                            facebook.com/thinkEloquently
                        </a><br><br>
                        <a href="https://www.linkedin.com/company/thinkeloquently" title="Check us out on linkedin">
                            <img src="./../../assets/png/linkedin.png" alt="">
                            linkedin.com/company/thinkeloquently
                        </a>
                    </p>
                </form> -->
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "ContactUs",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      serviceId: "service_jq34zdz",
      templateId: "template_psqo1cf",
      userId: "user_aaXshznB7t2XUF0WAw3TX",
      spinStatus: false,
      isDisabled: false,
      isSent: false,
    };
  },
  methods: {
    changeBtnDisableStatus() {
      this.isDisabled = !this.isDisabled
      console.log('disable', this.isDisabled)
    },
    sentStatus() {
      this.isSent = true
      setTimeout(() => {
        this.isSent = false
      }, 2000)
    },
    changeSpinStatus() {
      this.spinStatus = !this.spinStatus
    },
    resetField() {
      // Reset form field
      this.name = "";
      this.email = "";
      this.message = "";
    },
    sendEmail(e) {
      e.preventDefault();
      /* disable button */
      this.changeBtnDisableStatus()
      /* update spin status */
      this.changeSpinStatus()
      /*  */
     try {
        emailjs.sendForm(
          this.serviceId,
          this.templateId,
          e.target,
          this.userId,
          {
            name: this.name,
            email: this.email,
            message: this.message,
          }
        ).then(result => {
          console.log('successfully send message', result)
        /* update spin status */
        this.changeSpinStatus()
        this.sentStatus()
        /* disable button */
        this.changeBtnDisableStatus()
        /*  */
        //resetField
        this.resetField()
          }) 
      } catch (error) {
        console.log({ error });
        alert('An error occur while trying to send the mail. Please check your network and try again')
      }
      
    },
  },
};
</script>

<style scoped>
.elo-custom-grid {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-gap: 20px;
}
@media (min-width: 768px) {
  .elo-custom-grid {
    grid-template-columns: 40% 60%;
  }
  .img-holder {
    width: 100%;
    height: 300px;
  }
  .img-holder img {
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
}
</style>