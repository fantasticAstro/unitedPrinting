// Packages
import {
  ActionTree,
  GetterTree,
  Module,
  MutationTree,
} from 'vuex';

// Local Imports
import router from '../../router';

/*
  Navigation Module

  In order to maintain the Vuex store as the center of logic, and keep
  the components soley as methods of displaying the data, all components
  will use the navigation module to route to various pages
  The navigation module will manage the current page and provide getters
  to turn on and off various styles.
*/

// State interface
export interface NavigationState {
  currentPage: string;
}

// Default state
export const defaultState = (): NavigationState => ({
  currentPage: '',
});

// Module state
const moduleState: NavigationState = defaultState();

// Module getters
const getters: GetterTree<NavigationState, any> = {};

// Module mutations
const mutations: MutationTree<NavigationState> = {
  /**
   * Sets value of current page.
   *
   * @param {NavigationState} state Module state.
   * @param {string} page Page name.
   */
  setCurrentPage(
    state: NavigationState,
    page: string,
  ): void {
    state.currentPage = page;
  },
};

// Module actions
const actions: ActionTree<NavigationState, any> = {
  /**
   * On each page change, update the current page.
   *
   * @param {ActionContext<NavigationState, any>} context Vuex action context.
   * @param {Record<string, string>} payload Incoming payload.
   * @param {string} payload.name Name of the new page.
   */
  handlePageLoad(
    { commit },
    { name },
  ): void {
    commit('setCurrentPage', name);
  },

  /**
   * Routes the user to Home page.
   *
   * @param {ActionContext<NavigationState, any>} context Vuex action context.
   */
  goToHome({
    dispatch,
    rootGetters,
    state,
  }): void {
    try {
      if (state.currentPage !== 'Home') {
        router.push('/');
      }
    } catch (error) {
      dispatch('goTo404');
    }
  },

  /**
   * Routes the user to About page.
   *
   * @param {ActionContext<NavigationState, any>} context Vuex action context.
   */
  goToAbout({
    dispatch,
    rootGetters,
    state,
  }): void {
    try {
      if (state.currentPage !== 'Home') {
        router.push('/');
      }
    } catch (error) {
      dispatch('goTo404');
    }
  },

  /**
   * Routes the user to About page.
   *
   * @param {ActionContext<NavigationState, any>} context Vuex action context.
   */
  goToServices({
    dispatch,
    rootGetters,
    state,
  }): void {
    try {
      if (state.currentPage !== 'Home') {
        router.push('/');
      }
    } catch (error) {
      dispatch('goTo404');
    }
  },

  /**
   * Routes the user to Contact page.
   *
   * @param {ActionContext<NavigationState, any>} context Vuex action context.
   */
  goToContact({
    dispatch,
    rootGetters,
    state,
  }): void {
    try {
      if (state.currentPage !== 'Home') {
        router.push('/');
      }
    } catch (error) {
      dispatch('goTo404');
    }
  },
};

// Module
const navigation: Module<NavigationState, Record<string, any>> = {
  namespaced: true,
  state: moduleState,
  getters,
  mutations,
  actions,
};

export default navigation;
