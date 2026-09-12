export const createConversation=()=>[{role:'assistant',text:'您好，我是木序 AI 定制助手。您可以告诉我空间类型、尺寸、风格和预算，我会帮助梳理初步需求。'}]
export const appendUserMessage=(messages,text)=>text.trim()?[...messages,{role:'user',text:text.trim()}]:messages
