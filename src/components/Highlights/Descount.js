import React, { Component } from 'react'
import  Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide'
import MyButton from '../Uttils/MyButton';

export default class Descount extends Component {
    state={
        discountStart:0,
        discountEnd:30
    }
    percentage=()=>{
        if(this.state.discountStart<this.state.discountEnd){
            this.setState({
                discountStart:this.state.discountStart+1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(()=>{this.percentage()},30)
    }
  render() {
    return (
      <div className='center_wrapper'>
       <div className='discount_wrapper'>
        <Fade onReveal={()=>this.percentage()}>
        <div className='discount_porcentage'>
             <span>{this.state.discountStart}%</span>
             <span>OFF</span>
         </div>
         </Fade>
         <Slide right>
          <div className='discount_description'>
            <h3>Purchase Tickets Before 20 December</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <MyButton text="Purchase Tickets" bck="#ffa800" color='#ffffff' link='https://mui.com/'></MyButton>          
          </div>
          </Slide>
        </div>
       </div>
    ) 
  }
}
