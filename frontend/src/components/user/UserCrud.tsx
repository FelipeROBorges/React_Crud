import React, { Component } from "react";
import Main from "../template/Main";
import Axios from "axios";
import { list } from "postcss";

const headerProps = {
  icon: "user",
  title: "Usuários",
  subtitle: "Crud de usuários",
};

const baseUrl = "http://localhost:3001/users";
const initialState = {
  user: { id: "", name: "", email: "" },
  list: [],
};
export default class UserCrud extends Component {
  state = { ...initialState };

  componentWillMount(): void {
    Axios(baseUrl).then((resp) => {
      console.log("Antes do respdata");
      console.log(resp.data);
      this.setState({ list: resp.data });
    });
  }

  clear = () => {
    this.setState({ user: initialState.user });
  };

  save = () => {
    const user: any = { ...this.state.user };
    const method = user.id ? "put" : "post";
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
    Axios[method](url, user).then((resp) => {
      const list = this.getUpdatedList(resp.data);
      this.setState({ user: initialState.user, list });
    });
  };

  getUpdatedList(user: any, add = true) {
    const list: any = this.state.list.filter((u: any) => u.id !== user.id);
    if (add) list.unshift(user);
    return list;
  }

  updateField(event: any) {
    const user: any = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user });
  }

  load = (user: any) => {
    this.setState({ user });
  };

  remove = (user: any) => {
    Axios.delete(`${baseUrl}/${user.id}`).then((resp) => {
      const list = this.getUpdatedList(user, false);
      this.setState({ list });
    });
  };

  renderTable() {
    return (
      <div className="mt-4">
        <table className="table-auto">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>{this.renderRows()}</tbody>
        </table>
      </div>
    );
  }

  renderRows = () => {
    return this.state.list.map((user: any) => {
      return (
        <tr key={user.id}>
          <td> {user.id} </td>
          <td> {user.name} </td>
          <td> {user.email} </td>
          <td>
            <button
              className="bg-yellow-500 text-white font-bold py-2 px-4 rounded"
              onClick={() => this.load(user)}
            >
              <i className="fa fa-pencil"></i>
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded inline-flex items-center ml-2"
              onClick={() => this.remove(user)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      );
    });
  };

  renderForm = () => {
    return (
      <div className="form">
        <div className="flex flex-row">
          <div className="flex-grow">
            <div className="form-group">
              <label>Nome</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.user.name}
                onChange={(e) => this.updateField(e)}
                placeholder="Digite o nome."
              />
            </div>
          </div>

          <div className="flex-grow">
            <div className="form-group">
              <label>E-mail</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={this.state.user.email}
                onChange={(e) => this.updateField(e)}
                placeholder="Digite o e-mail."
              />
            </div>
          </div>
          <br />
          <div className="flex flex-row">
            <div className="grid grid-cols-12 flex justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={this.save}
              >
                Salvar
              </button>
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
                onClick={this.clear}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <Main {...headerProps}>
        {this.renderForm()}
        {this.renderTable()}
      </Main>
    );
  }
}
