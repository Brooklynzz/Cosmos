import { useLocation } from "react-router";


const Message: React.FC = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const message = searchParams.get("message");
    return (
        <h1>{message}</h1>
    )
}

export default Message;