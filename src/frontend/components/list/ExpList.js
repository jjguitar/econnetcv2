import React from 'react';
import { connect } from 'react-redux';
import { setModal, loadData } from '../../actions/index'
import '../../styles/ExpList.css'

const ExpList = (props) => {

  const renderFunc = props.children || props.render;
  // props.loadData(props.load)
  let data = props.load === 'meeting' ? props.meetings : props.process
  let searched = props.load === 'meeting' ? props.searchedExps : props.searchedProcess
  console.log(props.load)
  console.log(data)

  return (
    <section className="ExpList-container">
      {/* {error && props.onError()} */}
      {props.loading && props.onLoading()}
      {(!props.loading && !data.length) && props.onEmptyExps()}
      {!!data.length &&  !searched.length && props.onEmptySearchResults(props.searchText)}

      <ul>
        {!props.loading && searched.map(renderFunc)}
      </ul>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    searchedExps : state.searchedExps,
    searchedProcess : state.searchedProcess,
    loading: state.loading,
    meetings: state.meetings,
    process: state.process,
  };
};

const mapDispatchToProps = {
  setModal,
  loadData
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpList);

