import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido!').required('E-mail obrigatório!'),

  cpf: yup
    .string()
    .min(14, 'O CPF precisa ter no mínimo 14 caracteres!')
    .required('CPF é obrigatório!'),
});
