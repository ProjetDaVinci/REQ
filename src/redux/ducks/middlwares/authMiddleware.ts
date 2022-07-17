import { AnyAction, Dispatch } from "redux";
import { REHYDRATE } from "redux-persist";

import { actions } from "..";
import { http } from "../../../services/http";

export const authMiddleware =
  () =>
  (next: Dispatch) =>
  (action: AnyAction): AnyAction => {
    if (action.payload?.accessToken) {
      http.setAuthorizationHeader(action.payload.accessToken);
    }

    if (action.type === REHYDRATE) {
      action.payload?.auth?.accessToken &&
        http.setAuthorizationHeader(action.payload.auth.accessToken);
    }

    if (action.type === actions.auth.signOut.type) {
      http.unsetAuthorizationHeader();
    }

    return next(action);
  };
