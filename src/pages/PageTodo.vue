<template>
  <q-page class="q-pa-md">
    <p>Todo</p>
    <q-list bordered separator>
      <q-item 
      v-ripple 
      v-for="todo in todos" :key="todo.id" 
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
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'Todo',
  data(){
    return{
      todos : [
        {
          id: 1,
          name: 'Go to shop',
          completed: false,
          dueDate: '01-08-2021',
          dueTime: '18:00'
        },

        {
          id: 2,
          name: 'Buy milk',
          completed: false,
          dueDate: '02-14-2021',
          dueTime: '14:30'
        },

        {
          id: 3,
          name: 'Buy fruits',
          completed: false,
          dueDate: '05-24-2021',
          dueTime: '12:00'
        }
        
      ]
    }
  }
}
</script>
