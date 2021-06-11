import Vue from 'vue'

const state = {
    todos: {
      'ID1' : {
          name: 'Go to shop',
          completed: false,
          dueDate: '01-08-2021',
          dueTime: '18:00'
      },
      'ID2' : {
        name: 'Buy milk',
        completed: false,
        dueDate: '02-14-2021',
        dueTime: '14:30'
      },
      'ID3' : {
        name: 'Buy fruits',
        completed: false,
        dueDate: '05-24-2021',
        dueTime: '12:00'
      }
    }
    
}

const mutations = {
  updateTodos : (state, payload) => {
    Object.assign(state.todos[payload.id], payload.updates);
  },
  deleteTodos : (state, id) => {
    Vue.delete(state.todos, id)
  }
}

const actions = {
  updateTodos({commit}, payload){
    commit('updateTodos', payload)
  },
  deleteTodos({commit}, id){
    commit('deleteTodos', id)
  }
}

const getters = {
    todos : (state) => {
        return state.todos
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}