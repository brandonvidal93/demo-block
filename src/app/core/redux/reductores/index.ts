import { combineReducers } from 'redux';
import productos from './productos/productosReductor';
// import {{comando}}s from './{{comando}}s/{{comando}}sReductor';

const rootReducer = combineReducers({
    productos: productos
    // {{comando}}s: {{comando}}s
  });
  
export default rootReducer;
