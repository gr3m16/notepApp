<script setup>
import { ref } from "vue";

const title = ref("");
</script>

<template>
  <form action="" class="note-form">
    <input
      type="text"
      class="note-title"
      placeholder="New note"
      v-model="title"
    />

    <button class="create-btn">+</button>
  </form>
</template>

<style>
.note-form {
  width: 400px;
  background-color: lightgreen;
  border: 3px solid darkblue;
  padding: 20px 30px;
}
</style>
