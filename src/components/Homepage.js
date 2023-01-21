import React from 'react';
import EmployeeList from './EmployeeList';
import EmployeeListItem from './EmployeeListItem';
import Header from './Header';
import Searchbar from './Searchbar';

function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <Searchbar />
      {/* <EmployeeList /> */}
      <EmployeeListItem />
    </div>
  );
}

export default Homepage;
