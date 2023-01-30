import styled from "@emotion/styled";
import { useState } from "react";

const Label = styled.label`
  color: var(--bs-blanco-claro);
  font-weight: 600;
  display: block;
  font-size: 20px;
  margin-bottom: 5px;
`;

const Select = styled.select`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 15px;
  border: none;
  padding: 10px;
  border-radius: 5px;
  color: var(--bs-gris);
  font-weight: 600;
  outline: none;
`;

const Option = styled.option`
  color: var(--bs-gris);
`;

const useSelectMonedas = (label, opciones) => {
  const [state, setState] = useState("");
  const SelectMonedas = (_) => (
    <>
      <Label>{label}</Label>
      <Select value={state} onChange={(e) => setState(e.target.value)}>
        <Option value="">Selecione</Option>
        {opciones.map((option) => (
          <Option
            value={option.id}
            key={option.id}
            >
            {option.nombre}
          </Option>
        ))}
      </Select>
    </>
  );
  return [SelectMonedas, state];
};
export default useSelectMonedas;
