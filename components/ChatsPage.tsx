import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('0631b48c-6118-4e8e-ad5f-8b0e241abab1', props.user.username, props.user.secret)
  return (
    <div className="h-screen">
      <MultiChatSocket {...chatProps}/>
      <MultiChatWindow {...chatProps} style={{height: '100%', fontFamily: 'inherit'}} />
    </div>
  );
}

export default ChatsPage