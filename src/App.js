import './App.css';
import Profile from './Profile/Profile';
import logo from './imgs/Logo-New.png'

function App(props) {

  const mainProfileStyle = {
    backgroundColor: "#acb596",
    color: "black",
    width: "50%",
    height:"100px",
    marginLeft: "23%",
    marginTop: "10%"
  }




  return (
    <>
      <div style={ mainProfileStyle }>
        <Profile name="Yassine Castro" bio="Born in casablanca 18 january 2003 "img={ logo } alert={alert} />
      </div>
    </>
  )
  

}

export default App;
