import React, { useState } from 'react'
import Button from '../../components/button'
import Input from '../../components/input'

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (value: string) => {
    setEmail(value)
    console.log(email)
  }

  const handlePasswordChange = (value: string) => {
    setPassword(value)
    console.log(password)
  }

  return (
    <div>
      <form>
        <Input
          labelProp="E-mail"
          valueProp={email}
          typeProp="email"
          placeholder="Digite seu e-mail"
          onChange={handleEmailChange}
        ></Input>

        <Input
          labelProp="Senha"
          valueProp={password}
          typeProp="password"
          placeholder="Digite sua senha"
          onChange={handlePasswordChange}
        ></Input>
        <Button></Button>
      </form>
    </div>
  )
}

export default Login
