import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    items: [
      {
        id: nanoid(),
        title: "angular",
        pair: 1,
        src: "/images/angular2.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        title: "angular",
        pair: 1,
        src: "/images/angular2.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        title: "babel",
        pair: 2,
        src: "/images/babel.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        title: "babel",
        pair: 2,
        src: "/images/babel.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        title: "bootstrap",
        pair: 3,
        src: "/images/bootstrap.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        title: "bootstrap",
        pair: 3,
        src: "/images/bootstrap.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        title: "electron",
        pair: 4,
        src: "/images/electron.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        title: "electron",
        pair: 4,
        src: "/images/electron.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        title: "ember",
        pair: 5,
        src: "/images/ember.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        title: "ember",
        pair: 5,
        src: "/images/ember.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        title: "jquery",
        pair: 6,
        src: "/images/jquery.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        title: "jquery",
        pair: 6,
        src: "/images/jquery.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        title: "next.js",
        pair: 7,
        src: "/images/next.js.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        title: "next.js",
        pair: 7,
        src: "/images/next.js.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        title: "nodemon",
        pair: 8,
        src: "/images/nodemon.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        title: "nodemon",
        pair: 8,
        src: "/images/nodemon.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        title: "npm",
        pair: 9,
        src: "/images/npm.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        title: "npm",
        pair: 9,
        src: "/images/npm.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        title: "nuxt",
        pair: 10,
        src: "/images/nuxt.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        title: "nuxt",
        pair: 10,
        src: "/images/nuxt.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        title: "react-router",
        pair: 11,
        src: "/images/react-router.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        title: "react-router",
        pair: 11,
        src: "/images/react-router.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        title: "redux",
        pair: 12,
        src: "/images/redux.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        title: "redux",
        pair: 12,
        src: "/images/redux.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        title: "svelte",
        pair: 13,
        src: "/images/svelte.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        title: "svelte",
        pair: 13,
        src: "/images/svelte.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        title: "vue",
        pair: 14,
        src: "/images/vue.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        title: "vue",
        pair: 14,
        src: "/images/vue.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        title: "yarn",
        pair: 15,
        src: "/images/yarn.png",
        isOpen: false,
      },
      {
        id: nanoid(),
        title: "yarn",
        pair: 15,
        src: "/images/yarn.png",
        isOpen: false,
      },
    ],
  },
  reducers: {
    toggleOpen: (state, action) => {
      const length = state.items.filter((item) => item.isOpen).length;
      if (length >= 2) {
        return;
      }
      const myitem = state.items.find((item) => item.id === action.payload);
      myitem.isOpen = !myitem.isOpen;
    },
  },
});

export const { toggleOpen } = cardsSlice.actions;
export default cardsSlice.reducer;
