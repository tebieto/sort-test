import React, { useReducer } from 'react';
import Filter from './components/Filter';
import RecordTable from './components/RecordTable';

const initialState = {
  sortByName: false,
  sortByAge: false
}

function reducer(state, action) {
  switch(action.type) {
  case 'SORT':
      return {
      ...state,
      ...action.payload
      }

  default:
      return state
  }
}

  const App = () =>  {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <div className="container-fluid">
        <center><h1>Birthday Records</h1></center>
        <Filter dispatch={dispatch}></Filter>
        <RecordTable state={state}></RecordTable>
      </div>
    );
  }


export default App;
