import React, { useEffect, useState, useContext } from 'react'
import { useRef } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Button, Col, Container, Row} from 'reactstrap'
import ProfileCard from '../components/ProfileCard'
import { MovieContext } from '../Contexts/MoviesContext'
import { getPosterImage, getVideoUrl } from '../utils/api'
import { BiVideoRecording } from 'react-icons/bi'
import { GoPerson } from 'react-icons/go'
import { ImImages } from 'react-icons/im'
import { GrOverview } from 'react-icons/gr'
import SidebarNavItem from '../components/SidebarNavItem'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Details = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState({})
    const { movies } = useContext(MovieContext)
    const history = useHistory()
    const playerRef = useRef()

    const castRef = useRef()
    const imagesRef = useRef()
    const overviewRef = useRef()
    const videosRef = useRef()
    useEffect(() => {
        if (movies.length === 0) {
            history.push("/")
        }
        const get = async () => {
            const data = movies.find((e) => String(e.id) === String(id))

            console.log(data)
            if (data) {
                playerRef.current.placeholder = getPosterImage(data.backdrop_path)
                playerRef.current.poster = getPosterImage(data.backdrop_path)
                const file = await data.file.getFile()
                setMovie({ ...data, file })
                playerRef.current.src = URL.createObjectURL(file)
            }
        }
        get()
    }, [id, movies, history])

    return (
        <Container fluid className="mt-2">
            <Row>
                <Col md="4" lg="3" className="sidebar">
                    <div className="d-flex flex-column sidebar__menu">
                        <SidebarNavItem className="mb-2" name="Overview" icon={<GrOverview />} onClick={() => {
                            overviewRef.current.scrollIntoView({ behavior: 'smooth' })
                        }} />
                        <SidebarNavItem className="mb-2" name="Cast" icon={<GoPerson />} onClick={() => {
                            castRef.current.scrollIntoView({ behavior: 'smooth' })
                        }} />
                        <SidebarNavItem className="mb-2" name="Images" icon={<ImImages />} onClick={() => {
                            imagesRef.current.scrollIntoView({ behavior: "smooth" })
                        }} />
                        <SidebarNavItem className="mb-2" name="Videos" icon={<BiVideoRecording />} onClick={() => {
                            videosRef.current.scrollIntoView({ behavior: "smooth" })
                        }} />
                    </div>
                </Col>
                <Col md="8" lg="9">
                    <div className="row" ref={overviewRef}>
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
                    </div>
                    <div className="row mb-5 mt-3" ref={castRef}>
                        <Col size="12">
                            <h4>Cast</h4>
                            <AliceCarousel mouseTracking infinite autoPlay animationDuration={1000} autoPlayInterval={3000} responsive={{
                                576: { items: 1 },
                                768: { items: 2 },
                                992: { items: 3 }
                            }}>
                                {movie?.credits?.cast.map((e) => {
                                    const photo = e.profile_path === null ? "/missing_person.jpg" : getPosterImage(e.profile_path)
                                    return (
                                            <ProfileCard key={e.cast_id} photo={photo} name={e.name} role={e.character} />
                                    )
                                })}
                            </AliceCarousel>
                        </Col>
                    </div>
                    <div className="row mb-5 mt-3" ref={imagesRef}>
                        <Col size="12">
                            <h4>Images</h4>
                            <Row>
                                <Col size="12" className="mt-2">
                                    <AliceCarousel mouseTracking autoPlay autoPlayInterval="2000" animationDuration={1000} infinite>
                                        {movie?.images?.backdrops.map((e) =>
                                            <img alt={e.file_path} key={e.file_path} src={getPosterImage(e.file_path)} className="img-fluid" />
                                        )}
                                    </AliceCarousel>
                                </Col>
                            </Row>
                            <Row>
                                <Col size="12" className="mt-2">
                                    <AliceCarousel mouseTracking autoPlay autoPlayInterval="2000" animationDuration={1000} infinite responsive={{
                                        576: { items: 1 },
                                        768: { items: 2 },
                                        992: { items: 3 }
                                    }}>
                                        {movie?.images?.posters.map((e) => (
                                            <img alt={e.file_path} key={e.file_path} src={getPosterImage(e.file_path)} className="img-fluid" />
                                        ))}
                                    </AliceCarousel>
                                </Col>
                            </Row>
                        </Col>
                    </div>
                    <div className="row mb-5" ref={videosRef}>
                        <Col size="12">
                            <h4>Videos</h4>
                            <Row>
                                {movie?.videos?.results.map((e) =>
                                    <iframe title={e.key} key={e.site} src={getVideoUrl(e.site, e.key)} frameBorder={0} className="col col-md-4 mb-2 details__video__frame" />
                                )}
                            </Row>
                        </Col>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Details