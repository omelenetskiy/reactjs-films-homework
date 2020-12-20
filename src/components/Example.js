import React from 'react'

import { useState } from 'react'

function Example() {
  // Объявляем новую переменную состояния, которую назовём "count"
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Вы кликнули {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Кликни меня!</button>
    </div>
  )
}

export default Example
