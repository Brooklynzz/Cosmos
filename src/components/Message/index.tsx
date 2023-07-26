import { useLocation } from "react-router";
import { useEffect, useState, useRef } from "react";
import { Polaroid, DownloadButton } from './style'
import "./style.css"
import axios from "axios";
import html2canvas from "html2canvas";

const Message: React.FC = () => {
    const [data, setData] = useState<any>(null);

    const fetchData = (): void => {
        useEffect(() => {
            axios(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
                .then(response => {
                    setData(response.data);
                })
                .catch(error => {
                    console.log(error);
                })
        }, [])
    }
    fetchData()

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const message = searchParams.get("message");

    return (
        <div className="polaroid-bg">
            <Polaroid>
                {data && data.url !== undefined ? (
                    <>
                        <div style={{ backgroundImage: `url(${data.url})`, backgroundSize: "550px 650px" }}> </div>
                        <p>{message}</p>
                    </>
                ) : (
                    <p>Carregando...</p>
                )}
            </Polaroid>
        </div>
    )
}

export default Message;