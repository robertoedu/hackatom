import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido!').required('E-mail obrigatório!'),
  cpf: yup
    .string()
    .min(11, 'O CPF precisa ter no mínimo 11 caracteres!')
    .max(11, "O CPF tem No Maximo 11 caracteres!")
    .required('CPF é obrigatório!'),
});
