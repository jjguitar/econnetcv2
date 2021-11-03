import axios from 'axios';

export const setModal = payload => ({
  type: 'SET_MODAL',
  payload,
});

export const registerData = payload => ({
  type: 'REGISTER_DATA',
  payload,
});

export const registerDataProcess = payload => ({
  type: 'REGISTER_DATA_PROCESS',
  payload,
});

export const setLoad = payload => ({
  type: 'SET_LOAD',
  payload,
});

export const findData = (payload) => ({
  type: 'FIND_DATA',
  payload,
})

export const loadData = (payload) => {
  console.log('loadData');
  if(!payload) payload = 'meeting'
  console.log('payload');
  console.log(payload);
  return (dispatch) => {
    axios.get(`http://localhost:3000/api/v1/${payload}`)
      .then(({ data }) => {
        if (payload === 'meeting') {
          dispatch(registerData(data))
        }else {
          dispatch(registerDataProcess(data))
        }
      })
      .then(() => dispatch(findData()))
      .then(() => dispatch(setLoad(false)))
      .catch(error => dispatch(setError(error)))
  };
};

export const registerRequest = payload => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const setSearchValue = (payload) => ({
  type: 'SET_SEARCH_VALUE',
  payload,
})

export const registerMeeting = (payload) => {
  console.log('payload');
  console.log(payload);
  return (dispatch) => {
    axios.post('/meetings', payload)
      // .then(({ data }) => dispatch(registerRequest()))
      // .then(() => dispatch(loadData()))
      .then(() => {
        dispatch(setModal())
      })
      .then(() => {
        dispatch(loadData())
      })
      .then(() => {
        window.location.href = '#/experiences'
      })
      .catch(error => dispatch(setError(error)))
  };
};

export const deleteMeeting = (payload) => {
  console.log('payload');
  console.log(payload);
  return (dispatch) => {
    axios.post('/deleteMeeting', payload)
      // .then(({ data }) => dispatch(registerRequest()))
      // .then(() => dispatch(loadData()))
      // .then(() => {
      //   dispatch(setModal())
      // })
      .then(() => {
        dispatch(loadData())
      })
      .then(() => {
        window.location.href = '#/experiences'
      })
      .catch(error => dispatch(setError(error)))
  };
};