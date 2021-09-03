import React from 'react';
import { PantryListSection } from '../styles/PantryListStyles';
import { connect } from 'react-redux';
import { HeaderTitle } from '../styles/TextStyles';
import PantryItemList from '../components/PantryItemList';
import { filteredPantryChip } from '../redux/actions/pantryActions';
import { Header, Headerlist, HeaderWrapper } from '../styles/Headerstyles';
import { Link, useLocation, useParams, useRouteMatch } from 'react-router-dom';



const Home = (props) => {
	const {  filteredPantryChip, pantryArrCopy } = props;


	const handleChips = (e) => {
		console.log(e.target.value);
	};

	return (
		<PantryListSection
		// initial={{ opacity: 0 }}
		// animate={{ opacity: 1 }}
		// exit={{ opacity: 0 }}
		// transition={{ duration: 0.4 }}
		>
			<Header>
				<HeaderWrapper className="container header-wrapper">
					<Link to="/" className="mr-auto">
						<img style={{ height: '6rem' }} src={PantryLogo} alt="app-logo" />
					</Link>
					<Headerlist>
						<SearchNavigationInput placeholder="Search Pantry" value={query} onChange={handleChange} />

						<Link to="/pantryitems/myrecipes">
							<CheffCap alt="pantry-items" />
						</Link>
						{/* <Link to="/pantryitems">PantryItems</Link> */}
						{/* <Link to="/pantryitems/3">Pantry details</Link> */}
						{/* <Link to="/new">new Items</Link> */}
					</Headerlist>
				</HeaderWrapper>
			</Header>
			<HeaderTitle large>My Pantry</HeaderTitle>

			<PantryItemList pantry={pantryArrCopy} handleChips={handleChips} filteredPantryChip={filteredPantryChip} />
		</PantryListSection>
	);
};

const mapStateToProps = ({ pantry: { pantryArr, query, pantryArrCopy } }) => {
    return {
        pantryArr,
        pantryArrCopy,
		query,
	};
};

export default connect(mapStateToProps, {filteredPantryChip})(Home);
