import {
  HEALT,
} from "../../../constants/healt";

const initialState = {
  heat: 'OK'
};

export default function (state = initialState, action) {
  switch (action.type) {
    case HEALT:
      return { ...state, healt: 'ok' };
    default:
      return state;
  }
}
