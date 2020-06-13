import {
    USER_PROFILE_START,
    USER_PROFILE_SUCCESS,
    USER_PROFILE_FAILED,
} from "./actions";

const initialState = {
    loading: false,
    data: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_PROFILE_START:
      return { ...state, loading: true };

    case USER_PROFILE_SUCCESS:
      return { ...state, loading: false, error: null, data: action.payload };

    case USER_PROFILE_FAILED:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}
