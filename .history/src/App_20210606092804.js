import './index.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import NewPantryItem from './pages/NewPantryItem';
import PantryItemDetail from './pages/PantryItemDetail';
import Layout from './components/Layout';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import MyRecipe from './pages/MyRecipe';
import MyRecipeDetail from './pages/MyRecipeDetail';
import { LastLocationProvider } from 'react-router-last-location';




function App() {
  const location = useLocation()

  

  return (
		<AnimatePresence 
		
		//   exitBeforeEnter initial={false}
	  
	  >
		  <Switch
			  
			//   location={location} key={location.pathname}
		  
		  >
			  {/* <Layout> */}
			  <div>
					<Route exact  path="/:slug" component={PantryItemDetail} />
					<Route exact path="/" component={Home} />

					<Route exact path="/pantryitems/new" component={NewPantryItem} />
					<Route exact path="/pantryitems/myrecipes/:slug" component={MyRecipeDetail} />

					<Route exact path="/pantryitems/myrecipes" component={MyRecipe} />
				{/* </Layout> */}
				</div>
			</Switch>
		</AnimatePresence>
  );

}

export default App;
