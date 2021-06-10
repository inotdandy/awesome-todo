<template>
  <q-page class="q-pa-md">
    <p>Todo</p>
    <q-list bordered separator>
      <todo v-for="(todo, key) in todos" :key="key" :id="key" :todo="todo"></todo>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Todo',
  computed: {
    ...mapGetters('todos', ['todos'])
  },
  components: {
    'todo' : require('components/todo/Todo').default
  }
}
</script>
