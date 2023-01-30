import styled from "@emotion/styled"
import useSelectMonedas from "../hooks/useSelectMonedas"
import { useEffect, useState } from "react"
import { monedas } from "../data/monedas"
import Error from "./Error"
const InputSubmit = styled.input`
	background-color: var(--bs-azul);
	width: 100%;
	border: none;
	padding: 10px;
	text-transform: uppercase;
	border-radius: 5px;
	font-weight: 700;
	color: var(--bs-blanco-claro);
	transition: background-color 0.3s ease;
	&:hover {
		background-color:var(--bs-rojo);
		cursor: pointer;
	}
`

const Fomrulario = ({ setMonedas }) => {
	useEffect(() => {
		const consultandoApi = async () => {
			const urlApi =
				"https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
			const respuesta = await fetch(urlApi)
			const resultado = await respuesta.json()

			const arrayCriptios = resultado.Data.map((criptos) => {
				const valor = {
					id: criptos.CoinInfo.Name,
					nombre: criptos.CoinInfo.FullName,
				}
				return valor
			})

			setCriptos(arrayCriptios)
		}
		consultandoApi()
	}, [])

	const [criptos, setCriptos] = useState([])
	const [error, setError] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()
		if ([moneda, criptomoneda].includes("")) {
			setError(true)
			setTimeout(() => {
				setError("")
			}, 3000)
			return
		}
		setMonedas({
			moneda,
			criptomoneda,
		})
	}

	const [SelectMonedas, moneda] = useSelectMonedas("Nombre de la moneda", monedas)
	const [SelectCriptomonedas, criptomoneda] = useSelectMonedas(
		"Eligue tu Criptomoneda",
		criptos,
	)
	return (
		<>
			<form onSubmit={handleSubmit}>
				<SelectMonedas />
				<SelectCriptomonedas />
				<InputSubmit type="submit" value="Cotizar" />
			</form>
			{error && <Error validacion="Todos los campos son obligatorios" />}
		</>
	)
}
export default Fomrulario
