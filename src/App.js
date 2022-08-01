import React, { useState } from 'react'
import beach from './images/beach.jpg'

const App = () => {
  const [ open, setOpen ] = useState(null)

  function handleClick() {
    return setOpen(!open)
  }

  return (
    <div className='body'>
      <div className={`container ${open ? 'show-nav' : ''}`}>
        <div className='circle-container'>
          <div className='circle'>
            <button 
              id='close'
              onClick={handleClick}
            >
              <i className='fas fa-times' />
            </button>
            <button 
              id='open'
              onClick={handleClick}
            >
              <i className='fas fa-bars' />
            </button>
          </div>
        </div>

        <div className='content'>
          <h1>Amazing Article</h1>
          <small>Florin Pop</small>
          <p>"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."</p>
          <h3>My Dog</h3>
          <img src={beach} alt='beach' />
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
        </div>

      </div>
      <nav>
        <ul>
          <li><i className='fas fa-home' /> Home</li>
          <li><i className='fas fa-user-alt' /> About</li>
          <li><i className='fas fa-envelope' /> Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default App