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
        hidden: false,
      },
      {
        id: nanoid(),
        title: "angular",
        pair: 1,
        src: "/images/angular2.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "babel",
        pair: 2,
        src: "/images/babel.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "babel",
        pair: 2,
        src: "/images/babel.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "bootstrap",
        pair: 3,
        src: "/images/bootstrap.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "bootstrap",
        pair: 3,
        src: "/images/bootstrap.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "electron",
        pair: 4,
        src: "/images/electron.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "electron",
        pair: 4,
        src: "/images/electron.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "ember",
        pair: 5,
        src: "/images/ember.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "ember",
        pair: 5,
        src: "/images/ember.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "jquery",
        pair: 6,
        src: "/images/jquery.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "jquery",
        pair: 6,
        src: "/images/jquery.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "next.js",
        pair: 7,
        src: "/images/next.js.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "next.js",
        pair: 7,
        src: "/images/next.js.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "nodemon",
        pair: 8,
        src: "/images/nodemon.png",
        isOpen: false,
        hidden: false,
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
        hidden: false,
      },
      {
        id: nanoid(),
        title: "npm",
        pair: 9,
        src: "/images/npm.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "nuxt",
        pair: 10,
        src: "/images/nuxt.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "nuxt",
        pair: 10,
        src: "/images/nuxt.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "react-router",
        pair: 11,
        src: "/images/react-router.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "react-router",
        pair: 11,
        src: "/images/react-router.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "redux",
        pair: 12,
        src: "/images/redux.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "redux",
        pair: 12,
        src: "/images/redux.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "svelte",
        pair: 13,
        src: "/images/svelte.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "svelte",
        pair: 13,
        src: "/images/svelte.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "vue",
        pair: 14,
        src: "/images/vue.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "vue",
        pair: 14,
        src: "/images/vue.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "yarn",
        pair: 15,
        src: "/images/yarn.png",
        isOpen: false,
        hidden: false,
      },
      {
        id: nanoid(),
        title: "yarn",
        pair: 15,
        src: "/images/yarn.png",
        isOpen: false,
        hidden: false,
      },
    ],
    myScore: 0,
    myDouble: [],
  },
  reducers: {
    openCard: (state, action) => {
      const myitem = state.items.find((item) => item.id === action.payload);
      myitem.isOpen = true;
    },
    checkCard: (state, action) => {
      const myitem = state.items.find((item) => item.id === action.payload);

      state.myDouble.push({ id: myitem.id, pair: myitem.pair });

      if (
        state.myDouble.length === 2 &&
        state.myDouble[0].pair === state.myDouble[1].pair
      ) {
        const updatedItems = state.items.map((item) =>
          item.pair === state.myDouble[0].pair
            ? { ...item, hidden: true }
            : item
        );
        state.items = updatedItems;
        state.myDouble = [];
        state.myScore += 50;
      } else if (
        state.myDouble.length === 2 &&
        state.myDouble[0].pair !== state.myDouble[1].pair
      ) {
        state.myDouble = [];
        state.myScore -= 10;
      }
    },
    closeAgain: (state) => {
      const newlist = state.items.map((item) =>
        item.hidden ? item : { ...item, isOpen: false }
      );
      state.items = newlist;
    },
    playAgain: (state) => {
      const newStartList = state.items.map(
        (item) => item && { ...item, isOpen: false, hidden: false }
      );

      function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
      }
      state.items = shuffle(newStartList);

      state.myScore = 0;
      state.myDouble = [];
    },
  },
});

export const { openCard, checkCard, closeAgain, playAgain } =
  cardsSlice.actions;
export default cardsSlice.reducer;
