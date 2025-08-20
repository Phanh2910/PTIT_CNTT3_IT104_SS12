import React from 'react'

export default function Format() {
    const user = {

    firstName: "Nguyễn Văn",

    lastName: "Nam",

  };
  function formatName(user: { firstName: string; lastName: string }): string {
  if (user) {
    return `${user.firstName} ${user.lastName}`;
  }
  return 'Khách';
}
  return (
    <div>
        <h1>Xin chào, {formatName(user)}!</h1>
    </div>
  )
}


 

 

 

