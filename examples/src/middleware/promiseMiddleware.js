import axios from 'axios';

const promiseMiddleware = store => next => action => {
    // 현재 스토어 상태값 기록
    console.log('현재 상태', store.getState());
    // 액션 기록
    console.log('action', action);

    // 액션을 다음 미들웨어, 혹은 리듀서로 넘김
    const { promise, type, ...rest } = action;
    next({ ...rest, type: `${type}_REQUEST` });

    // 액션 처리 후의 스토어 상태 기록
    console.log('다음 상태', store.getState());
    console.info('action', action);

    return axios({
        method: promise.method,
        url: promise.url,
        data: promise.data
    }).then(result => {
        next({ ...rest, result, type: `${type}_SUCCESS` });
    }).catch(error => {
        next({ ...rest, error, type: `${type}_FAILURE` });
    });
}

export default promiseMiddleware;