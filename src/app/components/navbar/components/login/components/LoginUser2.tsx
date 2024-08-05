"use client";

import { useState } from "react";
import { User } from "../../../../../types";
import { loginService } from "../../../../../services/loginService";

export default function LoginUser() {
  const [credentials, setCredentials] = useState<User>({
    email: "",
    password: "",
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await loginService(credentials);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Correo" onChange={handleChange} />
        <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} />
        <button>Sing In</button>
      </form>
    </div>
  );
}
