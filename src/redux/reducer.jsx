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

    default:
      return state;
  }
}
