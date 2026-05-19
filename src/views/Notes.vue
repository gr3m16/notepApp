<script setup>
import { onMounted, onUnmounted } from "vue";
import CreateNote from "../components/CreateNote.vue";
import Header from "../components/Header.vue";
import NoteCard from "../components/NoteCard.vue";
import { useNoteStore } from "../stores/note";

const noteStore = useNoteStore();

onMounted(async () => {
  await noteStore.getNotes();
});
</script>
;

<template>
  <Header></Header>
  <section id="notes-page">
    <h1 class="title">My Notes</h1>
    <h2 v-if="noteStore.loading">Cargando...</h2>
    <h2 v-else-if="noteStore.error">Algo ha ido mal</h2>
    <ul v-else class="note-list">
      <li><CreateNote></CreateNote></li>
      <li v-for="note in noteStore.notes" :key="note.id">
        <NoteCard :note="note"></NoteCard>
      </li>
      <li v-if="!noteStore.notes.length" class="empty-msg">
        <h2>No hay ninguna nota aún!</h2>
      </li>
    </ul>
  </section>
</template>
<style>
body {
  font-family:
    "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
#notes-page {
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    margin-bottom: 50px;
    text-align: center;
    font-size: 30px;
  }

  .note-list {
    background-color: rgb(33, 66, 33);
    color: white;
    border: 10px solid rgb(146, 97, 23);
    font-weight: bold;
    border-radius: 10px;
    width: 70%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}
</style>
