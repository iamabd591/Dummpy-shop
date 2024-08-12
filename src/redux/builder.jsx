export const request = ({ type }) => ({
  type: type,
});

export const success = ({ type, payload }) => ({
  type: type,
  payload: payload,
});

export const reject = ({ type, error }) => ({
  type: type,
  error: error,
});
