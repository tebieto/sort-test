import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';


    const Filter = ({ state, dispatch }) => {
        const actionTypes = { 'SORT' : 'SORT' };

        const handleSortByName = (e, value) => {
            const data = { ...state, sortByName: value }
            handleDispatch(data)
        }

        const handleSortByAge = (e, value) => {
            const data = { ...state, sortByAge: value }
            handleDispatch(data)
        }

        const handleDispatch = data => dispatch({type: actionTypes.SORT, payload: data });

        return (
            <div className="checkboxes">
                <Checkbox onChange={handleSortByName} />
                <label>Name</label>
                <Checkbox onChange={handleSortByAge} />
                <label>Age</label>
            </div>
        )
    } 

export default Filter;