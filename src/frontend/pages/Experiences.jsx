import React, { useContext } from 'react';
import { CreateButton } from '../components/CreateButton';
import { ExpSearch } from '../components/ExpSearch';
import { Modal } from '../components/modal';
import { Form } from '../components/Form';
import { ExpList } from '../components/list/ExpList.js'
import { ExpsError } from '../components/list/ExpsError.js'
import { ExpsLoading } from '../components/list/ExpsLoading.js'
import { EmptyExps } from '../components/list/EmptyExps.js'
import { ExpItem } from '../components/list/ExpItem.js'
import AppContext from '../context/AppContext';
import '../styles/Experiences.scss';

const Experiences = () => {
  const {
    toggleExp,
    deleteExp,
    openModal,
    setOpenModal,
    searchValue,
  } = useContext(AppContext)
	return (
		<div className="Experience">
      <h1>Experiencias</h1>
      <ExpSearch/>

      <ExpList
        onError={() => <ExpsError />}
        onLoading={() => <ExpsLoading />}
        onEmptyExps={() => <EmptyExps />}
        searchText={searchValue}

        onEmptySearchResults={(searchText) => (
          <p className="NotFoundMessage">No hay resultado para {searchText} </p>
        )}
      >
        {exp => (
          <ExpItem
            key={exp.id}
            id={exp.id}
            tittle={exp.tittle}
            date={exp.date}
            completed={exp.completed}
            onComplete={() => toggleExp(exp.id)}
            onDelete={() => deleteExp(exp.id)}
            setOpenModal={setOpenModal}
          />
        )}
      </ExpList>

      {openModal && (
        <Modal>
          <Form />
        </Modal>
      )}
      <CreateButton
        setOpenModal={setOpenModal}
      />
		</div>
	);
}

export { Experiences };
