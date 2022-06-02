

class SideBar extends React.Component {
    render() {
        return (
            <div className='sideBar'>
              <div className='sideBar-items'>
              <p>DASHBOARD</p>
                <p>WIDGET</p>
                <p>REVIEWS</p>
                <p>CUSTOMERS</p>
                <p>ONLINE ANALYSIS</p>
              </div>
                
            </div>
        )
    }
}
class Parts extends React.Component{
    render(){
        console.log(this.props.arr)
        return(
            <div className={this.props.stylePart}>
                {this.props.text}
                {this.props.arr.map(item=> <p>{item}</p>)}
                
            </div>
        )
    }
}

class MainPart extends React.Component {
  render() {
    return (
      <div className='mainPart'>Main Part
      <MainPartInside/>
      </div>
    )
  }
}
class MainPartInside extends React.Component {
    render() {
      return (
        <div className='mainPartInside'>Main Part Inside</div>
      )
    }
  }
class App extends React.Component {
    render() {
    let arr1 = ['1.281','You got +23.8 more reviews']
    let arr2 = ['4.6','-0.3 points from last week']
    let arr3 = ['960','122','321']
      return (
    <div className='allParts'>
       <SideBar/>
       <Parts text = 'REVIEWS' stylePart = 'part1' arr={arr1}/>
       <Parts text = 'AV RATING' stylePart = 'part2' arr={arr2}/>
       <Parts text = 'SENTIMENT ANALYTCS' stylePart = 'part3' arr={arr3}/>
       <MainPart/>
    </div>
      )
    }
  }

ReactDOM.render(
    <App/>,document.querySelector('main')
)