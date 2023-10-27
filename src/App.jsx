import React from 'react'

const test = async () => {
  const theme = await localStorage.getItem("theme")
  console.log(theme);
}

const App = () => {
  test()
  return (
    <div className='bg-primary w-full overflow-hidden'>sdf</div>
  )
}

export default App

