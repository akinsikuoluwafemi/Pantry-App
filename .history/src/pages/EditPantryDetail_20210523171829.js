import React from 'react';
import { connect } from 'react-redux';



 function EditPantryDetail() {
    return (
        <div >
            <h1 style={{fontSize: '6rem', marginTop: '6rem'}}>Edit</h1>
        </div>
    )
 }

 const mapStateToProps = (state) => {
     console.log(state)
 }

export default connect()(EditPantryDetail)