import React from "react"

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText:"",
            randomImg: "http:/i.imgflip.com/lbij.jpg",
            allMemeImgs:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response =>{
            const {memes} = response.data
            console.log(memes[0])
            this.setState({allMemeImgs: memes})
        })
    }

   handleChange(event){
       const {name, value}=event.target
       this.setState({[name]:value})
   }

   handleSubmit(event){
       event.preventDefault()
       const randNumber = (Math.floor(Math.random)* this.state.allMemeImgs.length)
       const randomImg = this.state.allMemeImgs[randNumber].url 
       this.setState({randMemeImg})
   }

    render() {

        return (
            <div className="main">
               <form className="meme-form">
<input 
name="topText"
type="text"
placeholder="Top text"
value = {this.state.topText}
onChange={}
/>
<input 
name="bottomText"
type="text"
placeholder="Bottom text"
value = {this.state.bottomText}
onChange={}
/>

                  < Button>Gen</Button>
               </form>
               <div className="meme">
<img src={this.state.randomImg} alt =""/>
<h2 className="top">{this.state.topText}</h2>
<h2 className="bottom">{this.state.bottomText}</h2>
               </div>
            </div>
        )
    }
}

export default MemeGenerator