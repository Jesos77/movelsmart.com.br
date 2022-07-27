import React from "react";
import { Button } from "../../../components/Button";
import "./Faixa.css";
function Faixa() {
  return (
    <div className="faixa-containery">
      <section className="social-mediay">
        <div className="social-media-wrapy">
          <div className="footer-logoy">
            <div className="social-logoy">Restou alguma dúvida?</div>
            <div className="social-second">podemos te ajudar</div>
          </div>
          <div className='social-iconsy' css={'display: none'}>
            <Button to="/Contato" primary="true" big >Entre em contato</Button>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faixa;
