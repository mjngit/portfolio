import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom'; 
import { deleteDrink, editDrink } from '../../store/drinks'




const Drink = () => {
const { drinks } = useSelector(state => state)
const {id} = useParams()
const dispatch = useDispatch()
const navigate = useNavigate()

const destroy = async() => {
  await dispatch(deleteDrink(drink))
  navigate('/admin/drinks')
}

const [name, setName] = useState('')
const [category, setCategory] = useState('')
const [imageUrl, setImageUrl] = useState('')
const [description, setDescription] = useState('')
const [price, setPrice] = useState('')

useEffect(()=>{
  const drink = drinks.find(drink => {  
    return drink.id === id
  })
  setName( drink? drink.name : '')
  setCategory( drink? drink.category : '')
  setImageUrl( drink? drink.imageUrl : '')
  setDescription( drink? drink.description : '')
  setPrice(drink? drink.price : '')
}, [id, drinks])

const save = async(ev) => {
  ev.preventDefault();
  try{
      await dispatch(editDrink({name, category, imageUrl, description, price, id})); 
      navigate('./admin/drinks');
    }
  catch(err){
    setErrors(err);
    console.log(err)
  }
}

const drink = drinks.find(drink => drink.id === id)
if (!drink) {
  return null
}

const categories = ['coffee', 'tea', 'smoothie']


return (
  <div style={{margin: 'auto', maxWidth: "80%", fontSize:"1.4rem", padding:"1rem"}} >
    <h1> {drink.name} </h1>
    <ul>
    <li>Category: {drink.category} </li>
      <li>Image:</li>
      <img src={drink.imageUrl} style={{maxWidth:"300px"}} alt="drink image"/>
      <li>Description: {drink.description} </li>

    </ul>


    <b>edit drink?</b>
    <form onSubmit={save} style={{margin: 'auto', maxWidth: "80%", minWidth:"350px"}}>
      <label>Name:   
      <input value={name} onChange={ev=> setName(ev.target.value)} placeholder={'First Name'}></input>
      </label>

      <label>Category:    
      <select value={category } onChange={ev=> setCategory(ev.target.value)}>
      <option>Pick a Category</option>
        {categories.map( cat => {
          return(
            <option value={ cat } key={ cat.id }>{ cat }</option>
            )})}
      </select>
      </label>

      <label>Image URL:
      <input value={imageUrl} onChange={ev=> setImageUrl(ev.target.value)} placeholder={'Email Address'}></input>
      </label>
      <label>Description:
      <input value={description} onChange={ev=> setDescription(ev.target.value)} placeholder={'Email Address'}></input>
      </label>
      <label>Price:
      <input value={price} onChange={ev=> setPrice(ev.target.value)} placeholder={'Email Address'}></input>
      </label>
      <div style={{display: "flex", justifyContent:"space-around"}}>
      <button style={{width: "200px"}}>update</button>
      <button style={{width: "200px"}} onClick= {destroy}> delete drink?? </button>
      </div>
      </form>


      <h5><Link to={'/admin/drink'}>Back to Drink List</Link></h5>
      <h5><Link to={'/admin'}>Back to Admin Home</Link></h5>

  </div>
)
}

export default Drink;