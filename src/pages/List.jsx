import { motion } from 'framer-motion'
import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, CardBody, CardTitle, Col, Container, Card, Row, CardImg, CardText, Modal, ModalHeader, ModalBody, FormGroup, Label, Input, ModalFooter, Spinner } from 'reactstrap'
import { MovieContext } from '../Contexts/MoviesContext'
import { CARD_ANIMATIONS } from '../utils/animations'
import { getMovieDetails, getPosterImage, searchMovie } from '../utils/api'
import { insertMovie } from '../utils/db'
import { CgScreen, CgInfo } from "react-icons/cg";
import { useCallback } from 'react'



const List = () => {
    const { movies, setMovies } = useContext(MovieContext)
    const [films, setFilms] = useState([])
    const [modal, setModal] = useState(false)
    const [filmId, setFilmId] = useState("")
    const [query, setQuery] = useState("")
    const [queryResults, setQueryResults] = useState([])
    const [loading, setLoading] = useState(true)
    const history = useHistory()
    const [filter, setFIlter] = useState("")
    const genFilmCol = useCallback(e => {
        if (!e.id) {
            return(<Col key={e.name} md="4" sm="12" lg="2" className="mb-2 mt-2">
                <Card>
                    <CardBody>
                        <CardImg src="" />
                        <CardTitle>{e.name}</CardTitle>
                        <CardText className="missing-info">Could not automatically categorize this movie. Please search for it and we'll <small>definitely</small>know it for next time</CardText>
                        <Button color="primary" onClick={() => {
                            setFilmId(e.name)
                            setModal(m => !m)
                        }}>Categorize it</Button>
                    </CardBody>
                </Card>
            </Col>)
        }
        else {
            return(
                    <motion.div   whileHover={{ scale: 1.1 }} initial='hidden' variants={CARD_ANIMATIONS} animate='visible' key={e.id} md="4" sm="12" lg="2" className="col col-md-4 col-sm-12 col-lg-2 mb-2 mt-2">
                        <Card  >
                            <CardBody>
                                <CardImg src={getPosterImage(e.poster_path)} />
                                <CardTitle>{e.title}</CardTitle>
                                <small>{e.name}</small>
                                <CardText className="mt-2">
                                    <Button color="primary" onClick={() => {
                                        history.push(`/watch/${e.id}`)
                                    }}>
                                        <CgScreen />
                                    </Button>
                                    <Button className="ml-2" color="secondary" onClick={() => {
                                        history.push(`/details/${e.id}`)
                                    }}>
                                        <CgInfo />
                                    </Button>
                                    <Button color="danger" className="ml-1" onClick={() => {
                                        setFilmId(e.name)
                                        setModal(m => !m)
                                    }}>Wrong Movie?</Button>
                                </CardText>
                            </CardBody>
                        </Card>
                </motion.div>
            )
        }                         
    }, [history])

    useEffect(() => {
        const search = async () => {
            if (query) {
                if (query.length % 3 === 0 && query.length !== 0) {
                    const res = await searchMovie(query, 5)
                    if (res) {
                        const data = []
                        res.forEach((e) => {
                            data.push(
                                <Col md="4" key={e.id}>
                                    <Card style={{ cursor: "pointer" }} onClick={async() => {
                                        const oldMovies = [...movies]
                                        oldMovies.forEach(async(f, index) => {
                                            if (f.name === filmId) {
                                                const actualData = await getMovieDetails(e.id)
                                                oldMovies[index] = {...f, ...actualData}
                                                setMovies(oldMovies)
                                                insertMovie(filmId, actualData, f.file)
                                                setModal(false)
                                                setQueryResults([])
                                                setQuery("")
                                            }
                                        })
                                    }}>
                                        <CardBody>
                                            <CardImg src={getPosterImage(e.poster_path)} />
                                            <CardTitle>{e.title}</CardTitle>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )
                        })
                        setQueryResults(data)
                    }
                }
            }
        }
        search()
    }, [query, filmId, movies, setMovies])

    return (
        <Container fluid>
            <Modal size="lg" isOpen={modal} toggle={() => {
                setQueryResults([])
                setModal(!modal)
            }}>
                <ModalHeader toggle={() => {
                    setQueryResults([])
                    setModal(!modal)
                }}>Categorize {filmId}</ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label htmlFor="search">Query</Label>
                        <Input value={query} onChange={(e) => setQuery(e.target.value)} />
                    </FormGroup>
                    <Row>
                        {queryResults}
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={() => {
                        setModal(!modal)
                        setQueryResults([])
                    }}>Close</Button>
                </ModalFooter>
            </Modal>
            <Row>
                <Col size="8" className="mx-auto">
                    Search <Input placeholder="Search for a movie" onChange={(e) => setFIlter(e.target.value)}/>
                </Col>
            </Row>
            {<motion.div className="row">
            
            {movies.length === 0 ? 
            <div align="center">
                <Spinner size="lg" />
            </div> : 
            filter !== "" ? movies.filter((e) => e.title !== undefined).filter((a) => a.title.toLowerCase().includes(filter)).map((r) => (
                genFilmCol(r)
            )) : movies.map((e) => genFilmCol(e))}
            </motion.div>}
        </Container>
    )
}

export default List