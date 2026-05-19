<script setup>
import { ref } from "vue";
import { useNoteStore } from "../stores/note";
const noteStore = useNoteStore();

const handleSubmit = () => {
  if (!title.value) {
    alert("No puedes añadir una nota vacía.");
  } else {
    noteStore.addNote(title.value);
    title.value = "";
  }
};

const title = ref("");
</script>

<template>
  <div id="form-container">
    <form class="note-form" @submit.prevent="handleSubmit">
      <input
        type="text"
        class="note-title"
        placeholder="New note"
        v-model="title"
      />
      <button class="create-btn">+</button>
    </form>
  </div>
</template>

<style>
#form-container {
  width: 100%;
}

.note-form {
  margin: 0 auto;
  width: 400px;
  background-color: #d4d4d4;
  border: 2px solid rgb(109, 107, 107);
  padding: 20px 30px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  transition: all 0.2s;

  .note-title {
    background-color: transparent;
    border: none;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .create-btn {
    width: 30px;
    height: 30px;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    background-color: white;
    border: 1px solid black;

    border-radius: 5px;
  }

  .create-btn:active {
    background-color: white;
  }
  .create-btn:hover {
    background-color: darkgray;
  }
}
.note-form:hover {
  border: 2px solid black;
}
.note-title:focus {
  outline: 0;
}
</style>
