import styled from "@emotion/styled"

const Texto_Error = styled.p`
	color: var(--bs-blanco-claro);
	text-align: center;
	font-weight: 600;
`

const Caja_Error = styled.div`
	position: fixed;
	top: 20px;
	right: 20px;
	background-color: rgba(227, 73, 73, 0.702);
	border-left: 3px solid var(--bs-rojo);
	padding: 10px;
	border-radius: 5px;
`

const Error = ({ validacion }) => {
	return (
		<Caja_Error role="alert" className="caja_error">
			<Texto_Error>{validacion}</Texto_Error>
		</Caja_Error>
	)
}
export default Error
