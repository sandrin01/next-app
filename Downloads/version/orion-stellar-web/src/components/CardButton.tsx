type Props = {
    title: string;
    contents?: string;
    image: string;
    marginLeft?: string;
};
export default function CardButton({ title, contents, image, marginLeft }: Props) {
    return (
        <>
            <button type="button" className="button grow">
                <h5>{title}</h5>
                <img src={image} alt={title} />
                {contents && <div className="content">{contents}</div>}
            </button>
            <button type="button" className="card">
                <h5>{title}</h5>
                <img src={image} alt={title} />
                {contents && <div className="content">{contents}</div>}
            </button>
            <style jsx>{`
                .grow {
                    transition: all 0.2s ease-in-out;
                }
                .grow:hover {
                    transform: scale(1.1);
                }
                .button {
                    max-height: 650px;
                    transition: transform 0.2s;
                    cursor: pointer;
                    border: none;
                    padding: 0;
                    margin-left: ${marginLeft || 0};
                }
                button:active,
                img {
                    width: 100%;
                    height: 100%;
                }
                h5 {
                    position: absolute;
                    padding: 0 40px;
                    font-family: "SegoeUI";
                    font-style: normal;
                    font-weight: 600;
                    font-size: 24px;
                    line-height: 101.69%;
                    letter-spacing: 0.595em;
                    text-transform: uppercase;
                    color: #000000;
                }
                .content {
                    display: none;
                    margin-top: -174px;
                    height: 172px;
                    left: 135px;
                    top: 2510px;
                    padding-left: 36px;
                    padding-right: 36px;
                    background: linear-gradient(94.75deg, #585858 -18.1%, rgba(193, 193, 193, 0) 116.68%);
                    backdrop-filter: blur(15px);

                    font-style: normal;
                    font-size: 18px;
                    line-height: 24px;
                    text-align: left;

                    color: #ffffff;

                    justify-content: center;
                    align-items: center;
                }
                button:hover.button .content {
                    display: flex;
                    animation: fadeIn 0.5s;
                    opacity: 1;
                }
                .card {
                    display: none;
                    padding: 0;
                    margin: 0;
                    box-shadow: none;
                    background-color: unset;
                    border: unset;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @media screen and (max-width: 480px) {
                }
                @media screen and (max-width: 768px) {
                }
                @media screen and (max-width: 1024px) {
                    .button {
                        display: none;
                    }
                    .card {
                        display: block;
                    }
                    h5 {
                        font-size: 16px !important;
                        line-height: 105.51% !important;
                        margin-bottom: 8px;
                        margin-top: 23px !important;
                    }
                }
                @media screen and (max-width: 1500px) {
                    .content {
                        font-size: 14px;
                        line-height: 19px;
                    }
                }
            `}</style>
        </>
    );
}
