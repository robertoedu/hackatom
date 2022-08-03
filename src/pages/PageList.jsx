import Airtable from 'airtable';
import { useEffect, useState } from 'react';

export const PageList = () => {
  const base = new Airtable({ apiKey: 'key83wTk6Qka7Kibs' }).base(
    'app6wyVEK4ZQbbAzm'
  );

  const [tb, setTb] = useState([]);

  useEffect(() => {
    base('Produtos')
      .select({ view: 'Grid view' })
      .eachPage((records, fetchNextPage) => {
        setTb(records);
        fetchNextPage();
      });
  });
  return (
    <>
      <span>
        <button>Cadastrar</button>
      </span>
      <div>
        <table>
          {tb.map(dados => (
            <td key={dados.id}>{dados.fields.nome}</td>
          ))}
        </table>
      </div>
    </>
  );
};
