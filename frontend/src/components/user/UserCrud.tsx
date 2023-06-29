import React, { Component } from 'react'
import Main from "../template/Main"

const headerProps = {
    icon: 'user',
    title: 'Usuários',
    subtitle: 'Crud de usuários'
}

function UserCrud() {
  return (
    <Main {...headerProps}>
        Cadastro de Usuários
    </Main>
  )
}

export default UserCrud