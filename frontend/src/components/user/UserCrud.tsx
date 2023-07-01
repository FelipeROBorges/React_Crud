import React, { Component } from "react";
import Main from "../template/Main";
import Axios from "axios";

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

  getUpdatedList(user: any) {
    const list: any = this.state.list.filter((u: any) => u.id !== user.id);
    list.unshift(user);
    return list;
  }

  updateField(event: any) {
    const user: any = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user });
  }

  renderForm() {
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
  }

  render() {
    return <Main {...headerProps}>{this.renderForm()}</Main>;
  }
}
