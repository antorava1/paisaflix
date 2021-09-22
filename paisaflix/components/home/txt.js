/* //GET TRAILERS
    const getTrailers = () => {
        axios.get('https://paisa-challange.herokuapp.com/api/v1/paisaflix/trailers')
        .then((response) => {
          console.log(response.data)
          setTrailers(response.data)
        })
        .catch((e) => console.log(`😱 Axios request failed: ${e}`));
      }
  
      useEffect(() => {
        getTrailers()
    }, [])

    const showTrailers = trailers.map((data, index) => {
        return(
            <Cards 
                trailerImage={data.trailerImage}
                key={index}
            />
        )
    })

    // GET HERO

    const getHeroInfo = () => {
        axios.get('https://paisa-challange.herokuapp.com/api/v1/paisaflix/hero/')
        .then((response) => {
          console.log(response.data)
          setHero(response.data)
        })
        .catch((e) => console.log(`😱 Axios request failed: ${e}`));
      }
  
      useEffect(() => {
        getHeroInfo()
    }, [])

    const showHero = hero.map(data => {
        return(
            <div>
                <h1 className="movie-title">{data.name}</h1>
                <Stars/>
                <h6 className="movie-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h6>
                <h6 className="movie-genre">Genre: {data.genre}</h6>
                <h6 className="movie-duration">Duration: {data.duration}</h6>
                <h6 className="movie-rating">Rating: {data.rating}</h6>
            </div>
        )
    }) */