<template>
  <form @submit.prevent="submitForm">
    <div class="form-container">
      <div class="form-control">
        <label for="user-name">Your Name:</label>
        <input id="user-name" name="user-name" type="text" v-model="userName" />
      </div>
      <div class="form-control">
        <label for="referrer">What do you use for your social links?</label>
        <select id="referrer" name="referrer" v-model="referrer">
          <option value="google">Google</option>
          <option value="Linkedin">Linkedin</option>
          <option value="Discord">Discord</option>
        </select>
      </div>
      <div class="form-control">
        <div>
          <input
            id="interest-news"
            name="interest"
            type="checkbox"
            value="communication"
          />
          <label for="interest-news">communication</label>
        </div>
        <div>
          <input
            id="interest-tutorials"
            name="interest"
            type="checkbox"
            value="tutorials"
            v-model="interest"
          />
          <label for="interest-tutorials">Tutorials</label>
        </div>
        <div>
          <input
            id="interest-nothing"
            name="interest"
            type="checkbox"
            value="nothing"
            v-model="interest"
          />
          <label for="interest-nothing">Nothing</label>
        </div>
      </div>

      <button>Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      referrer: "",
      interest: [],
    };
  },
  methods: {
    submitForm() {
      console.log("=========UserName=========");
      console.log("UserName:", this.userName);
      console.log("=========Referrer=========");
      console.log("Referrer:" + this.referrer);
      this.referrer = "wom";
      console.log("=========Checkboxes=========");
      console.log("Checkbox:", this.interest);
    },
  },
};
</script>
olll