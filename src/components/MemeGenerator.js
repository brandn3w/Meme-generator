import React from "react"


class MemeGenerator extends React.Component() {
    constructor() {
        super()
        this.state = {
            topText:"",
            bottomText:"",
           randomImg:"http://i.imgflip.com/1bij.jpg",
           allMemeImgs:[]
        }
        this.handleChange=this.handleChange.bind(this)
    }
       componentDidMount(){
fetch("https://api.imgflip.com/get_memes")
.then(response=> response.json())
    .then(response=>{
        const {memes} = response.data

        this.setState({allMemeImgs:memes})
    })
        }

        handleChange(event){
            
            const {name, value} = event.target
            this.setState({[name]: value})

        }

handleSubmit(event){
    event.preventDefault()
    const randNum = Math.floor(Math.random)*this.state.allMemeImgs.length
    const randMemeImg = this.state.allMemeImgs[randNum].url
    this.setState({randomImg:randMemeImg})
}
render(){
    return(
        <div>
        <form onSubmit={this.handleSubmit}>
<input type="text" value={this.state.topText} name="topText" placeholder="Top Text" onChange={this.handleChange}/>
<input type="text" value={this.state.bottomText} name="bottomText" placeholder="Bottom Text" onChange={this.handleChange}/>
<button >Gen</button>
</form>

<div>
    <img src={this.state.randomImg} alt=""/>
    <h2>{this.state.topText}</h2>
    <h2>{this.state.bottomText}</h2>
</div>
</div>
    )
}
}
export default MemeGenerator