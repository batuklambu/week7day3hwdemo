import React from 'react';
import Image from './Image';

function EmployeeList(props) {
  return (
    <div className="employeelistitem">
      <div>
        <Image className="img" img={props.img} alt="img" />
      </div>
      <div className="employee-info">
        {props.name}
        {props.lName}
        <p className="degination">{props.designation}</p>
      </div>
    </div>
  );
}

export default EmployeeList;
