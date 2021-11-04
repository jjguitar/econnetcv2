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

export const registerUsersData = payload => ({
  type: 'REGISTER_USER_DATA',
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

export const findDataDefaultValues = (payload, id) => ({
  type: 'FIND_DATA_DEFAULT',
  payload,
  id,
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

export const loadUsers = () => {
  return (dispatch) => {
    axios.get('http://localhost:3000/api/v1/users')
      .then(({ data }) => {
        // console.log(data);
        let userData = data.map((dat) => {
          return {
            name: `${dat.first_name} ${dat.last_name}`,
            id: dat.id,
          }
        })
        console.log(userData)
        dispatch(registerUsersData(userData))
      })
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

export const registerProcess = (payload) => {
  console.log('process');
  console.log(payload);
  return (dispatch) => {
    axios.post('/process', payload)
      // .then(({ data }) => dispatch(registerRequest()))
      // .then(() => dispatch(loadData()))
      .then(() => {
        dispatch(setModal())
      })
      .then(() => {
        dispatch(loadData('process'))
      })
      .then(() => {
        window.location.href = '#/processes'
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

export const deleteProcess = (payload) => {
  console.log('payload');
  console.log(payload);
  return (dispatch) => {
    axios.post('/deleteProcess', payload)
      // .then(({ data }) => dispatch(registerRequest()))
      // .then(() => dispatch(loadData()))
      // .then(() => {
      //   dispatch(setModal())
      // })
      .then(() => {
        dispatch(loadData('process'))
      })
      .then(() => {
        window.location.href = '#/processes'
      })
      .catch(error => dispatch(setError(error)))
  };
};

export const registerUserToProcess = (payload, url) => {
  console.log('registerUserToProcess');
  console.log(payload);
  console.log('url');
  console.log(url);
  return (dispatch) => {
    axios.post('/process/add-process', payload)
      // .then(({ data }) => dispatch(registerRequest()))
      // .then(() => dispatch(loadData()))
      .then(() => {
        dispatch(loadData('process'))
      })
      .then(() => {
        window.location.href = `#/process/${url}`
      })
      .catch(error => dispatch(setError(error)))
  };
};

export const deleteUserProcess = (payload, url) => {
  console.log('payload');
  console.log(payload);
  return (dispatch) => {
    axios.post('/process/delete-user-process', payload)
      // .then(({ data }) => dispatch(registerRequest()))
      // .then(() => dispatch(loadData()))
      // .then(() => {
      //   dispatch(setModal())
      // })
      .then(() => {
        dispatch(loadData('process'))
      })
      .then(() => {
        window.location.href = `#/process/${url}`
      })
      .catch(error => dispatch(setError(error)))
  };
};

export const setDefaultValue = payload => ({
  type: 'DEFAULT_VALUE',
  payload,
});

export const clearDefault = payload => ({
  type: 'DEFAULT_CLEAR',
  payload,
});
