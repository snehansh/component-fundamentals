<template>
  <div>
    <h1>GitHub Profiles</h1>
    <div class="row">
      <!-- <github-user-profile name="hootlex"></github-user-profile>
      <github-user-profile class="ml-1" name="Akryum"></github-user-profile> -->

      <github-user-profile
        v-for="(username, index) in usernames"
        :name="username"
        class="mr-1"
        :key="index"
      ></github-user-profile>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import GitHubProfile from "@/components/GitHubProfile.vue";

@Component({
  components: {
    "github-user-profile": GitHubProfile,
  },
})
export default class ProjectGitHubProfile extends Vue {
  usernames = ["hootlex", "rahaug", "sdras", "akryum"];
}
</script>
