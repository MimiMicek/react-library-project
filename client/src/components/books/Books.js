import React from 'react';
import BookForm from './BookForm';


export default class Books extends React.Component{

  constructor(props){
    super(props);
      this.state = {
        title: [],
        author: "",
        text: "",
        year: "",
        link: ""
      };
    }

 /*  componentDidMount(){
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://www.googleapis.com/books/v1/volumes?q=harry+potter&callback=handleResponse"; // site that doesn’t send Access-Control-*
    fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
    .then(response => response.text())
    .then(books => console.log(books))
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
  } */

  getBook = async(e) => {

    e.preventDefault();
  
    const title = e.target.elements.title.value;
   
    const api_call = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${title}`);
  
    const data = await api_call.json();
  
    console.log(data.items)
  
   if(title){
  

      this.setState({
        title: data.items
       /*  author: data.sys.country,
        text: data.main.temp,
        year: data.main.pressure,
        link: data.main.humidity, */
      });
     
    } else{
      this.setState({
        title: "",
       /*  author: "",
        text: "",
        year: "",
        link: "" */
      });
    }
  }
    
  render(){

    const { title } = this.state;

    return(
      <div className="wrapper">
     
          <div className="col">
          <BookForm getBook={this.getBook} />
          </div>
          
          <div className="col">
            {
                title
            }
          </div>
      {/*      
            {
              this.state.showWeather ? 
              <div className="col form-container">
              <WeatherPage  city={city}
                            country={country}
                            temperature={Math.floor(temperature)}
                            pressure={pressure}
                            humidity={humidity}
                            windSpeed={windSpeed}
                            weatherStatus={weatherStatus}
                            error={error}
              />
            </div>
            :null
            } */}
        </div>
    );
  }
}


