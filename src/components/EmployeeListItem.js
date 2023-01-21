import React from 'react';
import EmployeeInfo from './EmployeeInfo';
import EmployeeList from './EmployeeList';

function EmployeeListItem(props) {
  function createEmployee(info) {
    return (
      <EmployeeList
        key={info.id}
        name={info.firstName}
        lName={info.lastName}
        img={info.imgUrl}
        designation={info.Designation}
        // CallOffice={info.CallOffice}
        // CallMobile={info.CallMobile}
        // sms={info.SMS}
        // email={info.Email}
      />
    );
  }

  return (
    <div className="employee-info">{EmployeeInfo.map(createEmployee)}</div>
  );
}

export default EmployeeListItem;
