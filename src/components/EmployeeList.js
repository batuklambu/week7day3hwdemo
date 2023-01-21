import React from 'react';
import Image from './Image';

function EmployeeList(props) {
  return (
    <div className="employeelistitem">
      <Image className="img" img={props.img} alt="img" />
      {props.name}
      {props.lName}
      <p className="degination">{props.designation}</p>
    </div>
  );
}

export default EmployeeList;
