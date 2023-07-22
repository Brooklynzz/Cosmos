import { useLocation } from "react-router";
import { useEffect, useState, useRef } from "react";
import { Polaroid } from './style'
import axios from "axios";
import html2canvas from "html2canvas";


const Message: React.FC = () => {
    const [data, setData] = useState<any>(null);
    useEffect(() => {
        axios(`https://api.nasa.gov/planetary/apod?api_key=F0ZjACGOSsBbxo9nOsQkY60yoeZT9RHPjqbbFM55`)
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
    })}, [])
    
    const componentRef = useRef<HTMLDivElement | null>(null);

    const downloadPolaroid = () => {
      html2canvas(componentRef.current!).then(function (canvas) {
        const link = document.createElement('a');
        link.download = 'polaroid.png';
        link.href = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
        link.click();
      });
    };

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const message = searchParams.get("message");

    return (
        <div ref={componentRef}>
            <Polaroid>
                <img src={data.url}></img>
                <p>{message}</p>
                <button onClick={downloadPolaroid}>download</button>
            </Polaroid>
        </div>
    )
}

export default Message;