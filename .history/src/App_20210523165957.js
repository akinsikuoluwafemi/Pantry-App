import './index.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import NewPantryItem from './pages/NewPantryItem';
import PantryItemDetail from './pages/PantryItemDetail';
import Layout from './components/Layout';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import EditPantryDetail from './pages/EditPantryDetail';


function App() {
  
  const location = useLocation()
  

  return (
		<AnimatePresence exitBeforeEnter initial={false}>
			<Switch location={location} key={location.pathname}>
				<Layout>
					<Route exact path="/:slug" component={PantryItemDetail} />
					<Route exact path="/" component={Home} />
					<Route path="/pantryitems/new" component={NewPantryItem} />

					<Route exact path="/edit/:slug" component={EditPantryDetail} />
				</Layout>
			</Switch>
		</AnimatePresence>
  );

}

export default App;
