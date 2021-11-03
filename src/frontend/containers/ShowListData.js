import React from 'react';
import { CreateButton } from '../components/CreateButton';
import ExpSearch from '../components/ExpSearch';
import { Modal } from '../components/modal';
import Form from '../components/Form';
import ExpList from '../components/list/ExpList.js'
import { ExpsError } from '../components/list/ExpsError.js'
import { ExpsLoading } from '../components/list/ExpsLoading.js'
import { EmptyExps } from '../components/list/EmptyExps.js'
import ExpItem from '../components/list/ExpItem.js'
import { connect } from 'react-redux';
import { setModal } from '../actions/index'
import '../styles/Experiences.scss';

const ShowListData = (props) => {
  console.log(props)
	return (
		<section className="Experience">
      <h1>{props.namePage}</h1>
      <ExpSearch/>

      <ExpList
        // onError={() => <ExpsError />}
        onLoading={() => <ExpsLoading />}
        onEmptyExps={() => <EmptyExps />}
        searchText={props.searchValue}

        onEmptySearchResults={(searchText) => (
          <p className="NotFoundMessage">No hay resultado para {searchText} </p>
        )}
      >
        {exp => (
          <ExpItem
            key={exp.id}
            id={exp.id}
            tittle={exp.name}
            date={exp.date}
            completed={exp.reqVolunteer}
            // onComplete={() => toggleExp(exp.id)}
            // onDelete={() => deleteExp(exp.id)}
            // setOpenModal={setOpenModal}
          />
        )}
      </ExpList>

      {props.openModal && (
        <Modal>
          <Form />
        </Modal>
      )}
      <CreateButton
        setOpenModal={() => props.setModal()}
      />
		</section>
	);
}

const mapStateToProps = state => {
  return {
    openModal: state.openModal,
    searchValue: state.searchValue,
  };
};

const mapDispatchToProps = {
  setModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowListData);
