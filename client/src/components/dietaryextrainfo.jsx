import React from 'react'

const Dietaryextrainfo = ({extrainfo}) => {
    const info = extrainfo.nutrition.nutrients
  return (
    <div>
        <div className='extraInfo__Dish'>
        <aside>
    <p>{info[0].name}</p>
    <p>{info[0].amount}<span>{info[0].unit}</span></p>
    </aside>
    <aside>
    <p>{info[1].name}</p>
    <p>{info[1].amount}<span>{info[0].unit}</span></p>
    </aside>
    <aside>
    <p>{info[2].name}</p>
    <p>{info[2].amount}<span>{info[0].unit}</span></p>
    </aside>
    <aside>
    <p>{info[3].name}</p>
    <p>{info[3].amount}<span>{info[0].unit}</span></p>
    </aside>
    <aside>
    <p>{info[4].name}</p>
    <p>{info[4].amount}<span>{info[0].unit}</span></p>
    </aside>
    <aside>
    <p>{info[5].name}</p>
    <p>{info[5].amount}<span>{info[0].unit}</span></p>
    </aside>
    <aside>
    <p>{info[6].name}</p>
    <p>{info[6].amount}<span>{info[0].unit}</span></p>
    </aside>
    <aside>
    <p>{info[7].name}</p>
    <p>{info[7].amount}<span>{info[0].unit}</span></p>
    </aside>
    <aside>
    <p>{info[8].name}</p>
    <p>{info[8].amount}<span>{info[0].unit}</span></p>
    </aside></div>
    </div>
  )
}

export default Dietaryextrainfo