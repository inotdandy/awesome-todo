<template>
    <q-item 
      v-ripple 
      clickable 
      @click="todo.completed = !todo.completed"
      :class="!todo.completed ? 'bg-orange-1' : 'bg-green-1'">
        <q-item-section side top>
          <q-checkbox v-model="todo.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label :class="{'strike-through' : todo.completed}">
            {{ todo.name }}
          </q-item-label>
        </q-item-section>

        <q-item-section side top>
          <div class="row">
            <div class="column justify-center">
              <q-icon name="event" size="18px" class="q-mr-xs"/>
            </div>
            <div class="column">
              <q-item-label caption>
                <div class="row justify-end">
                  {{ todo.dueDate }}
                </div>
              </q-item-label>
              <q-item-label caption>
                <div class="row justify-end">
                  <small>{{ todo.dueTime }}</small>
                </div>
              </q-item-label>
            </div>
          </div>
        </q-item-section>
      </q-item>
</template>

<script>
export default {
    name: 'Todo',
    props: ['todo', 'id']
}
</script>

<style>

</style>