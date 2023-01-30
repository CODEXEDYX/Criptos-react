import { useEffect, useState } from "react"
import styled from "@emotion/styled"
import ImagenCripto from "../src/img/criptos.png"
import Fomrulario from "./components/Formulario"
import Resultado from "./components/Resultado"
import Spinner from "./components/Spinner"

const Contenedor = styled.div`
	max-width: 900px;
	margin-top: 100px;
	margin-bottom: 100px;
	margin-left: auto;
	margin-right: auto;
	width: 90%;

	@media (min-width: 992px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 2rem;
	}
`

const Imagen = styled.img`
	max-width: 400px;
	width: 90%;
	margin-top: 100px;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 0;
	display: block;
`

const Heading = styled.h1`
	color: var(--bs-blanco-claro);
	text-align: center;
	margin-top: 80px;
	margin-bottom: 50px;
	font-size: 34px;
	&::after {
		display: block;
		content: "";
		width: 100px;
		height: 6px;
		margin-top: 10px;
		margin-bottom: 0;
		margin-left: auto;
		margin-right: auto;
		background: var(--bs-azul);
	}
`

const Strong = styled.strong`
	font-weight: 900;
`

const App = (_) => {
	const [monedas, setMonedas] = useState({})
	const [resultado, setResultado] = useState({})
	const [cargando , setCargando] = useState(false)

	useEffect(() => {
		if (Object.keys(monedas).length > 0) {
			const monedaApi = async () => {
				setCargando(true)
				setResultado({})
				const { moneda, criptomoneda } = monedas
				const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

				const respuesta = await fetch(url)
				const respuestas = await respuesta.json()

					setResultado(respuestas.DISPLAY[criptomoneda][moneda])

					setCargando(false)
			}
			monedaApi()
		}
	}, [monedas])
	return (
		<Contenedor>
			<Imagen
				loading="eager"
				alt="imagenes criptomonedas"
				src={ImagenCripto}
			/>
			<div>
				<Heading>
					<Strong>Cotiza Criptomonedas al instante</Strong>
				</Heading>
				<Fomrulario setMonedas={setMonedas} />
				{cargando && 
				<Spinner/>
				}
				{resultado.PRICE && <Resultado resultado={resultado} />}
			</div>
		</Contenedor>
	)
}
export default App
