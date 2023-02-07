const ProjectStore = {
  state: {
    projectInfo: {}
  },
  mutations: {
    setProjectInfo(state, payload) {
      state.projectInfo = payload
    }
  },
  actions: {
    setProjectInfo(context, payload) {
      console.log(payload)
      context.commit('setProjectInfo', payload)
    }
  }
}

export default ProjectStore
