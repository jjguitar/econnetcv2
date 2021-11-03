import axios from 'axios';

export const setModal = payload => ({
  type: 'SET_MODAL',
  payload,
});

export const registerData = payload => ({
  type: 'REGISTER_DATA',
  payload,
});

export const setLoad = payload => ({
  type: 'SET_LOAD',
  payload,
});

export const loadData = () => {
  console.log('loadData');
  // console.log(payload);
  return (dispatch) => {
    axios.get('http://localhost:3000/api/v1/meeting')
      .then(({ data }) => dispatch(registerData(data)))
      .then(() => dispatch(setLoad(false)))
      .catch(error => dispatch(setError(error)))
  };
};

export const registerRequest = payload => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const findData = (payload) => ({
  type: 'FIND_DATA',
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