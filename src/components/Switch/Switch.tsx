import { useState } from 'react'

interface SwitchPros {
  onChecked?: (checked: boolean) => void;
}

const Switch = ({ onChecked }: SwitchPros) => {
  const [isChecked, setIsChecked] = useState(false);
  
  const handleClick = () => {
    setIsChecked(!isChecked);
    onChecked?.(isChecked);
  }

  return (
    <div className="switch" onClick={handleClick}>
      <input type="checkbox" checked={isChecked}/>
      <div className='switch__circle' />
    </div>
  )
}

export default Switch