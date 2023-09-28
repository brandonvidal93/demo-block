import { combineReducers } from 'redux';
import productos from './productos/productosReductor';

const rootReducer = combineReducers({
    productos: productos
  });
  
export default rootReducer;
