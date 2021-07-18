// prettier-ignore
export const state = () => ({
  products: [],
  page: 'index',
  toggleSidebar: false,
  toggleMarta: false,
  toggleCuttage: false,
  togglePatreon: false,
  toggleMock: false,
  timerA: null,
  timerB: null,
  timerC: null,
  timerD: null,
  timerE: null,
  timerF: null,
  timerG: null,
  timerJ: null,
  bkopen: false,
  rtmO: false,
  articleList: [
    {
      title: 'Music',
      description: 'Browse Music keywords for: Business, Employer.',
      image: require('@/assets/img/image1.jpg'),
      loading: require('@/assets/img/image1.jpg?lqip'),
      link: '/music'
    },
    {
      title: 'Tailoring',
      description: 'Browse Tailoring keywords for: Business, Employer, Land Developer.',
      image: require('@/assets/img/image1.jpg'),
      loading: require('@/assets/img/image1.jpg?lqip'),
      link: '/tailoring'
    },
    {
      title: 'Design',
      description: 'Looking for Agency? Browse all.',
      image: require('@/assets/img/image1.jpg'),
      loading: require('@/assets/img/image1.jpg?lqip'),
      link: '/design'
    },
    {
      title: 'Quality Products',
      description: 'Browse Quality Products keywords for: FinTech, Land Developer.',
      image: require('@/assets/img/image1.jpg'),
      loading: require('@/assets/img/image1.jpg?lqip'),
      link: '/quality'
    }
  ]
})

export const mutations = {
  setProducts(state, products) {
    state.products = products
  },
  updatePage(state, pageName) {
    state.page = pageName
  },
  TOGGLE_SIDEBAR(state) {
    state.toggleSidebar = !state.toggleSidebar
  },
  TOGGLE_MARTA(state) {
    state.toggleMarta = !state.toggleMarta
  },
  TOGGLE_CUTTAGE(state) {
    state.toggleCuttage = !state.toggleCuttage
  },
  TOGGLE_PATREON(state) {
    state.togglePatreon = !state.togglePatreon
  },
  TOGGLE_MOCK_TRUE(state) {
    state.toggleMock = true
  },
  TOGGLE_MOCK_FALSE(state) {
    state.toggleMock = false
  },
  CHANGE_TIMER_A(state, val) {
    state.timerA = val
  },
  CHANGE_TIMER_B(state, val) {
    state.timerB = val
  },
  CHANGE_TIMER_C(state, val) {
    state.timerC = val
  },
  CHANGE_TIMER_D(state, val) {
    state.timerD = val
  },
  CHANGE_TIMER_E(state, val) {
    state.timerE = val
  },
  CHANGE_TIMER_F(state, val) {
    state.timerF = val
  },
  CHANGE_TIMER_G(state, val) {
    state.timerG = val
  },
  CHANGE_TIMER_J(state, val) {
    state.timerJ = val
  },
  TOGGLE_BKOPEN(state) {
    state.bkopen = !state.bkopen
  },
  TOGGLE_RTM(state) {
    state.rtmO = !state.rtmO
  }
}

export const actions = {
  toggleSidebar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  toggleMarta({ commit }) {
    commit('TOGGLE_MARTA')
  },
  toggleCuttage({ commit }) {
    commit('TOGGLE_CUTTAGE')
  },
  togglePatreon({ commit }) {
    commit('TOGGLE_PATREON')
  },
  toggleMockTrue({ commit }) {
    commit('TOGGLE_MOCK_TRUE')
  },
  toggleMockFalse({ commit }) {
    commit('TOGGLE_MOCK_FALSE')
  },
  toggleTimers({ commit }) {
    if (state.timerA !== null) commit('CHANGE_TIMER_A', null);
    if (state.timerB !== null) commit('CHANGE_TIMER_B', null);
    if (state.timerC !== null) commit('CHANGE_TIMER_C', null);
    if (state.timerD !== null) commit('CHANGE_TIMER_D', null);
    if (state.timerE !== null) commit('CHANGE_TIMER_E', null);
    if (state.timerF !== null) commit('CHANGE_TIMER_F', null);
    if (state.timerJ !== null) commit('CHANGE_TIMER_J', null);
  },
  toggleTimersMob({ commit }) {
    if (state.timerA !== null) commit('CHANGE_TIMER_A', null);
    if (state.timerB !== null) commit('CHANGE_TIMER_B', null);
    if (state.timerC !== null) commit('CHANGE_TIMER_C', null);
    if (state.timerD !== null) commit('CHANGE_TIMER_D', null);
    if (state.timerE !== null) commit('CHANGE_TIMER_E', null);
    if (state.timerG !== null) commit('CHANGE_TIMER_G', null);
    if (state.timerJ !== null) commit('CHANGE_TIMER_J', null);
  }
}

export const getters = {
  toggleSidebar: (state) => state.toggleSidebar,
  toggleMarta: (state) => state.toggleMarta,
  toggleCuttage: (state) => state.toggleCuttage,
  togglePatreon: (state) => state.togglePatreon,
  toggleMock: (state) => state.toggleMock
}
