import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import {useState} from 'react'
function App() {

  const [packList, setPackList] = useState([
    { name: 'clothes', isPacked: false },
    { name: 'toothbrush', isPacked: false },
    { name: 'laptop', isPacked: false },
    { name: 'passport', isPacked: false },
  ]);

  const changeIsPacked=(index)=>{
    const updatedList =[...packList];
    updatedList[index]={...updatedList[index],isPacked:!updatedList[index].isPacked};
    setPackList(updatedList);
  }

  return (
    <>
    {packList.map((item, index) => (
      <div key={index} className="d-flex align-items-center">
        {item.isPacked ? <del>{item.name}</del> : item.name}
        <input type='checkbox' className="form-check-input" onChange={() => changeIsPacked(index)} />
      </div>
    ))}
  </>
  )
}

export default App
