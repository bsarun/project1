import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddRequestComponent2 from '../../components/AddRequestComponent2';
import * as addRequestActions from '../../actions/addRequestActions';

function mapStateToProps(state, ownProps) {
    return {
        addrequest: state.addrequest
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(addRequestActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRequestComponent2);