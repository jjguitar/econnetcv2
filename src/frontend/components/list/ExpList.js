import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { connect } from 'react-redux';
import { setModal } from '../../actions/index'
import '../../styles/ExpList.css'

const ExpList = (props) => {
  const { error, loading, totalExps, searchedExps} = useContext(AppContext)
  const renderFunc = props.children || props.render;

  return (
    <section className="ExpList-container">
      {/* {error && props.onError()}
      {loading && props.onLoading()}
      {(!loading && !totalExps) && props.onEmptyExps()}
      {!!totalExps &&  !searchedExps.length && props.onEmptySearchResults(props.searchText)} */}

      <ul>
        {props.searchedExps.map(renderFunc)}
      </ul>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    searchedExps : state.meetings
  };
};

const mapDispatchToProps = {
  setModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpList);

