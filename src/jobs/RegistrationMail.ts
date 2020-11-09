import Mail from "../services/Mail";

interface Data {
  data: {
    user: {
      name: string;
      email: string;
      password: string;
    };
  };
}

export default {
  key: "RegistrationMail",
  async handle({ data }: Data) {
    const { user } = data;

    await Mail.sendMail({
      from: "Queue Test <queue@queuetest.com.br>",
      to: `${user.name} <${user.email}>`,
      subject: "Cadastro de usuário",
      html: `Olá, ${user.name}, bem-vindo ao sistema de filas :)`,
    });
  },
};
