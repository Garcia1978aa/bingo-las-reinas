"use client"

import { useState, useRef, useEffect } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

type ChatbotQuestion = {
  id: string
  question: string
  answer: string
  link?: {
    text: string
    url: string
  }
}

const chatbotQuestions: ChatbotQuestion[] = [
  {
    id: "question1",
    question: "¿Cuándo saldrán las entradas en preventa? Necesito ir pensando en el outfit.",
    answer: "No seas impaciente, cariño. Además, por mucha antelación que te diera, tu outfit nunca eclipsaría al mío.",
  },
  {
    id: "question2",
    question: "Glori, cariño ¿me pasas el link de compra para las entradas o tengo que ponerme dramática?",
    answer:
      "¿Entradas? Claro, cielo. Pero antes dime: ¿vas a venir vestida para ganar o para arrasar? (y solo hay una respuesta correcta).",
    link: {
      text: "OBTENER ENTRADAS",
      url: "https://docs.google.com/forms/d/1wWSVk3xCa9KFqSfQ9P39lTqlmTHB5-cT-50HzKej4w0/edit",
    },
  },
  {
    id: "question3",
    question: "¿A qué hora perderé mi dignidad... digo, se abre el local?",
    answer: "El show es de 18:00 a 03:30, pero las amistades y los recuerdos son para siempre.",
  },
  {
    id: "question4",
    question: "¿Van a dejarme entrar si llevo menos de tres kilos de brillo?",
    answer:
      "Si no tienes que girarte de lado para pasar por la puerta, es que no vas lo suficientemente extra. ¡Plumas, brillo y exceso son bienvenidos! No me hagas decir obligatorios...",
  },
  {
    id: "question5",
    question: "¿Qué premios puedo ganar además de miradas de envidia?",
    answer: "Desde botellas de cava hasta sesiones de fotos conmigo (el verdadero premio, obvio).",
  },
]

export function GloriChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedQuestion, setSelectedQuestion] = useState<ChatbotQuestion | null>(null)
  const [isTyping, setIsTyping] = useState(false)
  const [typedAnswer, setTypedAnswer] = useState("")
  const chatbotRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  // Efecto para manejar clics fuera del chatbot para cerrarlo
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatbotRef.current && !chatbotRef.current.contains(event.target as Node)) {
        if (isOpen) {
          handleClose()
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  // Efecto para simular el tipeo de la respuesta
  useEffect(() => {
    if (selectedQuestion && isTyping) {
      let i = 0
      const answer = selectedQuestion.answer
      const typingInterval = setInterval(() => {
        if (i <= answer.length) {
          setTypedAnswer(answer.substring(0, i))
          i++
        } else {
          clearInterval(typingInterval)
          setIsTyping(false)
        }
      }, 30) // Velocidad de tipeo

      return () => {
        clearInterval(typingInterval)
      }
    }
  }, [selectedQuestion, isTyping])

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
    setSelectedQuestion(null)
    setTypedAnswer("")
  }

  const handleQuestionClick = (question: ChatbotQuestion) => {
    setSelectedQuestion(question)
    setIsTyping(true)
    setTypedAnswer("")
  }

  const handleBackClick = () => {
    setSelectedQuestion(null)
    setTypedAnswer("")
  }

  // Tamaños adaptados según el dispositivo
  const iconSize = isMobile ? "w-24 h-24" : "w-32 h-32"
  const imageSize = isMobile ? "w-20 h-20" : "w-28 h-28"
  const chatbotPosition = isMobile ? "bottom-4 right-4" : "bottom-6 right-6"
  const chatbotWidth = isMobile ? "w-72" : "w-80 md:w-96"

  return (
    <div ref={chatbotRef} className={`fixed ${chatbotPosition} z-50`}>
      {/* Chatbot Icon */}
      {!isOpen && (
        <div
          className={`${iconSize} rounded-full bg-gradient-to-r from-[#ff00aa] to-[#d4af37] flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse`}
          onClick={handleOpen}
        >
          <img src="/glori.png" alt="Glori Chatbot" className={`${imageSize} rounded-full object-cover`} />
        </div>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div
          className={`bg-gradient-to-br from-[#1a0033] via-[#330033] to-[#330022] backdrop-blur-md rounded-xl shadow-[0_0_20px_rgba(255,0,170,0.5)] p-4 ${chatbotWidth} max-h-[500px] flex flex-col border border-[#ff00aa]/50`}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-4 border-b border-[#ff00aa]/30 pb-2">
            <div className="flex items-center">
              <img src="/glori.png" alt="Glori Chatbot" className="w-10 h-10 rounded-full object-cover mr-2" />
              <h2 className="text-lg font-bold text-[#ff00aa]">Glori</h2>
            </div>
            <button
              onClick={handleClose}
              className="text-white hover:text-[#ff00aa] transition-colors"
              aria-label="Cerrar chatbot"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-[#ff00aa] scrollbar-track-black/30 pr-1">
            {!selectedQuestion ? (
              // Question List
              <div className="space-y-3">
                <p className="text-white/80 italic mb-4">¿Qué quieres saber, cariño?</p>
                {chatbotQuestions.map((question) => (
                  <div
                    key={question.id}
                    className="cursor-pointer p-3 rounded-md bg-gradient-to-r from-[#ff00aa]/20 to-[#d4af37]/20 hover:from-[#ff00aa]/30 hover:to-[#d4af37]/30 transition-colors duration-200 border border-[#ff00aa]/30 hover:border-[#ff00aa]/70"
                    onClick={() => handleQuestionClick(question)}
                  >
                    <p className="text-white text-sm">{question.question}</p>
                  </div>
                ))}
              </div>
            ) : (
              // Answer View
              <div className="space-y-4">
                <button
                  onClick={handleBackClick}
                  className="text-[#ff00aa] hover:text-[#d4af37] transition-colors flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Volver
                </button>

                <div className="bg-gradient-to-r from-[#ff00aa]/30 to-[#d4af37]/30 p-3 rounded-md border border-[#ff00aa]/40">
                  <p className="text-white text-sm">{selectedQuestion.question}</p>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-[#ff00aa] flex-shrink-0 mr-2 flex items-center justify-center text-white font-bold">
                    G
                  </div>
                  <div className="bg-gradient-to-r from-[#d4af37]/30 to-[#ff00aa]/30 p-3 rounded-md border border-[#ff00aa]/40 flex-grow">
                    {isTyping ? (
                      <p className="text-white text-sm">
                        {typedAnswer}
                        <span className="animate-pulse">|</span>
                      </p>
                    ) : (
                      <>
                        <p className="text-white text-sm mb-2">{selectedQuestion.answer}</p>
                        {selectedQuestion.link && (
                          <a
                            href={selectedQuestion.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#ff00aa] hover:bg-[#d4af37] text-black font-bold py-2 px-4 rounded-full text-xs mt-2 transition-colors"
                          >
                            {selectedQuestion.link.text}
                          </a>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-4 text-center text-[#ff00aa]/60 text-xs border-t border-[#ff00aa]/30 pt-2">
            BINGO Las Reinas del Cartón
          </div>
        </div>
      )}
    </div>
  )
}
