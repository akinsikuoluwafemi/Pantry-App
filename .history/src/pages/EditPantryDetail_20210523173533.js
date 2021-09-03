import React from 'react';
import { connect } from 'react-redux';
import { EditPantrySection } from '../styles/NewPantryStyles';



 function EditPantryDetail(props) {
     
     const { pantryDetail } = props;
     
     const { name, notes, weight, quantity, expiry, createdAt, imageSrc } = pantryDetail;
    
     return (
         <EditPantrySection
             
         >
             

        </EditPantrySection>
         
        
    )
 }

 const mapStateToProps = ({pantry: {pantryDetail}}) => {
     console.log(pantryDetail)
     return {
         pantryDetail
     }
 }

export default connect(mapStateToProps)(EditPantryDetail);