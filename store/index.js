export const state = () => ({
  loading: true,

  toast: {
    active: false,
    title: '',
    message: '',
  },
})

export const mutations = {
  setLoading(state, loading) {
    state.loading = loading
  },
  setToast(state, toast) {
    state.toast = toast
  },
}
