import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useRef } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { MovieContext } from '../Contexts/MoviesContext'

async function verifyPermission(fileHandle, readWrite) {
    const opts = {};
    if (readWrite) {
      opts.mode = 'readwrite';
    }
    // Check if permission was already granted. If so, return true.
    if ((await fileHandle.queryPermission(opts)) === 'granted') {
      return true;
    }
    // Request permission. If the user grants permission, return true.
    if ((await fileHandle.requestPermission(opts)) === 'granted') {
      return true;
    }
    // The user didn't grant permission, so return false.
    return false;
  }

const Watch = () => {
    const {id} = useParams()
    const history = useHistory()
    const {movies} = useContext(MovieContext)
    const playerRef = useRef()
    useEffect(() => {
        const get = async() => {

            const data = movies.find((e) => String(e.id) === String(id))
            console.log(data)
            if (data) {
                try {
                    const canPlay = await verifyPermission(data.file)
                    if (canPlay) {
                        const file = await data.file.getFile()
                        playerRef.current.src = URL.createObjectURL(file)
                    } else {
                        alert("Cannot be played")
                    }
                } catch (error) {
                    alert("Alert from Watching: " + error)
                }
            } else {
                history.push("/")
            }
        }
        get()
    }, [id, movies, history])
    return (
        <Container fluid>
            <Row>
                <Col size="6" align="center">
                    <video className="mx-auto" style={{height:"auto", width:"85%"}} autoPlay={true} ref={playerRef} controls={true}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Watch