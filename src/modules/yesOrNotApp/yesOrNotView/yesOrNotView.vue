<template>
  <div class="black">
    <v-img style="height: 100vh" :src="image">
      <div
        class="d-flex flex-column align-center justify-space-around"
        style="height: 100%"
      >

        <div class="d-flex flex-column align-center">
          <v-text-field
            v-model="question"
            label="Hazme una pregunta"
            solo
          ></v-text-field>
          <p class="white--text">
            Recuerda poner el signo de interrogación (?)
          </p>
        </div>

        <div class="d-flex flex-column align-center">
          <p class="white--text">{{ question }}</p>
          <p class="white--text">{{ answer }}</p>
        </div>

      </div>
    </v-img>
  </div>
</template>


<script>
export default {
  data() {
    return {
      question: "",
      answer: "",
      image: "",
    };
  },

  methods: {
    async getAnswer() {
      this.image = "";
      this.answer = "Pensando...";
      const { answer, image } = await fetch("https://yesno.wtf/api").then(
        (resp) => resp.json()
      );
      this.image = image;
      this.answer = answer === "yes" ? "Si!" : "No!";
    },
  },

  watch: {
    question(value) {

      if (!value.includes("?")) {
        this.image = "";
        this.answer = "";
        return;
      }
      
      this.getAnswer();
    },
  },
};
</script>

<style>
</style>