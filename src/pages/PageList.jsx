import Airtable from 'airtable';
import { useEffect, useState } from 'react';

export const PageList = () => {
  const base = new Airtable({ apiKey: 'key83wTk6Qka7Kibs' }).base(
    'app6wyVEK4ZQbbAzm'
  );

  const dataSistema = new Date();
  const [dateInput, setDateInput] = useState();
  const [tb, setTb] = useState([]);

  useEffect(() => {
    base('Produtos')
      .select({ view: 'Grid view' })
      .eachPage((records, fetchNextPage) => {
        setTb(records);
        fetchNextPage();
      });
  });

  const formatData = data => {
    let dataFormatada = new Intl.DateTimeFormat('pt-BR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      weekday: 'short'
    }).format(data);

    return dataFormatada;
  };

  const dataDoInput = dataInput => {
    let format = new Intl.DateTimeFormat('pt-br').format(dataInput);
    return format;
  };
  return (
    <>
      <span>
        <button>Cadastrar</button>
      </span>
      <div>
        <table>
          <tbody>
            {tb.map(dados => (
              <tr key={dados.id}>
                <td>{formatData(dados.fields.data_criacao)}</td>
                <td>{dados.fields.nome}</td>
                <td>
                  <span>X</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <p>Data com +15 dias : {dataDoInput(dateInput)}</p>

        <button
          onClick={() =>
            setDateInput(dataSistema.setDate(dataSistema.getDate() + 15))
          }
        >
          Add + 15
        </button>
      </div>
    </>
  );
};
