import React from 'react'
import './Form.css'

function Form() {
  return (
    <>
    
  <div className="background">
  <div className="container">
    <div className="screen">
      <div className="screen-header">
      </div>
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>Entre em</span>
            <span>Contato</span>
          </div>
        </div>
        <div className="screen-body-item">
          <form action="https://formsubmit.co/pedrohenriquebgs@gmail.com" method="POST">
          <input type="hidden" name="_next" value="http://localhost:3000/confirmado"/>
          <input type="hidden" name="_captcha" value="false"/>
          <input type="hidden" name="_subject" value="Nova mensagem do site!"/>
          <input type="hidden" name="_template" value="table"/>
          <div className="app-form">
            <div className="app-form-group">
              <input className="app-form-control" name="Nome" placeholder="Seu nome"required/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" name="E-mail" type="email" placeholder="Seu email" required/>
            </div>
            <div className="app-form-group message">
              <input className="app-form-control" rows='50' type="text" name="Mensagem" placeholder="Sua mensagem" required/>
            </div>
            <div className="app-form-group buttons">
              <button type="submit" className="app-form-button">Enviar</button>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
    
  </div>
</div>


    </>
  )
}

export default Form