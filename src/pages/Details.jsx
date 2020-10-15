import React, {useEffect, useState, useContext} from 'react'
import { useRef } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Button, Col, Container, Row, Spinner } from 'reactstrap'
import ProfileCard from '../components/ProfileCard'
import { MovieContext } from '../Contexts/MoviesContext'
import { getPosterImage } from '../utils/api'

const Details = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState({})
    const {movies} = useContext(MovieContext)
    const [loading, setLoading] = useState(true)
    const history = useHistory()
    const playerRef = useRef()
    useEffect(() => {
        if (movies.length === 0) {
            history.push("/")
        }
        const get = async() => {
            const data = movies.find((e) => e.id == id)
    
            console.log(data)
            if (data) {
                playerRef.current.placeholder = getPosterImage(data.backdrop_path)
                playerRef.current.poster = getPosterImage(data.backdrop_path)
                const file = await data.file.getFile()
                setMovie({...data, file})
                setLoading(false)
                playerRef.current.src = URL.createObjectURL(file)
            }
        }
        get()
    }, [id, movies])

    // if (loading) {
    //     return (
    //         <Container fluid>
    //             <div align="center" className="mt-5 pt-5">
    //                 <Spinner type="grow" style={{ width: '5rem', height: '5rem' }} size="lg" /> <br/>
    //                 <h3 className="mt-2">We're getting everything ready, hold on tight 🤘</h3>
    //             </div>
    //         </Container>
    //     )
    // }
    return (
        <Container fluid className="mt-2">
            <Row>
                <Col md="4" lg="3" className="sidebar">
                    there should be a sidebar here
                </Col>
                <Col md="8" lg="9">
                    <Row>
                        <Col md="6" sm="12">
                            <h3>{movie.title}</h3>
                            <span>{movie.release_date}</span>
                            <div className="details__main__rating mt-2">
                                {movie.vote_average} / 10
                            </div>
                            <div className="details__main__resume mt-2">
                                {movie.overview}
                            </div>
                            <div className="details__main__actions mt-2">
                                <Button outline color="primary" onClick={() => {
                                    playerRef.current.controls = true
                                    playerRef.current.play()
                                }}>Play</Button>
                            </div>
                        </Col>
                        <Col md="6" sm="12">
                            <div className="details__main__player">
                                <video ref={playerRef}></video>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="12">
                            <Row>
                            {movie?.credits?.cast.map((e) => {
                                const photo = e.profile_path === null ? "/missing_person.jpg" : getPosterImage(e.profile_path)
                                return (
                                    <Col key={e.cast_id} md="4" lg="3" sm="6">
                                        <ProfileCard photo={photo} name={e.name} role={e.character} />
                                    </Col>
                                )
                            })}
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Details