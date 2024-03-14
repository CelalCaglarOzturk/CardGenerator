import { FormEvent, useState } from "react";
import { getCookie } from "./shared.ts";
import axios from "axios";


export default function Register() {
  const [register, setRegister] = useState(true);
  const [login, setLogin] = useState(false);
  const [id, setId] = useState(""); //user id
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerHandle(e: FormEvent) {
    e.preventDefault();
    try {
      const res = await axios.post(
        import.meta.env.VITE_SERVER_URL + "/api/v1/register",
        {
          id,
          password,
          email,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "OPTIONS, GET, POST",
          },
        }
      );
      if (res.data.token !== null) {
        document.cookie = "user-token=" + res.data.token;
        document.cookie = "user-id=" + id;
      }

      if (getCookie("user-token") != "") {
        window.location.replace("/");
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function loginHandle(e: FormEvent) {
    e.preventDefault();
    try {
      const res = await axios.post(
        import.meta.env.VITE_SERVER_URL + "/api/v1/login",
        {
          id,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (res.data.token !== null) {
        document.cookie = "user-token=" + res.data.token;
        document.cookie = "user-id=" + id;
      }

      if (getCookie("user-token") != "") {
        window.location.replace("/");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {register && (
        <form id="register-form" onSubmit={registerHandle}>
          <ul>
            <li>
              <label id="register-label">
                Okul Numarası:<a style={{ color: "red" }}>*</a>
              </label>
              <br />
              <input
                type="text"
                className="register-input"
                value={id}
                placeholder="okul numarası"
                onChange={(e) => setId(e.target.value)}
                minLength={12}
                maxLength={12}
              />
            </li>
            <li>
              <label id="register-label">
                Şifre:<a style={{ color: "red" }}>*</a>
              </label>
              <br />
              <input
                type="password"
                className="register-input"
                value={password}
                placeholder="şifre"
                onChange={(e) => setPassword(e.target.value)}
                minLength={8}
                maxLength={72}
              />
            </li>
            <li>
              <label id="register-label">ePosta:</label>
              <br />
              <input
                type="text"
                className="register-input"
                value={email}
                placeholder="e-posta (opsiyonel)"
                onChange={(e) => setEmail(e.target.value)}
                maxLength={60}
              />
            </li>
            <li id="register-btn-container">
              <button className="generic-btn" type="submit" id="register-btn">
                Kayıt Ol
              </button>
              <button
                className="generic-btn"
                id="register-login"
                onClick={() => {
                  setRegister(false);
                  setLogin(true);
                }}
              >
                Hesabım Var
              </button>
            </li>
          </ul>
        </form>
      )}
      {login && (
        <form id="register-form" onSubmit={loginHandle}>
          <ul>
            <li>
              <label id="register-label">
                Okul Numarası:<a style={{ color: "red" }}>*</a>
              </label>
              <br />
              <input
                type="text"
                className="register-input"
                value={id}
                placeholder="okul numarası"
                onChange={(e) => setId(e.target.value)}
                minLength={12}
                maxLength={12}
              />
            </li>
            <li>
              <label id="register-label">
                Şifre:<a style={{ color: "red" }}>*</a>
              </label>
              <br />
              <input
                type="password"
                className="register-input"
                value={password}
                placeholder="şifre"
                onChange={(e) => setPassword(e.target.value)}
                minLength={8}
                maxLength={72}
              />
            </li>
            <li id="register-btn-container">
              <button className="generic-btn" type="submit" id="register-btn">
                Giriş Yap
              </button>
              <button
                className="generic-btn"
                id="register-login"
                onClick={() => {
                  setRegister(true);
                  setLogin(false);
                }}
              >
                Hesabım Yok
              </button>
            </li>
          </ul>
        </form>
      )}
    </>
  );
}
