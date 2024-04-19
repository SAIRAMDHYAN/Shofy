import React,{useState} from 'react'
import './corousel.css'

let data=['https://media.istockphoto.com/id/1449490038/photo/online-shopping-and-e-commerce-technology-concept-shopper-using-computer-laptop-to-input.jpg?s=1024x1024&w=is&k=20&c=VH4xCCh4Fj6JCJsbkVuTJGK9xgwKJCePHEhGnZyyKGk=',
'https://media.istockphoto.com/id/1446906799/photo/young-blonde-woman-customer-smiling-confident-using-smartphone-at-clothing-store.jpg?s=1024x1024&w=is&k=20&c=YSx9oCw0agTbdklKufavhYVaOo5Cw1wMM4SfhvenHDc=',
'https://img.freepik.com/free-vector/hand-drawn-texture-boutique-youtube-channel-art_23-2149342998.jpg?t=st=1713434869~exp=1713438469~hmac=e4fd26ac6ef91542b6ea1913eff481cd559e04d1d00aa9d9b62c8b5188f99f7a&w=1060']


function Corousel() {
    let [currentIndex,setCurrentIndex]=useState(0)

let handlePrevious=(event)=>{
    event.preventDefault()
    // if(currentIndex===0){
    //     setCurrentIndex(data.length-1)
    // }
    // else{
    //     setCurrentIndex(currentIndex-1)
    // }
    currentIndex===0?setCurrentIndex(data.length-1): setCurrentIndex(currentIndex-1) 
}

let handleNext=(event)=>{
    event.preventDefault()
    setCurrentIndex((currentIndex+1)%data.length)
}

  return (
    <div className='corousel'>
      <h1 onClick={handlePrevious}  className='previous ' ><i class="bi bi-arrow-left-circle-fill"></i></h1>
      <img src={data[currentIndex]}  style={{position:'relative'}} alt="corousel images" width={'100%'} height={'500px'} />
      <h1 onClick={handleNext}  className='next'><i class="bi bi-arrow-right-circle-fill"></i></h1>
    </div>
  )
}

export default Corousel

