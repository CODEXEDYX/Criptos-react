import styled from "@emotion/styled"

const Caja_Resulatado = styled.div`
	margin-top: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Texto_Dinero = styled.p`
	font-weight: 500;
	color: var(--bs-blanco-claro);
	font-size: 20px;
	span {
		font-weight: 600;
	}
`

const Texto_Resulatdo = styled.p`
	line-height: 30px;
	font-weight: 500;
	color: var(--bs-blanco-claro);
	span {
		font-weight: 600;
	}
`

const Imagen_Resultado = styled.img`
	width: 100px;
`

const Resultado = ({ resultado }) => {
	const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
		resultado
	return (
		<Caja_Resulatado>
			<Imagen_Resultado
				loading="lazy"
				src={`https://cryptocompare.com/${IMAGEURL}`}
				alt="imagen cripto"
			/>
			<div>
				<Texto_Dinero>
					El <strong>Precio</strong> es de:<span>{PRICE}</span>
				</Texto_Dinero>
				<Texto_Resulatdo>
					<strong>Precio</strong> más alto del día:<span>{HIGHDAY}</span>
				</Texto_Resulatdo>
				<Texto_Resulatdo>
					<strong>Precio</strong> más bajo del día:<span>{LOWDAY}</span>
				</Texto_Resulatdo>
				<Texto_Resulatdo>
					Variación últimas 24 horas:<span>{CHANGEPCT24HOUR}</span>
				</Texto_Resulatdo>
				<Texto_Resulatdo>
					Última Actualización:<span>{LASTUPDATE}</span>
				</Texto_Resulatdo>
			</div>
		</Caja_Resulatado>
	)
}
export default Resultado