import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
        {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
            <a 
                href={`#${item}`} 
                key={item + index}
                className="app__navigation-dot"
                style={active === item ? { backgroundColor: '#DE9E48'} : { } }
            />
        ))}
    </div>
  )
}

export default NavigationDots
