import {connect } from 'react-redux'
import  Page1 from './index.js'
function mapStateToProps(state) {
    return {
      value:10
    }
  }
  
  // Map Redux actions to component props
  function mapDispatchToProps(dispatch) {
    return {
     
    }
  }
  // Connected Component
  export const Page1Connet = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Page1)