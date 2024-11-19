import React, { useEffect, useRef, useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import S from './style';
import ReactMarkdown from "react-markdown";

const API_KEY = "AIzaSyCNqQOlZWlx5ip5hOxcvxnKWsfr7Q0fKig"; // 실제 API 키를 넣으세요
const genAI = new GoogleGenerativeAI(API_KEY);

const Gemini = () => {

    const [messages, setMessages] = useState([]); // 대화 저장
    const [input, setInput] = useState(""); // 현재 입력 중인 질문
    const [loading, setLoading] = useState(false); // 로딩 상태

    const chatContainerRef = useRef(null);

    // 새 메시지가 추가될 때 스크롤을 맨 아래로 이동
    useEffect(() => {
        if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const generateText = async () => {
        if (!input.trim()) {  
            alert("질문을 입력해주세요.");
            return;  
        }
    
        // 사용자 입력 메시지 추가
        const userMessage = { role: "user", content: input };
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setInput(""); 
        setLoading(true);
    
        try {
          // Prompt 구성: 이전 대화 맥락 포함
          const conversationPrompt = updatedMessages
            .map((msg) => `${msg.role === "user" ? "사용자" : "AI"}: ${msg.content}`)
            .join("\n");
    
          const detailedPrompt = `
            ${conversationPrompt}
            \n\n
            "청년 농업 창업 및 컨설팅 정보를 제공하라. 사용자가 묻는 질문에 따라 특정 주제 하나에 대해 구체적인 답변을 작성하라. 사용자의 이전 대화 내용을 맥락으로 삼아 최적화된 정보를 제공하라. 단 답변은 10문장을 넘기지 않는다.

            질문은 아래 6가지 주제 중 하나에 해당하며, 사용자가 질문한 주제를 기준으로 다음 요구사항을 충족해야 한다:

            창업 지원 정책 및 프로그램:

            사용자가 위치한 지역 및 농업 분야에 맞는 정부 및 지방자치단체의 지원 정책 소개.
            해당 지원 프로그램의 구체적 내용 (지원금, 대출 조건, 세금 혜택 등).
            신청 방법과 조건, 필요 서류 등 실질적인 정보 제공.
            농업 창업 아이디어:

            사용자가 선택한 작물, 농업 방식(스마트팜, 유기농 등)에 적합한 창업 아이디어를 제안.
            초기 투자 비용, 필요한 자원 및 예산을 상세히 설명.
            예상 수익률, 시장 동향 분석, 성장 가능성 등을 포함.
            교육 프로그램:

            농업 창업을 위한 전문 교육 프로그램을 추천.
            창업에 필요한 농업 기술, 경영 지식, 및 비즈니스 운영 노하우를 배울 수 있는 과정 안내.
            지역별로 이용 가능한 교육 센터나 온라인 교육 정보 제공.
            컨설팅 및 추가 자문:

            창업을 지원하는 전문 컨설팅 기관 및 프로그램을 추천.
            농업 경영, 생산 기술, 마케팅 전략 등에 대한 전문적인 조언 제공.
            지역별 상담 센터 및 추가적인 문의처 정보 안내.
            성공 사례 소개:

            사용자의 상황과 비슷한 조건에서 성공한 청년 농부의 사례를 제공.
            해당 사례에서의 성공 전략, 극복한 어려움, 사용 가능한 교훈을 제시.
            성공 사례와 연관된 자료나 참고할만한 추가 자원을 제공.
            교류 및 네트워킹:

            청년 농업인들과의 네트워크 형성을 돕는 협동조합 및 커뮤니티 정보 제공.
            농업 창업 관련 행사, 워크숍, 세미나 등 교류 기회 안내.
            사용자가 활용할 수 있는 관련 조직, 플랫폼, 온라인 네트워크 링크 제공.

            답변은 사용자가 질문한 특정 주제 하나에 초점을 맞춰 작성하며, 이전 대화의 맥락을 충분히 반영해 핵심적이고 맞춤형으로 작성하라. 필요 시, 사용자의 관심사와 상황을 기반으로 추가 정보나 참고 자료를 제안하라."

            \n`;
    
          // Generative AI 모델 호출
          const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            generationConfig: {
              temperature: 0.7,
              top_p: 0.95,
              max_output_tokens: 8192,
            },
          });
    
          const result = await model.generateContent(detailedPrompt);
          const response = await result.response.text();
    
          // AI 응답 메시지 추가
          const aiMessage = { role: "api", content: response };
          setMessages((prevMessages) => [...prevMessages, aiMessage]);
        } catch (error) {
          console.error("Error generating text:", error);
          const errorMessage = { role: "api", content: "에러가 발생했습니다. 다시 시도해 주세요." };
          setMessages((prevMessages) => [...prevMessages, errorMessage]);
        } finally {
          setLoading(false);
        }
      };

    return (
        <S.Container>
            <S.TitleText>
                <div>농업 창업을 준비하시거나 관심이 있으신가요? </div>
                <div>아래 주제 중 궁금한 점을 말씀해 주시면 실시간 맞춤형으로 답변 드리겠습니다! </div>
            </S.TitleText>
            <S.CategoryContainer>
                <S.Category>
                    <div>창업 지원 정책</div>
                    <div>창업 아이디어</div>
                    <div>교육 프로그램</div>
                    <div>컨설팅 및 추가 자문</div>
                    <div>성공 사례 소개</div>
                    <div>교류 및 네트워킹</div>
                </S.Category>
            </S.CategoryContainer>
            
            <S.ChatContianer ref={chatContainerRef}>
                {messages.map((msg, index) => (
                    msg.role === "user" ? (
                <S.UserMessage key={index}>{msg.content}</S.UserMessage>
                    ) : (
                        <S.AIMessage key={index}>
                            <ReactMarkdown>{msg.content}</ReactMarkdown> {/* 마크다운 렌더링 */}
                        </S.AIMessage>
                    )
                ))}
            </S.ChatContianer>

            <S.ChatInputContainer>
                <S.InputField
                    type="text"
                    placeholder="질문을 입력해 주세요."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                    <S.SendButton onClick={generateText} disabled={loading}>
                        {loading ? "답변 생성 중..." : "전송"}
                    </S.SendButton>
            </S.ChatInputContainer>

        </S.Container>
    );
};

export default Gemini;