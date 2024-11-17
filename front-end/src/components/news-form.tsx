"use client";
import { useState } from "react";

export default function NewsForm() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [nameIsntValid, setNameIsntValid] = useState(false);
  const [emailIsntValid, setEmailIsntValid] = useState(false);
  const [emailAndNameValid, setEmailAndNameValid] = useState(false);

  const handleSubmit = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!user) {
      setNameIsntValid(true);
      setEmailIsntValid(false);
      setEmailExists(false);
      return;
    } else {
      setNameIsntValid(false);
    }
  
    if (!emailRegex.test(email) || !email) {
      setEmailIsntValid(true);
      setNameIsntValid(false);
      setEmailExists(false);
      return;
    } else {
      setEmailIsntValid(false);
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: user,
          email: email,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        if (data.error === "Email já cadastrado") {
          setEmailExists(true);
          setEmailIsntValid(false);
          setNameIsntValid(false);
        } else {
          setEmailExists(false);
        }
      } else {
        setEmailAndNameValid(true)
          setEmailExists(false);
          setEmailIsntValid(false);
          setNameIsntValid(false);
      }
    } catch (error) {
      console.error("Erro ao cadastrar o usuário:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='container' style={{ justifyContent: "center", alignItems: "center" }}>
      <div className='container large-padding-y small-border-radius form-container w75' style={{ justifyContent: "center", backgroundColor: 'var(--card)' }}>
        <div className='container' style={{ width: "90%", gap: "var(--extra-small-spacing )" }}>
          <div className='container'>
            <div className='container' style={{ gap: "var(--mini-spacing )", alignContent: `start` }}>
              <div className='container discover-text'>
                <h4 style={{ color: 'var(--white)' }}>Pronto para levar seu negócio ao próximo nível?</h4>
              </div>
            </div>
          </div>
          <div className='container' style={{ gap: "var(--mini-spacing )", alignContent: `start` }}>
            <div className='container discover-text'>
              <p style={{ color: 'var(--white)' }}>Não fique para trás na era digital. Deixe-nos digitalizar o seu negócio com inovação e estilo. Preencha o formulário abaixo e fique por dentro de tudo que a Kresaut vem fazendo!</p>
            </div>
          </div>
          <div className='container discover-text' style={{ gap: "var(--mini-spacing )" }}>
            <label htmlFor='user'>
              <p style={{ color: 'var(--white)' }}>Insira seu nome</p>
            </label>
            <input type='text' name='user' placeholder='Nome' value={user} onChange={(e) => setUser(e.target.value)} />
            <div className="container" style={{ display: nameIsntValid ? 'flex' : 'none' }}>
              <p className="mini" style={{ color: '#b50b0b' }}>Insira um nome válido</p>
            </div>
          </div>
          <div className='container discover-text' style={{ gap: "var(--mini-spacing )" }}>
            <label htmlFor='email'>
              <p style={{ color: 'var(--white)' }}>Insira seu email</p>
            </label>
            <input type='text' name='email' placeholder='Endereço de email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <div className="container" style={{ display: emailIsntValid ? 'flex' : 'none' }}>
              <p className="mini" style={{ color: '#b50b0b' }}>Insira um email válido</p>
            </div>
            <div className="container" style={{ display: emailExists ? 'flex' : 'none' }}>
              <p className="mini" style={{ color: '#b50b0b' }}>O email já foi cadastrado</p>
            </div>
          </div>
          <div className='container discover-text'>
            <button onClick={handleSubmit} disabled={isSubmitting} style={{ width: "100%" }}>
              {isSubmitting ? "Cadastrando..." : "Cadastrar"}
            </button>
          </div>
          <div className="container" style={{ display: emailAndNameValid ? 'flex' : 'none' }}>
              <p className="mini" style={{ color: '#16b50b' }}>Dados cadastrados com sucesso!</p>
            </div>
        </div>
      </div>
    </div>
  );
}
