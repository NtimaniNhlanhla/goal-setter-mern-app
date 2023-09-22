import React, { useState} from 'react'
import  { useDispatch } from 'react-redux'
import { createGoal} from '../features/goals/goalsSlice'

function GoalForm() {

    const [text, setText] = useState('')

   const onSubmit = (e) => {
       e.preventDefault()

       dispatch(createGoal({text}))
       setText('')
   }

   const dispatch = useDispatch();

  return <section className='form'>
     <form onSubmit={onSubmit}>
        <div className="form-group">
            <label htmlFor='text'>Goal</label>
            <input type="text" name='text' id='text'
            value={text} 
            onChange={(e) => setText(e.target.value)}
            />
        </div>
        <div className="form-group">
            <button className="btn btn-block">
                Add Goal
            </button>
        </div>
     </form>
  </section>
}

export default GoalForm
