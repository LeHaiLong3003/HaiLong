import { push } from 'connected-react-router';
import { call, put, takeLatest } from 'redux-saga/effects';

// Action
import { authActions } from './authSlice';

// Apis
import authApi from 'src/apis/auth';

// Utils
import { routes } from 'src/utils/constants';
import { StorageConstants, UserRoles } from 'src/utils/enum';

function* handleLogin(action) {
  try {
    const resp = yield call(authApi.login, action.payload);
    const data = resp.data.data;
    const accessToken = data.token;
    const role = data.user.role;

    localStorage.setItem(StorageConstants.ACCESS_TOKEN, accessToken);
    localStorage.setItem(StorageConstants.USER, JSON.stringify(data.user));

    switch (role) {
      case UserRoles.ADMIN:
        yield put(authActions.loginSuccess(resp));
        yield put(push(routes.AUTH));
        break;
      case UserRoles.STUDENT:
        yield put(authActions.loginSuccess(resp));
        yield put(push(routes.AUTH));
        break;
      case role === UserRoles.TEACHER:
        yield put(authActions.loginSuccess(resp));
        yield put(push(routes.AUTH));
        break;
      default:
        break;
    }
  } catch (error) {
    yield put(authActions.loginFailed(error.response));
  }
}

export default function* authSaga() {
  yield takeLatest(authActions.login.type, handleLogin);
}
