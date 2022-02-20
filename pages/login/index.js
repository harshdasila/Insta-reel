import React, { useContext,useEffect,useState } from 'react'
import TextField from '@mui/material/TextField';
import Image from 'next/image'
import insta from '../../image/insta.png'
import Button from '@mui/material/Button';
import { CarouselProvider, Slider, Slide,Image as Img } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import bg1 from '../../image/bg1.jpg'
import bg2 from '../../image/bg2.jpg'
import bg3 from '../../image/bg3.jpg'
import bg4 from '../../image/bg4.jpg'
import bg5 from '../../image/bg5.jpg'
import { Carousel } from 'react-responsive-carousel';
import { AuthContext } from '../../context/auth';
import {useRouter} from 'next/router'
import Link from 'next/link'

function index() {

  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error,setError] = useState('')
  const [loading , setLoading ]= useState(false);

  const {login,user} = useContext(AuthContext)

 const handleClick=async()=>{
      try{
        setLoading(true)
        setError('')
        await login(email,password)
        console.log("logged in")
      }catch(err){
        console.log("error")
        setError(err.message)
        setTimeout(()=>{
            setError('')
        },2000)
      }
      setLoading(false)
 }

  useEffect(()=>{
      if(user){
        router.push('/')
      }
  },[user])

  return (
    <div className='login-container'>
        <div className='carbg'>
            <div className='car'>
            <Carousel showIndicators={false}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000 }
        showArrows={false}
      >
        
        
        <Image src={bg1}/>
        <Image src={bg2}/>
        <Image src={bg3}/>
        <Image src={bg4}/>
        <Image src={bg5}/>
        
      </Carousel>
            </div>
        </div>
        <div>
        <div className='login-card'>
            <Image src={insta} alt='/'/>
        <TextField size='small'margin='dense' id="outlined-basic"fullWidth label="Email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <TextField size='small'margin='dense' id="outlined-basic"fullWidth label="Password"type='password' variant="outlined" value={password}  onChange={(e)=>setPassword(e.target.value)} />

        {
            error !='' &&
            <div style={{color:'red'}}>{error}</div>
          
        }
        
        
        
        <Button fullWidth variant="contained"  style={{marginTop:'1rem'}} onClick={handleClick} disabled={loading}>
            
            Login
        </Button>
        <div style={{color:'blue',marginTop:'0.5rem'}}>Forget Password ?</div>

        </div>
        <div className='bottom-card'>
            Dont have an Account? <Link href="/signup"><span style={{color:'blue'}}> Sign Up </span></Link>
        </div>
        </div>
    </div>
  )
}

export default index
