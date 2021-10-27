import axios from 'axios';

export const setModal = payload => ({
  type: 'SET_MODAL',
  payload,
});

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
      .then(({ data }) => dispatch(registerRequest(data)))
      .then(() => {
        dispatch(setModal())
      })
      .then(() => {
        window.location.href = '/experiences'
      })
      .catch(error => dispatch(setError(error)))
  };
};