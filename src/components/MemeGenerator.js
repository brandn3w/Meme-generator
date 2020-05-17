import React from "react"
import { render } from "enzyme"


class MemeGenerator extends React.Component(){
    constructor(){
        super()
        this.state={
            topText:"",
            bottomText:"",
            randomImg:"http://i.imgflip.com/lbij.jpg",
            allmemeImgs:[]
        }
        this.handleChange=this.handleChange.bind(this)
    }
componentDidMount(){
    fetch("https://api.imgflip.com/get_memes")
    .then(response=>response.json())
    .then(response =>{
        const {memes} = response.data
        this.setState({allMemeImgs:memes})
    })
}

handleChange(event){
const {name, value}= event.target
this.setState({[name]: value})
}
render(){
    return(
        <div>
        <form className="mame=form">
<input type="text" name="topText" value={this.state.topText} placeholder="Top Text" onChange={}/>
<input type="text" name="bottomText" value={this.state.bottomText} placeholder="Bottom Text" onChange={}/>

        </form>
        </div>
    )
}
}
        export default MemeGenerator