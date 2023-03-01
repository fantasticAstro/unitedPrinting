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

/**
 * Enum for page names.
 *
 * @type {Record<string, string>}
 */
export const PAGES_ENUM = {
  HOME: 'home',
  ABOUT: 'about',
  SERVICES: 'services',
  CONTACT: 'contact',
  QUOTE: 'quote',
};

// Simple page object.
export interface PageObject {
  title: string;
  name: string;
}

export const BASE_PAGES: Record<string, PageObject> = {
  HOME: {
    title: 'Home',
    name: 'home',
  },
  ABOUT: {
    title: 'About',
    name: 'about',
  },
  SERVICES: {
    title: 'Services',
    name: 'services',
  },
  CONTACT: {
    title: 'Contact',
    name: 'contact',
  },
};

// Default state
export const defaultState = (): NavigationState => ({
  /**
   * Current page name.
   *
   * @type {string}
   */
  currentPage: '',
});

// Module state
const moduleState: NavigationState = defaultState();

// Module getters
const getters: GetterTree<NavigationState, any> = {
  /**
   * Returns sanitized page name.
   *
   * @param {NavigationState} state Module state.
   * @returns {string} Sanitized page name.
   */
  getPage(state: NavigationState): string {
    if ([
      PAGES_ENUM.ABOUT,
      PAGES_ENUM.SERVICES,
      PAGES_ENUM.CONTACT,
    ].includes(state.currentPage)) {
      return state.currentPage;
    } if (state.currentPage === PAGES_ENUM.QUOTE) {
      return PAGES_ENUM.CONTACT;
    }
    return PAGES_ENUM.HOME;
  },

  /**
   * Whether the navigation component should be dark.
   *
   * @param {NavigationState} state Module state.
   * @returns {boolean} Whether navigation should be dark.
   */
  navigationShouldBeDark(state: NavigationState): boolean {
    return [
      PAGES_ENUM.ABOUT,
      PAGES_ENUM.CONTACT,
    ].includes(state.currentPage);
  },

  /**
   * Whether the app-bar component should be dark.
   *
   * @param {NavigationState} state Module state.
   * @returns {boolean} Whether app-bar should be dark.
   */
  appBarShouldBeDark(state: NavigationState): boolean {
    return state.currentPage === PAGES_ENUM.QUOTE;
  },
};

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
    state,
  }): void {
    try {
      if (state.currentPage !== 'home') {
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
    state,
  }): void {
    try {
      if (state.currentPage !== 'about') {
        router.push('/about');
      }
    } catch (error) {
      dispatch('goTo404');
    }
  },

  /**
   * Routes the user to Services page.
   *
   * @param {ActionContext<NavigationState, any>} context Vuex action context.
   */
  goToServices({
    dispatch,
    state,
  }): void {
    try {
      if (state.currentPage !== 'services') {
        router.push('/services');
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
    state,
  }): void {
    try {
      if (state.currentPage !== 'contact') {
        router.push('/contact');
      }
    } catch (error) {
      dispatch('goTo404');
    }
  },

  /**
   * Routes the user to Quote page.
   *
   * @param {ActionContext<NavigationState, any>} context Vuex action context.
   */
  goToQuote({
    dispatch,
    state,
  }): void {
    try {
      if (state.currentPage !== 'quote') {
        router.push('/quote');
      }
    } catch (error) {
      dispatch('goTo404');
    }
  },

  /**
   * Routes the user to error page.
   */
  goTo404({ state }) {
    if (state.currentPage !== '404') {
      router.push('/404');
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
