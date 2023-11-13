// import React from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { addHappy } from '../store';
import { Link } from 'react-router-dom';



const HappyNotes = () => {
    const { happyNotes, users } = useSelector(state => state)
    const dispatch = useDispatch();

    const like = async(happyNote) => {
        await dispatch(addHappy(happyNote))
    }

  return (
    <div>
    <h1 style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>Happy Notes</h1>
   <ul>
   {
    happyNotes.map(happyNote => {
        const user = users.find( user => user.id === happyNote.userId)
      
       return (
        // <li key={happyNote.id}>
        //     <Card sx={{ minWidth: 275 }} key={happyNote.id}>
        //         <CardContent>
        //         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        //             Happy Note by {user ? user.username : 'unknown'}
        //         </Typography>
        //         <Typography sx={{ mb: 1.5 }} color="text.secondary">
        //             {happyNote.subject}
        //         </Typography>
        //         <Typography variant="body2">
        //             {happyNote.content}
        //         </Typography>
        //         </CardContent>
        //         <CardActions>
        //         <div>People this has made happy: {happyNote.happies}</div>
        //         <Button size="small" onClick={ (ev) => {like(happyNote); ev.target.disabled = true} } >Lovely!</Button>
        //         </CardActions>
        //     </Card>
        // </li>
        <li key={happyNote.id} style={{ listStyle: 'none', marginBottom: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
    <Card sx={{ minWidth: 275 }}>
        <CardContent>
            <Typography variant="h6" color="text.primary" gutterBottom>
                {happyNote.subject}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Posted by {user ? user.username : 'unknown'} on {new Date(happyNote.createdAt).toLocaleDateString()}
            </Typography>
            <Typography variant="body1">
                {happyNote.content}
            </Typography>
        </CardContent>
        <CardActions>
            <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                <Button size="small" onClick={(ev) => { like(happyNote); ev.target.disabled = true }}>Lovely!</Button>
                <span style={{ marginLeft: '10px', fontSize: '14px', color: '#777' }}>
                    {happyNote.happies} people found this lovely
                </span>
            </div>
        </CardActions>
    </Card>
</li>
      )
    })}
    </ul>
    <Button variant='outlined'><Link to={`/portfolio/addHappyNote`} style={{fontSize: '1.2rem', fontWeight:'500'}}>Add Happy Note</Link></Button>

    </div>
  )
}

export default HappyNotes

// function HappyNotes() {

//     const { happyNotes, users } = useSelector(state => state)

// console.log(happyNotes)

//   return (
//     <div>
//     <h1 style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>Happy Notes</h1>
//    {
//     happyNotes.map((happyNote) => (
        
//         <Card sx={{ minWidth: 275 }} key={happyNote.id}>
//         <CardContent>
//           <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//             Happy Note
//           </Typography>
//           <Typography sx={{ mb: 1.5 }} color="text.secondary">
//             {happyNote.subject}
//           </Typography>
//           <Typography variant="body2">
//             {happyNote.content}
//           </Typography>
//         </CardContent>
//         <CardActions>

//           <Button size="small">Lovely!</Button>
//         </CardActions>
//       </Card>
//     ))}
//     {/* <Card sx={{ minWidth: 275 }}>
//       <CardContent>
//         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="div">
//           be{bull}nev{bull}o{bull}lent
//         </Typography>
//         <Typography sx={{ mb: 1.5 }} color="text.secondary">
//           adjective
//         </Typography>
//         <Typography variant="body2">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card> */}
//     {/* const user = users.find( user => user.id === happyNote.id) */}
    
//     </div>
//   )
// }

// export default HappyNotes