import React, { useState, useEffect } from 'react';
import {PropTypes} from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const RecordTable = ({ state }) => {
        
    const list = [
            {
                name: "Veronica Mize",
                dob: "11/29/2011"
            }, {
                name: "Cecilia Olsson",
                dob: "09/16/1992"
            }, {
                name: "Peter Parker",
                dob: "01/16/1992"
            }, {
                name: "Jimmy Shergil",
                dob: "12/12/2001"
            }, {
                name: "Alexander Alfred",
                dob: "02/09/1891"
            }, {
                name: "Janice Shroyer",
                dob: "12/01/1982"
            }, {
                name: "Ralph White",
                dob: "11/30/2011"
            }, {
                name: "Deborah T. Decker",
                dob: "10/31/1999"
            }
        ];

        const [people, setPeople] = useState(list);

        useEffect(() => {
            const { sortByAge, sortByName } = state;
            sortByAge ? handleSortByAge(list) : sortByName ? handleSortByName(list) : setPeople(list);
        }, [state]);

        const handleSortByAge = data => {
            let sorted = data.sort((a,b) => a.dob > b.dob ? 1 : -1);
            handleSorted(sorted)
        }

        const handleSortByName = data => {
            let sorted = data.sort((a,b) => a.name > b.name ? 1 : -1)
            handleSorted(sorted);
        }

        const handleSorted = sorted => {
            setPeople(sorted);
        }
    
        return (
            <Paper className="width">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className="table-header">Name</TableCell>
                            <TableCell className="table-header">Date of Birth</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            people.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.dob}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </Paper>
        );
}

export default RecordTable;
