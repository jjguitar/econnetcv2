import React from 'react';
import { connect } from 'react-redux';
import { setModal } from '../../actions/index'
import '../../styles/ExpList.css'

const ExpList = (props) => {
  // const { error, loading, totalExps, searchedExps} = useContext(AppContext)
  const renderFunc = props.children || props.render;

  return (
    <section className="ExpList-container">
      {/* {error && props.onError()} */}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.meetings.length) && props.onEmptyExps()}
      {!!props.meetings.length &&  !props.searchedExps.length && props.onEmptySearchResults(props.searchText)}

      <ul>
        {!props.loading && props.searchedExps.map(renderFunc)}
      </ul>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    searchedExps : state.searchedExps,
    loading: state.loading,
    meetings: state.meetings,
  };
};

const mapDispatchToProps = {
  setModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpList);

