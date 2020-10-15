import React, { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Button, Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler } from 'reactstrap'
import { MovieContext } from '../Contexts/MoviesContext'

import { readMoviesonDisk } from '../utils/fs'


const Header = () => {
    const [collapsed, setCollapsed] = useState(true)
    const {movies, setMovies} = useContext(MovieContext)
    const [navColor, setNavColor] = useState("light")
    const history = useHistory()
    const location = useLocation()
    useEffect(() => {
        if (location.pathname.startsWith("/watch")) {
            document.documentElement.style.setProperty("--bg", "black")
            setNavColor("dark")
        } else {
            document.documentElement.style.setProperty("--bg", "#f7f7f7")
            if (navColor !== "light") setNavColor("light")
        }
    }, [location])
    return (
        <header className="mb-3">
            <Navbar color={navColor} light={navColor==="light"} dark={navColor==="dark"} expand="md">
                <NavbarBrand style={{cursor:"hover"}} onClick={() => {
                    if (movies.length > 0) {
                        history.push("/list")
                    } else {
                        history.push("/")
                    }
                }}>
                    <svg className={navColor === "dark" ? "brand_icon_dark" : ""} height="3rem" data-v-423bf9ae=""
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 483 91" class="iconLeftSlogan">
                     <g data-v-423bf9ae=""
                        id="1cadfc87-a10c-4937-9730-a167d2e43351"
                        fill="#000000"
                        transform="matrix(4.344677637719095,0,0,4.344677637719095,124.71620778147542,-0.1737865999941519)">
                        <path d="M9.46 2.30L10.08 9.45L8.89 9.91L8.99 10.50L12.67 10.50L12.77 9.91L11.58 9.45L10.92 1.75L12.14 1.29L12.03 0.70L9.42 0.70L6.31 8.97L6.31 7.95L3.85 0.70L1.32 0.70L1.22 1.29L2.44 1.75L1.61 9.45L0.41 9.91L0.52 10.50L3.30 10.50L3.40 9.91L2.21 9.45L2.94 2.62L5.68 10.74L6.37 10.50ZM16.88 3.81C14.81 3.81 13.59 5.12 13.59 7.22C13.59 9.32 14.67 10.65 16.88 10.65C19.11 10.65 20.17 9.38 20.17 7.22C20.17 5.07 18.96 3.81 16.88 3.81ZM16.88 4.33C18.06 4.33 18.83 5.39 18.83 7.18C18.83 8.96 18.07 10.14 16.88 10.14C15.69 10.14 14.95 8.95 14.95 7.18C14.95 5.42 15.72 4.33 16.88 4.33ZM27.38 4.76L28.31 4.47L28.20 3.96L26.04 3.96L25.94 4.47L26.85 4.76L24.99 9.70L24.99 8.89L23.35 4.76L24.25 4.47L24.15 3.96L21.13 3.96L21.01 4.47L21.92 4.76L24.28 10.65L25.23 10.50ZM34.73 1.29L35.32 2.91L35.91 2.80L35.91 0.70L29.12 0.70L29.01 1.29L30.23 1.75L30.23 9.45L29.04 9.91L29.13 10.50L36.16 10.50L36.16 7.91L35.57 7.81L34.80 9.91L31.71 9.91L31.71 5.60L33.42 5.60L33.85 6.78L34.44 6.68L34.44 3.92L33.85 3.82L33.42 5.00L31.71 5.00L31.71 1.29ZM43.78 4.47L43.68 3.96L41.29 3.96L41.13 4.47L42.17 4.76L40.57 6.52L39.37 4.76L40.26 4.47L40.17 3.96L36.95 3.96L36.85 4.47L37.76 4.76L39.66 7.53L37.72 9.70L36.79 9.98L36.90 10.50L39.21 10.50L39.31 10.00L38.40 9.70L39.97 7.97L41.16 9.70L40.25 10.00L40.35 10.50L43.58 10.50L43.69 10.00L42.76 9.70L40.88 6.99L42.87 4.76ZM46.66 10.50L47.28 10.50C49.42 10.50 50.97 9.11 50.97 7.03C50.97 4.87 50.05 3.81 47.99 3.81C47.42 3.81 46.62 4.10 46.21 4.33L45.64 3.81L43.95 3.96L44.06 4.47L44.90 4.47L44.90 13.05L43.99 13.34L44.10 13.85L47.03 13.85L47.14 13.34L46.21 13.05L46.21 4.84C46.84 4.62 47.32 4.47 47.87 4.47C48.89 4.47 49.49 5.03 49.49 6.93C49.49 8.83 48.36 9.98 47.25 9.98L46.66 9.98ZM54.32 9.70L54.32 0.20L53.69 0.04L52.21 0.20L52.30 0.70L53.00 0.70L53.00 9.70L52.09 10.00L52.19 10.50L55.13 10.50L55.23 10.00ZM59.64 3.81C57.57 3.81 56.35 5.12 56.35 7.22C56.35 9.32 57.43 10.65 59.64 10.65C61.87 10.65 62.93 9.38 62.93 7.22C62.93 5.07 61.71 3.81 59.64 3.81ZM59.64 4.33C60.82 4.33 61.59 5.39 61.59 7.18C61.59 8.96 60.83 10.14 59.64 10.14C58.45 10.14 57.71 8.95 57.71 7.18C57.71 5.42 58.48 4.33 59.64 4.33ZM69.26 5.47L69.26 4.05C68.85 3.88 68.43 3.81 68.01 3.81C67.28 3.81 66.75 4.06 66.28 4.33L65.79 3.81L64.16 3.96L64.26 4.47L64.96 4.47L64.96 9.70L64.05 10.00L64.15 10.50L67.09 10.50L67.20 10.00L66.28 9.70L66.28 4.84C66.77 4.66 67.37 4.47 67.76 4.47C68.10 4.47 68.25 4.51 68.45 4.58L68.75 5.57ZM71.47 6.54C71.58 5.24 72.14 4.33 73.35 4.33C74.31 4.33 74.84 4.87 74.84 5.89C74.84 6.09 74.80 6.36 74.75 6.54ZM73.68 10.00C72.17 10.00 71.44 8.79 71.44 7.11L71.44 7.04L75.92 7.04C76.03 6.80 76.16 6.38 76.16 6.01C76.16 4.66 74.97 3.81 73.35 3.81C71.39 3.81 69.96 5.07 69.96 7.22C69.96 9.30 71.12 10.65 73.60 10.65C74.51 10.65 75.40 10.37 76.01 9.83L75.68 9.37C75.11 9.73 74.42 10.00 73.68 10.00ZM82.42 5.47L82.42 4.05C82.01 3.88 81.59 3.81 81.17 3.81C80.44 3.81 79.91 4.06 79.44 4.33L78.95 3.81L77.32 3.96L77.42 4.47L78.12 4.47L78.12 9.70L77.21 10.00L77.31 10.50L80.25 10.50L80.36 10.00L79.44 9.70L79.44 4.84C79.93 4.66 80.53 4.47 80.92 4.47C81.26 4.47 81.41 4.51 81.61 4.58L81.91 5.57Z"></path></g>
                        <g data-v-423bf9ae="" id="98da8e71-bdc1-41ba-b23e-6d99b446200a" transform="matrix(1.064975294228531,0,0,1.064975294228531,0.7512352885734472,0.9999999999999929)" stroke="none" fill="#25347B">
                        <path d="M65.818 60.524h4.34V13.839h-4.34v46.685zM74.043 60.524h4.34V16.329h-4.34v44.195zM26.087 44.904c-6.4 0-11.61 5.203-11.61 11.602 0 6.401 5.21 11.608 11.61 11.608 6.397 0 11.608-5.207 11.608-11.608 0-6.399-5.211-11.602-11.608-11.602z"></path>
                        <path d="M51.658 0H10.849C4.864 0 0 4.865 0 10.847v62.818c0 5.975 4.864 10.844 10.849 10.844h40.809c5.979 0 10.845-4.869 10.845-10.844V10.847C62.502 4.865 57.637 0 51.658 0zM26.087 72.455c-8.795 0-15.947-7.152-15.947-15.949 0-8.789 7.151-15.941 15.947-15.941 8.792 0 15.943 7.152 15.943 15.941 0 8.797-7.151 15.949-15.943 15.949zm19.128-46.69c-5.308 0-9.628-4.317-9.628-9.627 0-5.312 4.32-9.632 9.628-9.632 5.314 0 9.639 4.321 9.639 9.632 0 5.31-4.325 9.627-9.639 9.627z"></path>
                        <path d="M45.215 10.841c-2.915 0-5.289 2.376-5.289 5.297a5.295 5.295 0 0 0 5.289 5.289c2.921 0 5.298-2.37 5.298-5.289a5.304 5.304 0 0 0-5.298-5.297zM86.615 30.677v-7.844h-4.341v41.838H65.886v4.341h20.662v-.071h.067v-8.962H100V30.677z"></path></g>
                        <g data-v-423bf9ae="" id="d6841e37-c30f-4d65-9ad3-3e62cc411d5a" fill="#000000" transform="matrix(1.3778152070886798,0,0,1.3778152070886798,127.4406047262836,59.466170107446786)">
                        <path d="M4.93 1.31L4.93 1.31Q4.62 1.36 4.37 1.48L4.37 1.48L4.37 1.48Q4.09 1.61 4.07 1.70L4.07 1.70L4.07 1.70Q3.87 2.55 3.42 4.25L3.42 4.25L3.42 4.25Q2.97 5.94 2.77 6.80L2.77 6.80L2.77 6.80Q2.12 6.88 1.44 7.03L1.44 7.03L1.44 7.03Q1.65 6.04 2.06 4.31L2.06 4.31L2.06 4.31Q2.52 2.37 2.69 1.59L2.69 1.59L2.69 1.59Q2.74 1.34 2.11 1.46L2.11 1.46L2.11 1.46Q1.80 1.51 1.55 1.63L1.55 1.63L1.55 1.63Q1.27 1.76 1.25 1.85L1.25 1.85L1.25 1.85Q1.08 2.61 0.60 4.64L0.60 4.64L0.60 4.64Q0.18 6.41-0.03 7.44L-0.03 7.44L-0.03 7.44Q-0.16 7.49-0.20 7.50L-0.20 7.50L-0.20 7.50Q-0.36 7.55-0.52 7.66L-0.52 7.66L-0.52 7.66Q-0.77 7.82-0.64 7.91L-0.64 7.91L-0.64 7.91Q-0.46 8.01-0.13 7.94L-0.13 7.94L-0.13 7.94Q-0.45 9.65-0.57 11.08L-0.57 11.08L-0.57 11.08Q-0.58 11.15-0.36 11.16L-0.36 11.16L-0.36 11.16Q-0.14 11.17 0.14 11.12L0.14 11.12L0.14 11.12Q0.86 10.98 0.88 10.69L0.88 10.69L0.88 10.69Q1.00 9.26 1.34 7.53L1.34 7.53L1.34 7.53Q1.54 7.49 1.89 7.42L1.89 7.42L1.89 7.42Q2.27 7.36 2.65 7.33L2.65 7.33L2.65 7.33Q2.18 9.44 2.09 11.13L2.09 11.13L2.09 11.13Q2.09 11.20 2.32 11.21L2.32 11.21L2.32 11.21Q2.53 11.22 2.81 11.17L2.81 11.17L2.81 11.17Q3.54 11.03 3.55 10.74L3.55 10.74L3.55 10.74Q3.64 9.17 4.05 7.25L4.05 7.25L4.05 7.25Q4.38 7.18 4.64 7.02L4.64 7.02L4.64 7.02Q4.82 6.91 4.79 6.82L4.79 6.82L4.79 6.82Q4.76 6.72 4.56 6.71L4.56 6.71L4.56 6.71Q4.39 6.71 4.16 6.71L4.16 6.71L4.16 6.71Q4.38 5.79 4.83 4.07L4.83 4.07L4.83 4.07Q5.31 2.28 5.51 1.44L5.51 1.44L5.51 1.44Q5.56 1.19 4.93 1.31L4.93 1.31ZM16.73 1.42L16.73 1.42Q16.02 1.19 14.84 1.57L14.84 1.57L14.84 1.57Q13.33 2.06 12.77 3.77L12.77 3.77L12.77 3.77Q12.42 4.83 12.60 6.11L12.60 6.11L12.60 6.11Q12.69 6.76 12.95 7.16L12.95 7.16L12.95 7.16Q12.54 7.38 12.24 7.70L12.24 7.70L12.24 7.70Q11.25 8.80 11.35 10.01L11.35 10.01L11.35 10.01Q11.42 10.70 11.90 11.11L11.90 11.11L11.90 11.11Q12.30 11.44 13.13 11.42L13.13 11.42L13.13 11.42Q13.96 11.39 14.66 10.95L14.66 10.95L14.66 10.95Q15.42 10.49 15.72 9.76L15.72 9.76L15.72 9.76Q15.78 9.61 15.50 9.60L15.50 9.60L15.50 9.60Q15.33 9.59 15.13 9.63L15.13 9.63L15.13 9.63Q14.38 9.76 14.28 10.02L14.28 10.02L14.28 10.02Q14.08 10.51 13.73 10.80L13.73 10.80L13.73 10.80Q13.72 10.81 13.71 10.82L13.71 10.82L13.71 10.82Q13.66 10.81 13.65 10.81L13.65 10.81L13.65 10.81Q13.58 10.79 13.50 10.75L13.50 10.75L13.50 10.75Q13.34 10.68 13.18 10.52L13.18 10.52L13.18 10.52Q12.89 10.23 12.82 9.63L12.82 9.63L12.82 9.63Q12.72 8.83 13.35 7.86L13.35 7.86L13.35 7.86Q13.43 7.74 13.54 7.62L13.54 7.62L13.54 7.62Q13.75 7.70 14.02 7.72L14.02 7.72L14.02 7.72Q14.42 7.74 14.92 7.51L14.92 7.51L14.92 7.51Q15.33 7.32 15.18 7.18L15.18 7.18L15.18 7.18Q14.90 6.90 14.47 6.84L14.47 6.84L14.47 6.84Q14.43 6.79 14.40 6.75L14.40 6.75L14.40 6.75Q14.19 6.45 14.08 5.89L14.08 5.89L14.08 5.89Q13.89 4.89 14.08 4.00L14.08 4.00L14.08 4.00Q14.34 2.70 15.11 2.04L15.11 2.04L15.11 2.04Q15.16 2.00 15.26 1.93L15.26 1.93L15.26 1.93Q15.26 1.93 15.26 1.93L15.26 1.93L15.26 1.93Q15.39 1.94 15.37 1.93L15.37 1.93L15.37 1.93Q15.96 2.02 15.84 2.62L15.84 2.62L15.84 2.62Q15.79 2.86 16.42 2.75L16.42 2.75L16.42 2.75Q16.73 2.69 16.98 2.58L16.98 2.58L16.98 2.58Q17.26 2.45 17.28 2.36L17.28 2.36L17.28 2.36Q17.42 1.63 16.73 1.42L16.73 1.42ZM26.99 5.31L26.99 5.31Q26.84 6.24 25.94 7.18L25.94 7.18L25.94 7.18Q25.75 7.38 25.51 7.58L25.51 7.58L25.51 7.58Q25.45 7.63 25.39 7.68L25.39 7.68L25.39 7.68Q25.17 7.59 24.92 7.58L24.92 7.58L24.92 7.58Q25.48 4.74 25.62 2.66L25.62 2.66L25.62 2.66Q25.89 2.80 26.13 2.99L26.13 2.99L26.13 2.99Q26.64 3.39 26.87 4.03L26.87 4.03L26.87 4.03Q27.10 4.65 26.99 5.31L26.99 5.31ZM24.01 2.40L24.01 2.40Q24.01 2.40 24.03 2.39L24.03 2.39L24.03 2.39Q24.02 2.40 24.01 2.40L24.01 2.40ZM28.95 11.42L28.95 11.42Q28.22 10.88 26.69 8.99L26.69 8.99L26.69 8.99Q26.02 8.17 25.90 8.05L25.90 8.05L25.90 8.05Q26.36 7.84 26.79 7.50L26.79 7.50L26.79 7.50Q27.99 6.56 28.35 5.41L28.35 5.41L28.35 5.41Q28.59 4.60 28.39 3.84L28.39 3.84L28.39 3.84Q28.18 3.07 27.56 2.53L27.56 2.53L27.56 2.53Q26.31 1.46 24.24 1.88L24.24 1.88L24.24 1.88Q24.11 1.91 23.91 1.96L23.91 1.96L23.91 1.96Q23.17 2.14 23.24 2.37L23.24 2.37L23.24 2.37Q23.30 2.58 24.01 2.40L24.01 2.40L24.01 2.40Q24.08 2.39 24.12 2.38L24.12 2.38L24.12 2.38Q24.17 2.37 24.20 2.37L24.20 2.37L24.20 2.37Q24.08 5.11 22.85 10.79L22.85 10.79L22.85 10.79Q22.79 11.04 23.43 10.92L23.43 10.92L23.43 10.92Q23.73 10.87 23.99 10.75L23.99 10.75L23.99 10.75Q24.27 10.62 24.29 10.53L24.29 10.53L24.29 10.53Q24.58 9.17 24.68 8.72L24.68 8.72L24.68 8.72Q24.68 8.72 24.68 8.72L24.68 8.72L24.68 8.72Q24.69 8.72 24.69 8.72L24.69 8.72L24.69 8.72Q24.80 8.85 25.48 9.70L25.48 9.70L25.48 9.70Q26.80 11.34 27.57 11.92L27.57 11.92L27.57 11.92Q27.79 12.09 28.51 11.83L28.51 11.83L28.51 11.83Q28.70 11.76 28.84 11.67L28.84 11.67L28.84 11.67Q29.09 11.52 28.95 11.42L28.95 11.42ZM40.04 1.42L40.04 1.42Q39.33 1.19 38.15 1.57L38.15 1.57L38.15 1.57Q36.64 2.06 36.08 3.77L36.08 3.77L36.08 3.77Q35.73 4.83 35.91 6.11L35.91 6.11L35.91 6.11Q36.00 6.76 36.26 7.16L36.26 7.16L36.26 7.16Q35.85 7.38 35.55 7.70L35.55 7.70L35.55 7.70Q34.56 8.80 34.67 10.01L34.67 10.01L34.67 10.01Q34.73 10.70 35.21 11.11L35.21 11.11L35.21 11.11Q35.61 11.44 36.44 11.42L36.44 11.42L36.44 11.42Q37.27 11.39 37.97 10.95L37.97 10.95L37.97 10.95Q38.73 10.49 39.03 9.76L39.03 9.76L39.03 9.76Q39.09 9.61 38.81 9.60L38.81 9.60L38.81 9.60Q38.64 9.59 38.45 9.63L38.45 9.63L38.45 9.63Q37.69 9.76 37.59 10.02L37.59 10.02L37.59 10.02Q37.39 10.51 37.04 10.80L37.04 10.80L37.04 10.80Q37.03 10.81 37.02 10.82L37.02 10.82L37.02 10.82Q36.97 10.81 36.96 10.81L36.96 10.81L36.96 10.81Q36.89 10.79 36.81 10.75L36.81 10.75L36.81 10.75Q36.65 10.68 36.49 10.52L36.49 10.52L36.49 10.52Q36.20 10.23 36.13 9.63L36.13 9.63L36.13 9.63Q36.03 8.83 36.66 7.86L36.66 7.86L36.66 7.86Q36.74 7.74 36.85 7.62L36.85 7.62L36.85 7.62Q37.06 7.70 37.33 7.72L37.33 7.72L37.33 7.72Q37.73 7.74 38.23 7.51L38.23 7.51L38.23 7.51Q38.64 7.32 38.49 7.18L38.49 7.18L38.49 7.18Q38.21 6.90 37.78 6.84L37.78 6.84L37.78 6.84Q37.74 6.79 37.71 6.75L37.71 6.75L37.71 6.75Q37.50 6.45 37.39 5.89L37.39 5.89L37.39 5.89Q37.20 4.89 37.39 4.00L37.39 4.00L37.39 4.00Q37.65 2.70 38.42 2.04L38.42 2.04L38.42 2.04Q38.47 2.00 38.57 1.93L38.57 1.93L38.57 1.93Q38.58 1.93 38.58 1.93L38.58 1.93L38.58 1.93Q38.71 1.94 38.68 1.93L38.68 1.93L38.68 1.93Q39.27 2.02 39.15 2.62L39.15 2.62L39.15 2.62Q39.10 2.86 39.73 2.75L39.73 2.75L39.73 2.75Q40.04 2.69 40.29 2.58L40.29 2.58L40.29 2.58Q40.57 2.45 40.59 2.36L40.59 2.36L40.59 2.36Q40.73 1.63 40.04 1.42L40.04 1.42ZM47.17 0.91L47.17 0.91Q47.50 1.53 47.32 2.22L47.32 2.22L47.32 2.22Q47.15 2.87 46.59 3.34L46.59 3.34L46.59 3.34Q46.42 3.48 46.61 3.53L46.61 3.53L46.61 3.53Q46.76 3.58 46.93 3.57L46.93 3.57L46.93 3.57Q47.55 3.51 47.91 3.22L47.91 3.22L47.91 3.22Q48.54 2.70 48.75 1.98L48.75 1.98L48.75 1.98Q48.99 1.20 48.63 0.51L48.63 0.51L48.63 0.51Q48.49 0.27 47.78 0.50L47.78 0.50L47.78 0.50Q47.51 0.59 47.33 0.70L47.33 0.70L47.33 0.70Q47.13 0.83 47.17 0.91L47.17 0.91ZM66.81 5.50L66.81 5.50Q67.27 4.74 67.47 3.53L67.47 3.53L67.47 3.53Q67.71 2.15 67.21 1.57L67.21 1.57L67.21 1.57Q66.92 1.22 66.17 1.27L66.17 1.27L66.17 1.27Q65.24 1.33 64.34 1.85L64.34 1.85L64.34 1.85Q63.09 2.59 62.48 4.34L62.48 4.34L62.48 4.34Q61.87 6.10 62.48 7.18L62.48 7.18L62.48 7.18Q62.77 7.68 64.15 8.17L64.15 8.17L64.15 8.17Q64.72 8.37 64.92 8.48L64.92 8.48L64.92 8.48Q65.36 8.74 65.45 9.11L65.45 9.11L65.45 9.11Q65.54 9.50 65.20 10.17L65.20 10.17L65.20 10.17Q65.02 10.51 64.74 10.76L64.74 10.76L64.74 10.76Q64.63 10.87 64.47 10.97L64.47 10.97L64.47 10.97Q64.39 11.02 64.37 11.03L64.37 11.03L64.37 11.03Q64.31 11.07 64.25 11.09L64.25 11.09L64.25 11.09Q64.35 11.05 64.22 11.10L64.22 11.10L64.22 11.10Q64.23 11.10 64.29 11.09L64.29 11.09L64.29 11.09Q64.25 11.09 64.20 11.09L64.20 11.09L64.20 11.09Q64.20 11.10 64.10 11.09L64.10 11.09L64.10 11.09Q64.05 11.09 63.90 11.05L63.90 11.05L63.90 11.05Q63.55 10.97 63.25 10.64L63.25 10.64L63.25 10.64Q63.03 10.39 62.94 9.93L62.94 9.93L62.94 9.93Q62.84 9.44 63.06 9.28L63.06 9.28L63.06 9.28Q63.26 9.13 63.24 9.06L63.24 9.06L63.24 9.06Q63.21 8.97 62.98 8.96L62.98 8.96L62.98 8.96Q62.36 8.95 61.95 9.24L61.95 9.24L61.95 9.24Q61.56 9.53 61.48 9.86L61.48 9.86L61.48 9.86Q61.40 10.20 61.56 10.62L61.56 10.62L61.56 10.62Q61.83 11.36 62.70 11.61L62.70 11.61L62.70 11.61Q63.59 11.87 64.86 11.37L64.86 11.37L64.86 11.37Q65.87 10.96 66.44 10.24L66.44 10.24L66.44 10.24Q66.81 9.76 66.90 9.24L66.90 9.24L66.90 9.24Q67.01 8.62 66.62 8.23L66.62 8.23L66.62 8.23Q66.36 7.96 65.80 7.75L65.80 7.75L65.80 7.75Q65.65 7.70 65.33 7.59L65.33 7.59L65.33 7.59Q65.04 7.50 64.91 7.44L64.91 7.44L64.91 7.44Q64.37 7.23 64.09 6.97L64.09 6.97L64.09 6.97Q63.79 6.69 63.69 5.96L63.69 5.96L63.69 5.96Q63.49 4.53 64.44 2.97L64.44 2.97L64.44 2.97Q64.86 2.29 65.37 1.95L65.37 1.95L65.37 1.95Q65.41 1.91 65.51 1.86L65.51 1.86L65.51 1.86Q65.50 1.86 65.56 1.84L65.56 1.84L65.56 1.84Q65.54 1.84 65.58 1.83L65.58 1.83L65.58 1.83Q65.56 1.84 65.60 1.83L65.60 1.83L65.60 1.83Q65.52 1.85 65.45 1.85L65.45 1.85L65.45 1.85Q65.47 1.85 65.45 1.85L65.45 1.85L65.47 1.85L65.47 1.85Q65.53 1.86 65.61 1.89L65.61 1.89L65.61 1.89Q65.63 1.89 65.72 1.96L65.72 1.96L65.72 1.96Q65.79 2.01 65.83 2.06L65.83 2.06L65.83 2.06Q65.95 2.20 66.01 2.45L66.01 2.45L66.01 2.45Q66.13 2.84 66.07 3.49L66.07 3.49L66.07 3.49Q65.95 4.81 65.37 5.76L65.37 5.76L65.37 5.76Q65.28 5.90 65.59 5.91L65.59 5.91L65.59 5.91Q65.79 5.92 65.95 5.89L65.95 5.89L65.95 5.89Q66.65 5.76 66.81 5.50L66.81 5.50ZM89.94 1.12L89.94 1.12Q89.91 0.90 89.17 1.07L89.17 1.07L89.17 1.07Q88.44 1.25 88.48 1.51L88.48 1.51L88.48 1.51Q88.66 2.73 88.44 4.12L88.44 4.12L88.44 4.12Q88.17 5.76 87.42 6.75L87.42 6.75L87.42 6.75Q87.27 6.95 87.01 7.16L87.01 7.16L87.01 7.16Q86.95 7.23 86.84 7.29L86.84 7.29L86.84 7.29Q86.84 7.29 86.76 7.34L86.76 7.34L86.75 7.34L86.75 7.34Q86.75 7.34 86.75 7.34L86.75 7.34L86.75 7.34Q86.68 7.36 86.61 7.38L86.61 7.38L86.60 7.37L86.60 7.37Q86.60 7.37 86.59 7.37L86.59 7.37L86.59 7.37Q86.56 7.36 86.49 7.35L86.49 7.35L86.49 7.35Q86.48 7.35 86.45 7.33L86.45 7.33L86.45 7.33Q86.45 7.33 86.43 7.33L86.43 7.33L86.43 7.33Q85.83 7.06 85.84 
                        5.83L85.84 5.83L85.84 5.83Q85.84 4.47 86.80 1.59L86.80 1.59L86.80 1.59Q86.88 1.34 86.21 1.46L86.21 1.46L86.21 1.46Q85.44 1.60 85.36 1.85L85.36 1.85L85.36 1.85Q84.49 4.44 84.39 5.87L84.39 5.87L84.39 5.87Q84.29 7.12 84.81 7.65L84.81 7.65L84.81 7.65Q85.08 7.94 85.69 7.96L85.69 7.96L85.69 7.96Q85.83 7.97 85.99 7.96L85.99 7.96L85.99 7.96Q85.93 8.59 85.41 10.68L85.41 10.68L85.41 10.68Q85.35 10.94 85.99 10.82L85.99 10.82L85.99 10.82Q86.30 10.77 86.55 10.65L86.55 10.65L86.55 10.65Q86.83 10.52 86.85 10.42L86.85 10.42L86.85 10.42Q87.39 8.28 87.45 7.59L87.45 7.59L87.45 7.59Q87.49 7.57 87.50 7.57L87.50 7.57L87.50 7.57Q89.09 6.90 89.70 4.67L89.70 4.67L89.70 4.67Q90.21 2.84 89.94 1.12L89.94 1.12ZM99.62 5.20L99.62 5.20Q99.50 6.64 99.23 7.92L99.23 7.92L99.23 7.92Q98.82 9.88 98.05 10.64L98.05 10.64L98.05 10.64Q97.96 10.55 97.88 10.38L97.88 10.38L97.88 10.38Q97.70 9.97 97.71 9.03L97.71 9.03L97.71 9.03Q97.74 7.34 98.31 5.48L98.31 5.48L98.31 5.48Q98.81 3.85 99.51 3.01L99.51 3.01L99.51 3.01Q99.59 3.25 99.63 3.62L99.63 3.62L99.63 3.62Q99.70 4.21 99.62 5.20L99.62 5.20ZM100.55 1.96L100.55 1.96Q100.34 1.79 99.61 2.05L99.61 2.05L99.61 2.05Q99.11 2.24 99.13 2.39L99.13 2.39L99.13 2.39Q98.88 2.48 98.70 2.63L98.70 2.63L98.70 2.63Q97.71 3.40 97.05 5.22L97.05 5.22L97.05 5.22Q96.50 6.70 96.31 8.50L96.31 8.50L96.31 8.50Q96.23 9.28 96.26 9.92L96.26 9.92L96.26 9.92Q96.30 10.77 96.66 11.13L96.66 11.13L96.66 11.13Q96.84 11.31 97.28 11.33L97.28 11.33L97.28 11.33Q97.82 11.36 98.64 11.02L98.64 11.02L98.64 11.02Q99.33 10.74 99.85 9.94L99.85 9.94L99.85 9.94Q100.32 9.21 100.63 7.85L100.63 7.85L100.63 7.85Q100.84 6.94 100.97 5.84L100.97 5.84L100.97 5.84Q101.13 4.44 101.13 3.78L101.13 3.78L101.13 3.78Q101.12 2.45 100.55 1.96L100.55 1.96ZM112.44 2.21L112.44 2.21Q111.81 2.38 111.77 2.63L111.77 2.63L111.77 2.63Q111.72 3.01 111.56 4.51L111.56 4.51L111.56 4.51Q111.44 5.69 111.30 6.41L111.30 6.41L111.30 6.41Q110.90 8.57 109.80 9.83L109.80 9.83L109.80 9.83Q109.65 10.00 109.54 10.12L109.54 10.12L109.54 10.12Q109.28 9.61 109.24 8.40L109.24 8.40L109.24 8.40Q109.18 6.90 110.11 4.58L110.11 4.58L110.11 4.58Q110.79 2.88 110.95 2.40L110.95 2.40L110.95 2.40Q111.04 2.15 110.37 2.26L110.37 2.26L110.37 2.26Q109.60 2.41 109.51 2.66L109.51 2.66L109.51 2.66Q109.35 3.12 108.79 4.53L108.79 4.53L108.79 4.53Q108.33 5.71 108.12 6.43L108.12 6.43L108.12 6.43Q107.45 8.66 108.02 10.36L108.02 10.36L108.02 10.36Q108.12 10.68 108.32 10.83L108.32 10.83L108.32 10.83Q108.55 11.03 109.20 10.92L109.20 10.92L109.20 10.92Q110.21 10.73 111.12 9.71L111.12 9.71L111.12 9.71Q112.29 8.41 112.72 6.34L112.72 6.34L112.72 6.34Q112.88 5.55 113.01 4.29L113.01 4.29L113.01 4.29Q113.19 2.58 113.24 2.24L113.24 2.24L113.24 2.24Q113.25 2.11 112.87 2.14L112.87 2.14L112.87 2.14Q112.62 2.16 112.44 2.21L112.44 2.21ZM123.68 5.31L123.68 5.31Q123.53 6.24 122.63 7.18L122.63 7.18L122.63 7.18Q122.44 7.38 122.20 7.58L122.20 7.58L122.20 7.58Q122.14 7.63 122.08 7.68L122.08 7.68L122.08 7.68Q121.86 7.59 121.60 7.58L121.60 7.58L121.60 7.58Q122.17 4.74 122.31 2.66L122.31 2.66L122.31 2.66Q122.58 2.80 122.81 2.99L122.81 2.99L122.81 2.99Q123.33 3.39 123.56 4.03L123.56 4.03L123.56 4.03Q123.79 4.65 123.68 5.31L123.68 5.31ZM120.70 2.40L120.70 2.40Q120.70 2.40 120.72 2.39L120.72 2.39L120.72 2.39Q120.71 2.40 120.70 2.40L120.70 2.40ZM125.64 11.42L125.64 11.42Q124.91 10.88 123.38 8.99L123.38 8.99L123.38 8.99Q122.71 8.17 122.59 8.05L122.59 8.05L122.59 8.05Q123.05 7.84 123.48 7.50L123.48 7.50L123.48 7.50Q124.68 6.56 125.04 5.41L125.04 5.41L125.04 5.41Q125.28 4.60 125.08 3.84L125.08 3.84L125.08 3.84Q124.87 3.07 124.24 2.53L124.24 2.53L124.24 2.53Q123.00 1.46 120.93 1.88L120.93 1.88L120.93 1.88Q120.80 1.91 120.60 1.96L120.60 1.96L120.60 1.96Q119.86 2.14 119.92 2.37L119.92 2.37L119.92 2.37Q119.98 2.58 120.70 2.40L120.70 2.40L120.70 2.40Q120.76 2.39 120.81 2.38L120.81 2.38L120.81 2.38Q120.85 2.37 120.89 2.37L120.89 2.37L120.89 2.37Q120.77 5.11 119.53 10.79L119.53 10.79L119.53 10.79Q119.48 11.04 120.11 10.92L120.11 10.92L120.11 10.92Q120.42 10.87 120.67 10.75L120.67 10.75L120.67 10.75Q120.96 10.62 120.98 10.53L120.98 10.53L120.98 10.53Q121.27 9.17 121.37 8.72L121.37 8.72L121.37 8.72Q121.37 8.72 121.37 8.72L121.37 8.72L121.37 8.72Q121.38 8.72 121.38 8.72L121.38 8.72L121.38 8.72Q121.49 8.85 122.17 9.70L122.17 9.70L122.17 9.70Q123.49 11.34 124.26 11.92L124.26 11.92L124.26 11.92Q124.48 12.09 125.20 11.83L125.20 11.83L125.20 11.83Q125.38 11.76 125.53 11.67L125.53 11.67L125.53 11.67Q125.77 11.52 125.64 11.42L125.64 11.42ZM149.14 2.21L149.14 2.21Q149.10 2.05 148.54 2.15L148.54 2.15L148.54 2.15Q147.85 2.28 147.68 2.54L147.68 2.54L147.68 2.54Q146.81 4.03 145.87 6.51L145.87 6.51L145.87 6.41L145.87 6.41Q145.87 5.55 145.71 2.12L145.71 2.12L145.71 2.12Q145.70 2.03 145.47 2.02L145.47 2.02L145.47 2.02Q145.33 1.92 144.91 2.00L144.91 2.00L144.91 2.00Q144.20 2.13 144.05 2.39L144.05 2.39L144.05 2.39Q141.92 6.30 141.31 11.14L141.31 11.14L141.31 11.14Q141.30 11.27 141.68 11.23L141.68 11.23L141.68 11.23Q141.93 11.21 142.11 11.16L142.11 11.16L142.11 11.16Q142.75 10.99 142.78 10.75L142.78 10.75L142.78 10.75Q143.18 7.51 144.35 4.58L144.35 4.58L144.35 4.58Q144.40 5.81 144.41 6.71L144.41 6.71L144.41 6.71Q144.42 8.26 144.33 8.86L144.33 8.86L144.33 8.86Q144.15 10.15 144.14 10.99L144.14 10.99L144.14 10.99Q144.14 11.20 144.83 11.03L144.83 11.03L144.83 11.03Q145.50 10.86 145.59 10.66L145.59 10.66L145.59 10.66Q146.07 9.61 146.79 7.67L146.79 7.67L146.79 7.67Q147.57 5.54 147.94 4.66L147.94 4.66L147.94 4.66Q147.98 5.91 147.75 7.85L147.75 7.85L147.75 7.85Q147.41 10.57 147.38 11.04L147.38 11.04L147.38 11.04Q147.37 11.12 147.59 11.12L147.59 11.12L147.59 11.12Q147.81 11.13 148.09 11.08L148.09 11.08L148.09 11.08Q148.81 10.94 148.84 10.65L148.84 10.65L148.84 10.65Q148.89 9.88 149.07 8.54L149.07 8.54L149.07 8.54Q149.26 7.03 149.32 6.43L149.32 6.43L149.32 6.43Q149.56 3.95 149.14 2.21L149.14 2.21ZM159.72 5.20L159.72 5.20Q159.60 6.64 159.33 7.92L159.33 7.92L159.33 7.92Q158.92 9.88 158.15 10.64L158.15 10.64L158.15 10.64Q158.06 10.55 157.99 10.38L157.99 10.38L157.99 10.38Q157.80 9.97 157.81 9.03L157.81 9.03L157.81 9.03Q157.84 7.34 158.42 5.48L158.42 5.48L158.42 5.48Q158.92 3.85 159.61 3.01L159.61 3.01L159.61 3.01Q159.69 3.25 159.74 3.62L159.74 3.62L159.74 3.62Q159.80 4.21 159.72 5.20L159.72 5.20ZM160.65 1.96L160.65 1.96Q160.45 1.79 159.71 2.05L159.71 2.05L159.71 2.05Q159.21 2.24 159.23 2.39L159.23 2.39L159.23 2.39Q158.98 2.48 158.80 2.63L158.80 2.63L158.80 2.63Q157.81 3.40 157.15 5.22L157.15 5.22L157.15 5.22Q156.60 6.70 156.41 8.50L156.41 8.50L156.41 8.50Q156.33 9.28 156.36 9.92L156.36 9.92L156.36 9.92Q156.40 10.77 156.76 11.13L156.76 11.13L156.76 11.13Q156.95 11.31 157.38 11.33L157.38 11.33L157.38 11.33Q157.92 11.36 158.74 11.02L158.74 11.02L158.74 11.02Q159.43 10.74 159.95 9.94L159.95 9.94L159.95 9.94Q160.42 9.21 160.73 7.85L160.73 7.85L160.73 7.85Q160.95 6.94 161.07 5.84L161.07 5.84L161.07 5.84Q161.23 4.44 161.23 3.78L161.23 3.78L161.23 3.78Q161.22 2.45 160.65 1.96L160.65 1.96ZM173.46 2.13L173.46 2.13Q173.41 1.90 172.68 2.08L172.68 2.08L172.68 2.08Q171.94 2.27 172.00 2.52L172.00 2.52L172.00 2.52Q172.10 3.04 171.93 3.73L171.93 3.73L171.93 3.73Q171.88 3.96 171.76 4.33L171.76 4.33L171.76 4.33Q171.62 4.77 171.58 4.92L171.58 4.92L171.58 4.92Q171.21 6.24 170.97 6.97L170.97 6.97L170.97 6.97Q170.63 7.99 170.32 8.65L170.32 8.65L170.32 8.65Q170.35 2.78 170.33 2.18L170.33 2.18L170.33 2.18Q170.33 2.09 170.10 2.08L170.10 2.08L170.10 2.08Q169.88 2.07 169.59 2.13L169.59 2.13L169.59 2.13Q168.86 2.29 168.87 2.58L168.87 2.58L168.87 2.58Q168.92 4.06 168.89 6.67L168.89 6.67L168.89 6.67Q168.85 9.59 168.87 10.75L168.87 10.75L168.87 10.75Q168.87 10.93 169.46 10.82L169.46 10.82L169.46 10.82Q170.01 10.72 170.26 10.50L170.26 10.50L170.26 10.50Q171.50 9.40 172.40 6.77L172.40 6.77L172.40 6.77Q172.63 6.07 173.02 4.65L173.02 4.65L173.02 4.65Q173.57 2.69 173.46 2.13L173.46 2.13ZM181.24 2.53L181.24 2.53Q181.00 3.62 180.38 6.79L180.38 6.79L180.38 6.79Q180.14 8.03 179.95 8.93L179.95 8.93L179.95 8.93Q179.56 10.78 179.55 10.91L179.55 10.91L179.55 10.91Q179.55 10.99 179.78 11.00L179.78 11.00L179.78 11.00Q180.00 11.01 180.28 10.96L180.28 10.96L180.28 10.96Q181.01 10.81 181.02 10.52L181.02 10.52L181.02 10.52Q181.02 10.23 181.18 9.62L181.18 9.62L181.18 9.62Q181.25 9.32 181.41 8.57L181.41 8.57L181.41 8.57Q181.58 7.77 181.84 6.44L181.84 6.44L181.84 6.44Q182.44 3.36 182.68 2.27L182.68 2.27L182.68 2.27Q182.74 2.02 182.10 2.13L182.10 2.13L182.10 2.13Q181.79 2.19 181.54 2.31L181.54 2.31L181.54 2.31Q181.26 2.44 181.24 2.53L181.24 2.53ZM194.03 1.42L194.03 1.42Q193.32 1.19 192.14 1.57L192.14 1.57L192.14 1.57Q190.63 2.06 190.07 3.77L190.07 3.77L190.07 3.77Q189.72 4.83 189.90 6.11L189.90 6.11L189.90 6.11Q189.98 6.76 190.25 7.16L190.25 7.16L190.25 7.16Q189.83 7.38 189.54 7.70L189.54 7.70L189.54 7.70Q188.54 8.80 188.65 10.01L188.65 10.01L188.65 10.01Q188.72 10.70 189.20 11.11L189.20 11.11L189.20 11.11Q189.59 11.44 190.42 11.42L190.42 11.42L190.42 11.42Q191.26 11.39 191.96 10.95L191.96 10.95L191.96 10.95Q192.71 10.49 193.01 9.76L193.01 9.76L193.01 9.76Q193.07 9.61 192.79 9.60L192.79 9.60L192.79 9.60Q192.62 9.59 192.43 9.63L192.43 9.63L192.43 9.63Q191.68 9.76 191.58 10.02L191.58 10.02L191.58 10.02Q191.38 10.51 191.03 10.80L191.03 10.80L191.03 10.80Q191.02 10.81 191.00 10.82L191.00 10.82L191.00 10.82Q190.96 10.81 190.95 10.81L190.95 10.81L190.95 10.81Q190.88 10.79 190.80 10.75L190.80 10.75L190.80 10.75Q190.63 10.68 190.48 10.52L190.48 10.52L190.48 10.52Q190.19 10.23 190.11 9.63L190.11 9.63L190.11 9.63Q190.02 8.83 190.65 7.86L190.65 7.86L190.65 7.86Q190.73 7.74 190.83 7.62L190.83 7.62L190.83 7.62Q191.04 7.70 191.32 7.72L191.32 7.72L191.32 7.72Q191.72 7.74 192.21 7.51L192.21 7.51L192.21 7.51Q192.63 7.32 192.48 7.18L192.48 7.18L192.48 7.18Q192.19 6.90 191.77 6.84L191.77 6.84L191.77 6.84Q191.73 6.79 191.69 6.75L191.69 6.75L191.69 6.75Q191.49 6.45 191.38 5.89L191.38 5.89L191.38 5.89Q191.19 4.89 191.37 4.00L191.37 4.00L191.37 4.00Q191.64 2.70 192.40 2.04L192.40 2.04L192.40 2.04Q192.46 2.00 192.55 1.93L192.55 1.93L192.55 
                        1.93Q192.56 1.93 192.56 1.93L192.56 1.93L192.56 1.93Q192.69 1.94 192.67 1.93L192.67 1.93L192.67 1.93Q193.25 2.02 193.14 2.62L193.14 2.62L193.14 2.62Q193.09 2.86 193.72 2.75L193.72 2.75L193.72 2.75Q194.02 2.69 194.28 2.58L194.28 2.58L194.28 2.58Q194.56 2.45 194.58 2.36L194.58 2.36L194.58 2.36Q194.71 1.63 194.03 1.42L194.03 1.42ZM205.47 5.50L205.47 5.50Q205.92 4.74 206.12 3.53L206.12 3.53L206.12 3.53Q206.36 2.15 205.86 1.57L205.86 1.57L205.86 1.57Q205.58 1.22 204.83 1.27L204.83 1.27L204.83 1.27Q203.89 1.33 202.99 1.85L202.99 1.85L202.99 1.85Q201.74 2.59 201.13 4.34L201.13 4.34L201.13 4.34Q200.52 6.10 201.13 7.18L201.13 7.18L201.13 7.18Q201.43 7.68 202.80 8.17L202.80 8.17L202.80 8.17Q203.37 8.37 203.57 8.48L203.57 8.48L203.57 8.48Q204.01 8.74 204.10 9.11L204.10 9.11L204.10 9.11Q204.20 9.50 203.85 10.17L203.85 10.17L203.85 10.17Q203.68 10.51 203.40 10.76L203.40 10.76L203.40 10.76Q203.28 10.87 203.12 10.97L203.12 10.97L203.12 10.97Q203.05 11.02 203.03 11.03L203.03 11.03L203.03 11.03Q202.97 11.07 202.90 11.09L202.90 11.09L202.90 11.09Q203 11.05 202.88 11.10L202.88 11.10L202.88 11.10Q202.88 11.10 202.95 11.09L202.95 11.09L202.95 11.09Q202.90 11.09 202.86 11.09L202.86 11.09L202.86 11.09Q202.85 11.10 202.75 11.09L202.75 11.09L202.75 11.09Q202.71 11.09 202.56 11.05L202.56 11.05L202.56 11.05Q202.20 10.97 201.90 10.64L201.90 10.64L201.90 10.64Q201.68 10.39 201.59 9.93L201.59 9.93L201.59 9.93Q201.49 9.44 201.71 9.28L201.71 9.28L201.71 9.28Q201.91 9.13 201.89 9.06L201.89 9.06L201.89 9.06Q201.87 8.97 201.63 8.96L201.63 8.96L201.63 8.96Q201.01 8.95 200.60 9.24L200.60 9.24L200.60 9.24Q200.21 9.53 200.14 9.86L200.14 9.86L200.14 9.86Q200.05 10.20 200.21 10.62L200.21 10.62L200.21 10.62Q200.48 11.36 201.35 11.61L201.35 11.61L201.35 11.61Q202.24 11.87 203.51 11.37L203.51 11.37L203.51 11.37Q204.52 10.96 205.09 10.24L205.09 10.24L205.09 10.24Q205.47 9.76 205.56 9.24L205.56 9.24L205.56 9.24Q205.66 8.62 205.28 8.23L205.28 8.23L205.28 8.23Q205.01 7.96 204.45 7.75L204.45 7.75L204.45 7.75Q204.30 7.70 203.98 7.59L203.98 7.59L203.98 7.59Q203.69 7.50 203.56 7.44L203.56 7.44L203.56 7.44Q203.03 7.23 202.75 6.97L202.75 6.97L202.75 6.97Q202.45 6.69 202.34 5.96L202.34 5.96L202.34 5.96Q202.15 4.53 203.10 2.97L203.10 2.97L203.10 2.97Q203.51 2.29 204.02 1.95L204.02 1.95L204.02 1.95Q204.07 1.91 204.16 1.86L204.16 1.86L204.16 1.86Q204.16 1.86 204.21 1.84L204.21 1.84L204.21 1.84Q204.20 1.84 204.24 1.83L204.24 1.83L204.24 1.83Q204.21 1.84 204.25 1.83L204.25 1.83L204.25 1.83Q204.18 1.85 204.10 1.85L204.10 1.85L204.10 1.85Q204.12 1.85 204.11 1.85L204.11 1.85L204.13 1.85L204.13 1.85Q204.18 1.86 204.26 1.89L204.26 1.89L204.26 1.89Q204.28 1.89 204.37 1.96L204.37 1.96L204.37 1.96Q204.44 2.01 204.48 2.06L204.48 2.06L204.48 2.06Q204.60 2.20 204.67 2.45L204.67 2.45L204.67 2.45Q204.78 2.84 204.72 3.49L204.72 3.49L204.72 3.49Q204.60 4.81 204.03 5.76L204.03 5.76L204.03 5.76Q203.94 5.90 204.24 5.91L204.24 5.91L204.24 5.91Q204.44 5.92 204.61 5.89L204.61 5.89L204.61 5.89Q205.30 5.76 205.47 5.50L205.47 5.50Z"></path></g>
                        </svg>
                </NavbarBrand>
                <NavbarToggler onClick={() => setCollapsed(!collapsed)} />
                <Collapse isOpen={collapsed} navbar>
                    <Nav className="mr-auto">

                    </Nav>
                    <NavbarText>
                        <Button color="primary" onClick={async() => {
                            try {
                                const folderHandle = await window.showDirectoryPicker()
                                // const entries = await folderHandle.values()
                                const films = await readMoviesonDisk(folderHandle)
                                if (films.length > 0) {
                                    setMovies(films)
                                    history.push("/list")
                                }
                            } catch (error) {
                                alert("Alert from reading files:  " + error)
                            }
                        }}>Select Folder</Button>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </header >
    )
}

export default Header