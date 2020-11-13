<template>
  <div class="Our-Team-Container">
    <div class="elo-section-b">
      <h1 class="elo-text-gold">Our Team</h1>
    </div>

    <div class="Our-Team elo-section elo-custom-grid">
      <!--  -->
      <div
        class="Our-Team-Members elo-cards"
        v-for="teamMember in teams"
        :key="teamMember.name"
      >
        <div class="Our-Team-Members-Pictures">
          <div class="img-overlay"></div>
          <img
            :src="require(`@/assets/team-img/${teamMember.picture}`)"
            alt="teamMemberpicture"
          />
        </div>
        <div class="Our-Team-Members-Info">
          <h4 class="elo-text-gold elo-text-weight-600">
            {{ teamMember.name }}
          </h4>
          <p class="detail elo-text-gold">
            {{ teamMember.office }}
          </p>
          <p class="quote elo-text-gold">
            {{ teamMember.quote }}
          </p>
        </div>
      </div>
      <!--  -->
    </div>
  </div>
</template>

<script>
export default {
  name: "OurTeam",
  data() {
    return {
      teams: [
        {
          name: "Bassey Samuel Joseph",
          office: "Business Manager and Front-end developer",
          picture: "sam.jpg",
          quote:
            "The mind can be programmed and the prgramming language are WORDS, and Words can make you a success or a failure",
        },
        {
          name: "Aigbomian Michael Ehikioya",
          office:
            "Project manager, Software Project Management and Administration",
          picture: "mike.jpg",
          quote:
            "Turn your wound into wisdom, turn your misfortune in life into success story and that alone came make the difference.",
        },
        {
          name: "Lawal Kimberley Ebunoluwa",
          office: "Administration, Content Developer, Social Media & Marketer",
          picture: 'lawal.jpg',
          quote:
            "Personal initiative can mean the difference between business fialure and success.",
        },
        {
          name: "Mbonu Chiedozie Emmanuel",
          office: "Junior Software Developer || Team Research Lead",
          picture: "dozie.jpg",
          quote:
            "it is easier to propose than to excecute, so never procastinate cause your day is now.",
        },
        {
          name: "Savwede God’swill",
          office: "Lead Instructor || Software Engineer",
          picture: "wills.jpg",
          quote:
            "Life is logic at different levels. The ones and zeros, However, never lies",
        },
        {
          name: "Ereyomi Oluwaseyi Samuel",
          office: "Software Engineer || CTO",
          picture: "ereyomi.jpg",
          quote:
            "My lord May I, If I May, May I continue to live selflessly",
        },
      ],
    };
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
.elo-cards {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.Our-Team-Members-Pictures {
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background: none;
  overflow: hidden;
  position: relative;
}
.Our-Team-Members-Pictures img {
  width: 70px;
  height: 70px;
  object-fit: cover;
  object-position: top center;
  filter: grayscale(100%) opacity(50%);
  position: relative;
}
.img-overlay {
  position: absolute;
  z-index: 2;
  width: 70px;
  height: 70px;
  background: none;
  background: #241904;
  opacity: 0.5;
}
.Our-Team-Members-Info {
  padding-left: 15px;
  width: 70%;
}
.detail {
  font-size: 10px;
  margin: 5px 0;
}
.quote {
  font-size: 8px;
  font-style: italic;
  quotes: "\00AB""\00BB""\201E""\201C";
}
@media (min-width: 768px) {
  .elo-custom-grid {
    grid-template-columns: 50% 50%;
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
@media (min-width: 1200px) {
  .elo-custom-grid {
    grid-template-columns: 33.333% 33.333% 33.333%;
  }
}
</style>