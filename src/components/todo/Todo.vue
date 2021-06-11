<template>
    <q-item 
      v-ripple 
      clickable 
      @click="updateTodos({id,updates: {completed : !todo.completed}})"
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

         <q-item-section>
           <q-btn flat round color="red" icon="delete" dense @click.stop="promptToDelete(id)"/>
        </q-item-section>

      </q-item>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Todo',
    props: ['todo', 'id'],
    methods: {
      ...mapActions('todos', ['updateTodos', 'deleteTodos']),
      promptToDelete(id){
          this.$q.dialog({
              title: 'Confirm',
              message: 'Would you like to delete this todo?',
              cancel: true,
              persistent: true
            }).onOk(() => {
              this.deleteTodos(id)
            }).onOk(() => {
              // console.log('>>>> second OK catcher')
            }).onCancel(() => {
              // console.log('>>>> Cancel')
            }).onDismiss(() => {
              // console.log('I am triggered on both OK and Cancel')
            })
      }
    }
}
</script>

<style>

</style>