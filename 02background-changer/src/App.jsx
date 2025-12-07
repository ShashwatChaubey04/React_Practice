import { useState } from 'react'

function App() {

  const colors = [
    {id: 1, bgColor: 'bg-red-500', text: 'Red'},
    {id: 2, bgColor: 'bg-green-500', text: 'Green'},
    {id: 3, bgColor: 'bg-blue-500', text: 'Blue'},
    {id: 4, bgColor: 'bg-olive-500', text: 'Olive'},
    {id: 5, bgColor: 'bg-grey-500', text: 'Grey'},
    {id: 6, bgColor: 'bg-yellow-500', text: 'Yellow'},
    {id: 7, bgColor: 'bg-pink-500', text: 'Pink'},
    {id: 8, bgColor: 'bg-purple-500', text: 'Purple'},
    {id: 9, bgColor: 'bg-lavender-500', text: 'Lavender'},
    {id: 10, bgColor: 'bg-white-500', text: 'White'},
    {id: 11, bgColor: 'bg-black-500', text: 'Black'}
  ];

  const [backgroundColor, setBackgroundColor] = useState('bg-black-500')

  return (
    <>
      <div className= {`h-screen w-full ${backgroundColor} display:flex flex-col justify-center items-center`}>
      
        <div className='bg-white rounded-xl p-2'>

          {colors.map(element => {
            return (
              <button 
              onClick={() => setBackgroundColor(element.bgColor)} 
              // onClick ko yek function chahiye if we will write setBackgroundColor(...) it will return something 
              className={`${element.bgColor} px-2 py-1 rounded-xl`}
              >
                {element.text}
              </button>
            )
          })}

        </div>

      </div>  
    </>
  )
}

export default App
