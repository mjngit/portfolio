import axios from 'axios';

const happyNotes = (state = [], action)=> {
  if(action.type === 'SET_HAPPYNOTES'){
    return action.happyNotes;
  }
  if(action.type === 'CREATE_HAPPYNOTE'){
    return [...state, action.happyNote]
  }
  if(action.type === 'EDIT_HAPPYNOTE'){
    return state.map(happyNote => {
      if (happyNote.id === action.happyNote.id){
        return action.happyNote
      }
      return happyNote
    })
  }
  if(action.type === 'DELETE_HAPPYNOTE'){
    return state.filter(_happyNote => _happyNote.id !== action.happyNote.id)
  }
  return state;
};


export const fetchHappyNotes = () => {
  return async(dispatch)=> {
    const response = await axios.get('/api/happyNotes');
    dispatch({type: 'SET_HAPPYNOTES', happyNotes: response.data})
  };
};

export const createHappyNote = (happyNote)=> {
  return async(dispatch)=> {
    const response = await axios.post(`api/happyNotes`, happyNote);
    dispatch({type: 'CREATE_HAPPYNOTE', happyNote: response.data})
  };
};

export const editHappyNote = (happyNote)=> {
  return async(dispatch)=> {
    const response = await axios.put(`api/happyNotes/${happyNote.id}`, happyNote);
    dispatch({type: 'EDIT_HAPPYNOTE', happyNote: response.data})
  };
};

export const addHappy = (happyNote) => {
  return async(dispatch) => {
    const response = await axios.put(`api/happyNotes/${happyNote.id}`, {
      happies: happyNote.happies + 1 });
      dispatch({type: 'EDIT_HAPPYNOTE', happyNote: response.data})
  }
}

export const deleteHappyNote = (happyNote)=> {
  return async(dispatch)=> {
    await axios.delete(`api/happyNotes/${happyNote.id}`);
    dispatch({type: 'DELETE_HAPPYNOTE', happyNote})
  };
};


export default happyNotes;
