import React from 'react';
import { connect } from 'react-redux';



 function EditPantryDetail(props) {
     const { pantryDetail } = props;
     
     const { name, notes, weight, quantity, expiry, createdAt, imageSrc } = pantryDetail;
    
     return (
        <div >
            <h1 style={{fontSize: '6rem', marginTop: '6rem'}}>Edit</h1>
        </div>
    )
 }

 const mapStateToProps = ({pantry: {pantryDetail}}) => {
     console.log(pantryDetail)
     return {
         pantryDetail
     }
 }

export default connect(mapStateToProps)(EditPantryDetail);