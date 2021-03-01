<template>
  <div>
    <b-card
      :title="user.name"
      :img-src="user.avatar_url"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        Joined in {{ user.created_at }} <br />
        {{ user.bio }}
      </b-card-text>

      <b-card-footer
        ><i class="fas fa-user"></i
        ><span class="ml-1">{{ user.followers }} Friends</span></b-card-footer
      >
    </b-card>
  </div>
</template>

<script type="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import axios from "axios";
@Component
export default class GitHubProfile extends Vue {
  @Prop() name;
  user = "";
  created() {
    this.loadData();
  }

  async loadData() {
    const response = await axios.get(
      `https://api.github.com/users/${this.name}`
    );
    this.user = response.data;
  }
}
</script>
