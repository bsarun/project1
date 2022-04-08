import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HeaderComponent from '../../components/HeaderComponent';
import * as headerActions from '../../actions/headerActions';

function mapStateToProps(state, ownProps) {
    return {
        header: state.header
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(headerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);