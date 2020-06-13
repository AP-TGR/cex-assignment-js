import {
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
} from "./actions";

const initialState = {
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER_START:
      return { ...state, loading: true };

    case REGISTER_USER_SUCCESS:
      return { ...state, loading: false, error: null };

    case REGISTER_USER_FAILED:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}
