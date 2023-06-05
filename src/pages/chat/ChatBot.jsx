import React, { useEffect, useRef, useState } from "react";
import { SiChatbot } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
import Modal from "react-modal";


const ANSWERS = {
  intro: (
    <p>
      Soy Alexander Salomon (El flaco para amigos y enemigos) tengo 38 años vivo
      en san Martin, Buenos Aires, Argentina, soy front-end developer, estudie
      Javascript y el stack de React, tengo un nivel B2 de Ingles hablo y
      entiendo fluido el Portugues , no tengo experiencia laboral como
      programador todavia estoy en la busqueda de mi primer experiencia laboral,
    </p>
  ),
  sobremi: (
    <p>
      Te hago un resumen: aprendi a programar tomando cursos de Desarrollo Web,
      Javascript y React js en CoderHouse y profundizo cada dia haciendo
      proyectos por mi cuenta "Este bot lo aprendi a hacer con un video de
      Youtube en el canal de Goncy
      <a className="underline"
        href="https://www.youtube.com/watch?v=7x5agT2MtuE&t=414s"
        rel="noopener noreferrer"
        target="_blank"
      >
        "link del canal"
      </a>
      , Estudie programacion porque me gusta mucho todo lo que tiene que ver con
      el mundo IT, y para mantener la cabeza y el cuerpo en forma voy 3 veces acd portafolio
      la semana al gimnasio.
    </p>
  ),
  comunes: (
    <p>
      Un poco más que te puedo contar sobre mí: Soy hincha de Velez Sarsfield,
      mi color favorito es el azul, me gustan las mascotas y tengo dos gatos una
      gata y un gato, soy muy malo contando chistes , si me preguntas que fue
      primero no lo sé es como saber cuántos pares son 3 botas
    </p>
  ),
  contacto: (
    <p>
      Como dije, estoy en búsqueda de mi primera experiencia laboral. Si quieres
      contactarme, puedes hacerlo a través de mi Linkedin :{" "}
      <a className="underline"
        href="https://www.linkedin.com/in/alexander-salomon-98a814183/"
        rel="noopener noreferrer"
        target="_blank"
      >
        "Link a mi perfil de Linkedin"
      </a>
      También puedes ver mi perfil de Github{" "}
      <a className="underline"
        href="https://github.com/SaloAlex"
        rel="noopener noreferrer"
        target="_blank"
      >
        Link a mi perfil de Github
      </a>
    </p>
  ),
};

const EXAMPLES = [
  { text: "Quien sos?", label: "intro" },
  { text: "Tengo una oferta de trabajo para vos?", label: "contacto" },
  { text: "Por donde te puedo contactar", label: "contacto" },
  { text: "Tengo una duda", label: "otras" },
  { text: "Necesito solucionar algo?", label: "otras" },
  { text: "Estas buscando un cambio laboral?", label: "contacto" },
  { text: "Donde trabajas?", label: "intro" },
  { text: "Con que tecnologias trabajas?", label: "intro" },
  { text: "Con que tecnologias tenes experiencia?", label: "intro" },
  { text: "Estas escuchando propuestas?", label: "contacto" },
  { text: "Sabes ingles", label: "intro" },
  { text: "Cuantos años de experiencia tenes?", label: "intro" },
  { text: "Te interesa cambiar de compañia?", label: "contacto" },
  { text: "Como es tu Linkedin?", label: "contacto" },
  { text: "Como es tu Github?", label: "contacto" },
  { text: "Hola", label: "intro" },
  { text: "Como hiciste este chat", label: "otras" },
  { text: "Como aprendiste a programar?", label: "otras" },
  { text: "Porque estudiaste programacion?", label: "otras" },
  { text: "Te puedo hacer una consulta?", label: "otras" },
  { text: "En que horarios se te encuentra libre?", label: "contacto" },
  { text: "Que te gusta de la programacion?", label: "otras" },
  { text: "Cuales son tus redes?", label: "contacto" },
  { text: "Haces deportes?", label: "otras" },
  { text: "De que club sos hincha?", label: "comunes" },
  { text: "Cual es tu color favorito?", label: "comunes" },
  { text: "Tenes curriculum?", label: "intro" },
  { text: "Que mascotas tenes?", label: "comunes" },
  { text: "Te gustan las mascotas?", label: "comunes" },
  { text: "Que fue primero el huevo o la gallina?", label: "comunes" },
  { text: "Contame un chiste", label: "comunes" },
  { text: "Cual es tu expectativa salarial?", label: "contacto" },
  { text: "Donde estas trabajando?", label: "intro" },
  { text: "Cual es tu empleo actual?", label: "intro" },
];

const API_KEY = "RfsFSramKhAAGGUrtDuYBubhIrhjwAAesfMx2zBs";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const container = useRef(null);
  

  async function handleSubmit(event) {
    event.preventDefault();

    if (loading) return;

    setLoading(true);
    setMessages((messages) =>
      messages.concat({
        id: String(Date.now()),
        type: "user",
        text: question,
      })
    );
    setQuestion("");

    const response = await fetch("https://api.cohere.ai/v1/classify", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "large",
        inputs: [question],
        examples: EXAMPLES,
      }),
    });
    const { classifications } = await response.json();

    setMessages((messages) =>
      messages.concat({
        id: String(Date.now()),
        type: "bot",
        text:
          ANSWERS[classifications[0].prediction] || ANSWERS["sobremi"],
      })
    );
    setLoading(false);
  }

  useEffect(() => {
    container.current?.scrollTo(0, container.current.scrollHeight);
  }, [messages]);

  return (
    <div>
    <button id="chat-icon" onClick={() => setIsActive(!isActive)}>
      <SiChatbot />
    </button>
    <div className={`chat-overlay ${isActive ? "active" : ""}`}>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Modal"
      >
        <div
          className={`flex flex-col gap-4 m-auto max-w-lg border border-gray-400 p-4 rounded-md ${
            isActive ? "active" : ""
          }`}
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={`p-4 max-w-[80%] rounded-3xl text-white ${
                message.type === "bot"
                  ? "bg-slate-500 text-left self-start rounded-bl-none"
                  : "bg-blue-500 text-right self-end rounded-br-none"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <form className="flex items-center" onSubmit={handleSubmit}>
          <input
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="Ask me a question"
            className="rounded rounded-r-none flex-1 border border-gray-400 py-4 px-4"
            type="text"
            name="question"
          />
          <button
            disabled={loading}
            className={`px-4 py-4 bg-blue-500 rounded-lg rounded-l-none ${
              loading ? "bg-blue-300" : "bg-blue-500"
            }`}
            type="submit"
          >
            Send
          </button>
        </form>
      </Modal>
    </div>
  </div>
);
};

export default Chat;