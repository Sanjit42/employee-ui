import * as types from '../constants/constant';

function actionTypeEndsInProgress(type) {
  return type.substring(type.length - 8) == '_SUCCESS';
}

export default function ajaxStatusReducer(state = 0, action) {
  if (action.type == types.BEGIN_AJAX_CALL) {
    return state + 1;
  } else if (action.type == types.AJAX_CALL_ERROR|| actionTypeEndsInProgress(action.type))
    return state - 1;
  return state;
}
