import React, { Component } from 'react'
import Main from "../template/Main"
import Axios from 'axios'

const headerProps = {
    icon: 'user',
    title: 'Usuários',
    subtitle: 'Crud de usuários'
}

const baseUrl = 'http://localhost:3001/users';
const initialState = {
    user: {id: '',name: '', email: ''},
    list: []
};
export default class UserCrud extends React.Component  {
    state = {...initialState};
    clear(){
        this.setState({user: initialState.user});
    }

    save(){
        const user = this.state.user;
        const method = user.id ? 'put' : 'post';
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
        Axios[method](url, user).then(resp => {
            const list = this.getUpdatedList(resp.data);
            this.setState({user: initialState.user, list});
        })
    }


    getUpdatedList(user: any){
        const list: any = this.state.list.filter((u:any) => u.id !== user.id);
        list.unshift(user);
        return list;
    }

    render(){
        return (
            <Main {...headerProps}>
                Cadastro de Usuários
            </Main>
        )
    }
}