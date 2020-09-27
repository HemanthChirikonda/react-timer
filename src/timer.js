import React from 'react';
import logo from './audio.mp3';
class Timer extends React.Component{
state={
    "count":4,
    "ary":[
        {
            "name":"hemanth",
            "complete":true
        },
        {
            "name":"sunny",
            "complete":false
        },
        {
            "name":"arun",
            "complete":false
        },
        {
            "name":"spiderman",
            "complete":true
        },
        {
            "name":"ironman",
            "complete":true
        },
        {
            "name":"thor",
            "complete":false
        }
    ]
}

componentWillMount(){
   
    }
componentDidMount(){
    console.log("componentWillupdate")
    this.interval= setInterval(() => {
         this.setState( prevState => ({"count":prevState.count-1}))
        
     }, 1000);
   }

componentDidUpdate(){
    console.log("componentDidUpdate",this.state.count);
    if(this.state.count=== 0){
      clearInterval(this.interval)
       // this.setState(prevState=>({"end":true}))
        alert("Done", document.getElementById("1").play());
       
    }
   
}
 render(){
    const style = {
        color: 'red',
        fontSize: 200,
        "textAlign":"center"
      };
      const style2 = {
        color: 'red',
        fontSize: 20,
        "textAlign":"center"
      };
      let data= this.state.ary.map((a)=>{
      return a.complete ? <h1 style={{"textDecoration":" line-through"}}> {a.name}</h1> : <h1> {a.name}</h1>
      })
        return(
             <div > 
                
            
                  <div style={style}>
                {this.state.count}
                 </div>
            <div  style={style2}>
            {data}
            </div>
           
                 <audio id={1} src={logo}></audio>
            
                </div>
        )
    }
}
export default Timer