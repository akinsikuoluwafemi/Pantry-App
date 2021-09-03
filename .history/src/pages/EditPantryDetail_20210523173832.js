import React from 'react';
import { connect } from 'react-redux';
import { EditPantrySection } from '../styles/NewPantryStyles';
import {} from '../styles/'


 function EditPantryDetail(props) {
     
     const { pantryDetail } = props;
     
     const { name, notes, weight, quantity, expiry, createdAt, imageSrc } = pantryDetail;
    
     return (
			<EditPantrySection
				initial={{ scaleY: 0 }}
				animate={{ scaleY: 1 }}
				exit={{ scaleY: 0 }}
				transition={{ duration: 0.3 }}
			>
				<HeaderTitle large>Edit Pantry Item</HeaderTitle>
			</EditPantrySection>
		);
 }

 const mapStateToProps = ({pantry: {pantryDetail}}) => {
     console.log(pantryDetail)
     return {
         pantryDetail
     }
 }

export default connect(mapStateToProps)(EditPantryDetail);