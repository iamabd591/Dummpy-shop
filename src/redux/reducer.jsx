const initialState = {
  lang: "en",
  dir: "ltr",
  dataThemeMode: "light",
  dataMenuStyles: "dark",
  dataNavLayout: "vertical",
  dataHeaderStyles: "light",
  dataVerticalStyle: "overlay",
  StylebodyBg: "107 64 64",
  StyleDarkBg: "93 50 50",
  toggled: "",
  dataNavStyle: "",
  horStyle: "",
  dataPageStyle: "regular",
  dataWidth: "fullwidth",
  dataMenuPosition: "fixed",
  dataHeaderPosition: "fixed",
  loader: "disable",
  iconOverlay: "",
  colorPrimaryRgb: "",
  bodyBg1: "",
  bodyBg2: "",
  darkBg: "",
  inputBorder: "",
  bgImg: "",
  iconText: "",
  body: {
    class: "",
  },
  loader: false,
  products: [],
  productById: {},
  fakeApiProduct: [],
  fakeApiProductByID: {},
  news: [],
  newsById: {},
  searchQuery: "",
  SearchProducts: [],
  categories: [],
  categoriesProducts: [],
  cartItems: localStorage?.getItem("cartItems")
    ? JSON.parse(localStorage?.getItem("cartItems"))
    : [],
  cartCount: localStorage?.getItem("cartCounter")
    ? parseInt(localStorage?.getItem("cartCounter"), 10)
    : 0,
};
export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ThemeChanger":
      state = payload;
      return state;

    //! Dummy API Products
    case "GET_PRODUCTS_REQUEST":
      return { ...state, loader: true };

    case "GET_PRODUCTS_SUCCESS":
      return { ...state, loader: false, products: payload };

    case "GET_PRODUCTS_FAILURE":
      return { ...state, loader: false };

    case "GET_PRODUCTS_REQUEST_BY_ID":
      return { ...state, loader: true };

    case "GET_PRODUCTS_SUCCESS_BY_ID":
      return { ...state, loader: false, productById: payload };

    case "GET_PRODUCTS_FAILURE_BY_ID":
      return { ...state, loader: false };

    //! Fake API Products
    case "GET_FAKE_PRODUCTS_REQUEST":
      return { ...state, loader: true };

    case "GET_FAKE_PRODUCTS_SUCCESS":
      return { ...state, loader: false, fakeApiProduct: payload };

    case "GET_FAKE_PRODUCTS_FAILURE":
      return { ...state, loader: false };

    case "GET_FAKE_PRODUCTS_REQUEST_BY_ID":
      return { ...state, loader: true };

    case "GET_FAKE_PRODUCTS_SUCCESS_BY_ID":
      return { ...state, loader: false, fakeApiProductByID: payload };

    case "GET_FAKE_PRODUCTS_FAILURE_BY_ID":
      return { ...state, loader: false };

    case "GET_CATEGORIES_REQUEST":
      return { ...state, loader: true };

    case "GET_CATEGORIES_SUCCESS":
      return { ...state, loader: false, categories: payload };

    case "GET_CATEGORIES_P_FAILURE":
      return { ...state, loader: false };

    case "GET_CATEGORIES_PRODUCTS_REQUEST":
      return { ...state, loader: true };

    case "GET_CATEGORIES_PRODUCTS_SUCCESS":
      return { ...state, loader: false, categoriesProducts: payload };

    case "GET_CATEGORIES_PRODUCTS_FAILURE":
      return { ...state, loader: false };

    //! News API
    case "GET_NEWS_REQUEST":
      return { ...state, loader: true };

    case "GET_NEWS_SUCCESS":
      return { ...state, loader: false, news: payload };

    case "GET_NEWS_FAILURE":
      return { ...state, loader: false };

    case "GET_NEWS_BY_ID":
      return { ...state, loader: true };

    case "GET_NEWS_SUCCESS_BY_ID":
      return { ...state, loader: false, newsById: payload };

    case "GET_NEWS_FAILURE_BY_ID":
      return { ...state, loader: false };

    //! SEARCH PRODUCT
    case "GET_SEARCH_PRODUCT_REQUEST":
      return { ...state, loader: true };

    case "GET_SEARCH_PRODUCT_SUCCESS":
      return { ...state, loader: false, SearchProducts: payload };

    case "GET_SEARCH_PRODUCT_FAILURE":
      return { ...state, loader: false };

    case "SET_SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action?.payload,
      };

    //! CART ITEMS
    case "ADD_TO_CART": {
      const itemExists = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (itemExists) {
        const updatedItems = state.cartItems.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );

        localStorage.setItem("cartItems", JSON.stringify(updatedItems)); // Update local storage
        return {
          ...state,
          cartItems: updatedItems,
          cartCount: state.cartCount + 1,
        };
      } else {
        const newItems = [...state.cartItems, { ...action.payload, qty: 1 }];
        localStorage.setItem("cartItems", JSON.stringify(newItems)); // Update local storage
        return {
          ...state,
          cartItems: newItems,
          cartCount: state.cartCount + 1,
        };
      }
    }

    case "REMOVE_TO_PRODUCT": {
      const updatedItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      localStorage.setItem("cartItems", JSON.stringify(updatedItems)); // Update local storage
      return {
        ...state,
        cartItems: updatedItems,
        cartCount: state.cartCount - 1,
      };
    }

    case "INITILIZE_CART_COUNT":
      return {
        ...state,
        cartCount: action?.payload,
      };

    default:
      return state;
  }
}
