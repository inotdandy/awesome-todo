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

const mutations = {}

const actions = {}

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