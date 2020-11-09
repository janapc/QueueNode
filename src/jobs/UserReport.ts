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
  key: "UserReport",
  options: {
    delay: 5000,
  },
  async handle({ data }: Data) {
    const { user } = data;

    console.log(user);
  },
};
