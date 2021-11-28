export const state = () => ({
  loading: true,

  waNumber: '62212526061',

  scrollAnchor: '',

  cacheContent: {
    home: {},
    aboutUs: {},
    brands: {},
    serviceAndSolutions: {},
    transaviaExperience: {},
    newsletterAndEvents: {},
    store: {},
    career: {},
    contactUs: {},
  },
})

export const mutations = {
  setLoading(state, loading) {
    state.loading = loading;
  },
  setWaNumber(state, waNumber) {
    state.waNumber = waNumber;
  },
  setScrollAnchor(state, scrollAnchor) {
    state.scrollAnchor = scrollAnchor;
  },
  setCacheContent(state, cacheContent) {
    state.cacheContent = {...state.cacheContent, ...cacheContent};
  },
}
