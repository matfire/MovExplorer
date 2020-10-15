import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, CardBody, CardTitle, Col, Container, Card, Row, CardImg, CardText, Modal, ModalHeader, ModalBody, FormGroup, Label, Input, ModalFooter } from 'reactstrap'
import { MovieContext } from '../Contexts/MoviesContext'
import { getPosterImage, searchMovie } from '../utils/api'
import { insertMovie } from '../utils/db'

const List = () => {
    const { movies, setMovies } = useContext(MovieContext)
    const [films, setFilms] = useState([])
    const [modal, setModal] = useState(false)
    const [filmId, setFilmId] = useState("")
    const [query, setQuery] = useState("")
    const [queryResults, setQueryResults] = useState([])
    const history = useHistory()
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
                                    <Card style={{ cursor: "pointer" }} onClick={() => {
                                        const oldMovies = [...movies]
                                        oldMovies.forEach((f, index) => {
                                            if (f.name === filmId) {
                                                oldMovies[index] = {...f, ...e}
                                                setMovies(oldMovies)
                                                insertMovie(filmId, e, f.file)
                                                setModal(!modal)
                                                setQueryResults([])
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
    }, [query])
    useEffect(() => {
        console.log("movies have changed")
        const data = []
        movies.forEach((e) => {
            if (!e.id) {
                data.push(<Col key={e.name} md="4" sm="12" lg="2" className="mb-2 mt-2">
                    <Card style={{ cursor: "pointer" }} onClick={() => {
                        setFilmId(e.name)
                        setModal(!modal)
                    }}>
                        <CardBody>
                            <CardImg src="" />
                            <CardTitle>{e.name}</CardTitle>
                            <CardText className="missing-info">Could not automatically categorize this movie. Please search for it and we'll <small>definitely</small>know it for next time</CardText>
                            <Button color="primary" onClick={() => {
                                setFilmId(e.name)
                                setModal(!modal)
                            }}>Categorize it</Button>
                        </CardBody>
                    </Card>
                </Col>)
            }
            else {
                data.push(<Col key={e.id} md="4" sm="12" lg="2" className="mb-2 mt-2">
                    <Card  >
                        <CardBody>
                            <CardImg style={{ cursor: "pointer" }} src={getPosterImage(e.poster_path)} onClick={() => {
                        history.push(`/watch/${e.id}`)
                    }}/>
                            <CardTitle>{e.title}</CardTitle>
                            <CardText>Think this movie is wrong?</CardText>
                            <Button color="primary" onClick={() => {
                                setFilmId(e.name)
                                setModal(!modal)
                            }}>Correct it</Button>
                        </CardBody>
                    </Card>
                </Col>)
            }
        })
        setFilms(data)
    }, [movies])
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
                {films}
            </Row>
        </Container>
    )
}

export default List