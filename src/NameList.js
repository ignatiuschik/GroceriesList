import React from 'react'

function NameList() {

    const name = [
        {
            id:1,
            firstname: "Ignatius",
            surname: "Chikukuza"
        },
        {
            id:2,
            firstname: "Cleo",
            surname: "Chikukuza"
        },
        {
            id:3,
            firstname: "Calese",
            surname: "Chikukuza"
        }
    ];

    const getFirstname = (fname) => {
        return (fname.firstname)

    }

  return (
    <div>
        {name.filter(getFirstname)==="Calese"}
    </div>
  )
}

export default NameList