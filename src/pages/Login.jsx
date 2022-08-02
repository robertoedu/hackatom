import { CampoForm } from '../components/CampoForm';

export const Login = () => {
  return (
    <>
      <section>
        <div>
          <form>
            <CampoForm
              nameEmail="E-mail: "
              nameCPF="CPF: "
              typeEmail="email"
              typeCPF="cpf"
            />
            <input type="button" value="enviar" />
          </form>
        </div>
      </section>
    </>
  );
};
