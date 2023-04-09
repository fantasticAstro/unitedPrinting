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
  /**
   * Name of current page.
   */
  currentPage: string;

  /**
   * Width of current page.
   */
  width: number;
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

/**
 * Simple page object.
 */
export interface PageObject {
  title: string;
  name: string;
}

/**
 * Base page objects with names.
 */
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

  /**
   * Width of screen.
   */
  width: -1,
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
      return PAGES_ENUM.QUOTE;
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
    return state.currentPage === PAGES_ENUM.CONTACT;
  },

  /**
   * Retrieves with width of the view window.
   *
   * @param {NavigationState} state Module state.
   * @returns {number} The width of the page.
   */
  getWidth(state: NavigationState): number {
    return state.width;
  },

  /**
   * Whether the width of the viewport is small.
   *
   * @param {NavigationState} state Module state.
   * @returns {number} Whether the width of the viewport is small.
   */
  isSmaller(state: NavigationState): boolean {
    return state.width < 600;
  },

  /**
   * Whether the width of the viewport is small.
   *
   * @param {NavigationState} state Module state.
   * @returns {number} Whether the width of the viewport is small.
   */
  isSmall(state: NavigationState): boolean {
    return state.width < 720 && state.width >= 600;
  },

  /**
   * Whether the width of the viewport is medium.
   *
   * @param {NavigationState} state Module state.
   * @returns {number} Whether the width of the viewport is medium.
   */
  isMedium(state: NavigationState): boolean {
    return state.width >= 720 && state.width < 1200;
  },

  /**
   * Whether the width of the viewport is large.
   *
   * @param {NavigationState} state Module state.
   * @returns {number} Whether the width of the viewport is large.
   */
  isLarge(state: NavigationState): boolean {
    return state.width >= 1200 && state.width < 1920;
  },

  /**
   * Whether the width of the viewport is larger.
   *
   * @param {NavigationState} state Module state.
   * @returns {number} Whether the width of the viewport is larger.
   */
  isLarger(state: NavigationState): boolean {
    return state.width >= 1920;
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

  /**
   * Sets value of width of viewport.
   *
   * @param {NavigationState} state Module state.
   * @param {number} width Width of the page.
   */
  setWidth(
    state: NavigationState,
    width: number,
  ): void {
    state.width = width;
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
   * On each viewport resize.
   *
   * @param {ActionContext<NavigationState, any>} context Vuex action context.
   */
  handleResize({ commit }): void {
    commit('setWidth', window.innerWidth);
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
