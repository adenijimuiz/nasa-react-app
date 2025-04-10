import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"


function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    async function fetchApiData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`;

      const today = (new Date()).toDateString();
      const localKey = `NASA-${today}`
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        return;
      }
      localStorage.clear()

      try {
        const res = await fetch(url);
        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData);
        // console.log('DATA\n', apiData)
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchApiData();
  }, [])

  function handleToggleModel() {
    setShowModel(!showModel)
  }

  return (
    <>
      {data ? (<Main data={data} />) : (
        <div className="loadingStage">
          <i className="fa-solid fa-gear"></i>
        </div>
      )} {/** this div is a preload for when data is yet to be available */}
      {showModel && <SideBar data={data} handleToggleModel={handleToggleModel}/>} {/**will only show the sidebar if showModel is true */}
      {data && (<Footer data={data} handleToggleModel={handleToggleModel} />)}
    </>
  )
}

export default App
