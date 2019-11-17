import React from "react"
import Input from './input'

class MemeGenerator extends React.Component {
    constructor(){
        super()
        this.state ={
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemesImg: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.chooseRandom = this.chooseRandom.bind(this)
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({
                    allMemesImg: memes
                })
            })

        }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    chooseRandom(){
        let length = this.state.allMemesImg.length
        let arrayIndex = this.getRandomInt(length - 1)
        this.setState({
            randomImage : this.state.allMemesImg[arrayIndex].url
        })
    }

    render(){
        const {randomImage, bottomText, topText} = this.state;
        return(
            <div className="custom-meme">
                <div className="meme-form">
                    <input
                        name="topText"
                        placeholder="Top text"
                        value={topText}
                        onChange= {this.handleChange}
                    />
                    <input
                        name="bottomText"
                        placeholder="Bottom text"
                        value={bottomText}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="meme">
                    <img src={randomImage} alt=""/>
                    <h2 className="top">{topText}</h2>
                    <h2 className="bottom">{bottomText}</h2>
                </div>
                <button onClick={this.chooseRandom}>Get random image</button>
            </div>
        )
    }
}

export default MemeGenerator
