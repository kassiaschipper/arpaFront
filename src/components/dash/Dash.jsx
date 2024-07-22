import styled from "styled-components";
import { useState } from "react";
import { postCadastro } from "../../service/arpaService";

export default function Dash() {
  const [disabledInput, setDisabledInput] = useState(false);
  const [nome, setNome] = useState();
  const [sexo, setSexo] = useState();
  const [porte, setPorte] = useState();
  const [faixaEtaria, setFaixaEtaria] = useState();
  const [chip, setChip] = useState();
  const [especie, setEspecie] = useState();

  const body = [
    nome,
    sexo,
    porte,
    faixaEtaria,
    chip,
    especie
  ];

  function sendForm(e) {
    e.preventDefault();
    setDisabledInput(true);

    postCadastro(body).then
  }

  function resetForm() {
    setNome("");
    setSexo("");
    setPorte("");
    setFaixaEtaria("");
    setChip("");
    setEspecie("");
    setDisabledInput(false);
  }
  return (
    <>
      <TitleWrapper>Cadastro de Animais</TitleWrapper>
      <InputWrapper>
        <form onSubmit={sendForm}>
          <input
            type="text"
            name="nome"
            placeholder="Nome do animal"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            disabled={disabledInput}
            required
          />
          <select
            name="sexo"
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}
            disabled={disabledInput}
            required
          >
            <option value="" disabled>
              Sexo do animal
            </option>
            <option value="macho">Macho</option>
            <option value="femea">Fêmea</option>
          </select>
          <input
            type="text"
            name="porte"
            placeholder="Porte do animal"
            value={porte}
            onChange={(e) => setPorte(e.target.value)}
            disabled={disabledInput}
            required
          />
          <select
            name="faixaEtaria"
            value={faixaEtaria}
            onChange={(e) => setFaixaEtaria(e.target.value)}
            disabled={disabledInput}
            required
          >
            <option value="" disabled>
              Faixa Etária do animal
            </option>
            <option value="RN">RN</option>
            <option value="Jovem">Jovem</option>
            <option value="Adulto">Adulto</option>
            <option value="Idoso">Idoso</option>
          </select>
          <select
            name="chip"
            value={chip}
            onChange={(e) => setChip(e.target.value)}
            disabled={disabledInput}
            required
          >
            <option value="" disabled>
              Tem Chip de Identificação
            </option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
          <select
            name="especie"
            value={especie}
            onChange={(e) => setEspecie(e.target.value)}
            disabled={disabledInput}
            required
          >
            <option value="" disabled>
              Qual espécie do animal
            </option>
            <option value="Cão">Cão</option>
            <option value="Gato">Gato</option>
          </select>
          <ButtonWrapper>
            <button
              type="submit"
              disabled={disabledInput}
              onClick={() => resetForm()}
            >
              Cadastrar
            </button>
          </ButtonWrapper>
        </form>
      </InputWrapper>
    </>
  );
}

const TitleWrapper = styled.div`
  width: auto;
  height: 10%;
  color: black;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 10%;
  left: 40%;
  font-size: 28px;
  font-weight: 600;
`;

const InputWrapper = styled.div`
  width: 50%;
  height: auto;
  margin: 140px auto;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-between;

  input {
    margin: 1rem 0.5rem;
  }
`;
const ButtonWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;

  button {
    width: 7rem;
    height: 2rem;
    border-radius: 10px;
    border: none;
    color: white;
    background-color: #007cb8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 1rem;
    cursor: pointer;
  }
`;
