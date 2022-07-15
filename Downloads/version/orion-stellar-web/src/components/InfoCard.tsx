type Props = {
    image: string;
    title?: string;
    titleEl?: JSX.Element;
    description: JSX.Element;
};
export default function InfoCard({ title, image, titleEl, description }: Props) {
    return (
        <>
            <button type="button" className="button grow">
                <img src={image} alt={title} />
                <div className="text">
                    <h5>{title || titleEl}</h5>
                    <div className="desc">{description}</div>
                </div>
            </button>
            <style jsx>{`
                .grow {
                    transition: all 0.2s ease-in-out;
                }
                .grow:hover {
                    transform: scale(1.05);
                }
                .button {
                    max-width: 450px;
                    width: 100%;
                    height: 650px;
                    transition: transform 0.2s;
                    cursor: pointer;
                    border: none;
                    padding: 0;
                    border-radius: 5px;
                    display: flex;
                    flex-direction: column;
                }
                .text {
                    padding: 0 44px;
                    text-align: left;
                    color: #000000 !important;
                }
                img {
                    width: 100%;
                    height: auto;
                }
                h5 {
                    font-family: "SegoeUI";
                    font-style: normal;
                    font-weight: bold;
                    font-size: 32px;
                    line-height: 115.51%;
                    margin-bottom: 12px;
                    margin-top: 32px;
                }
                .desc {
                    margin-top: 23px;
                }
                .desc li {
                    margin-bottom: 8px;
                }
                p {
                    font-family: "SegoeUI";
                    font-style: normal;
                    font-weight: normal;
                    font-size: 20px;
                    line-height: 27px;
                    color: #000000;
                }
                @media screen and (max-width: 1024px) {
                    h5 {
                        font-size: 16px !important;
                        line-height: 105.51% !important;
                        margin-bottom: 8px;
                        margin-top: 23px !important;
                    }
                    .text {
                        padding: 7px !important;
                    }
                    .desc {
                        font-size: 12px !important;
                    }
                    .content {
                        display: none !important;
                    }
                    .button {
                        height: 350px !important;
                    }
                }
                @media (max-width: 1500px) {
                    .grow {
                        transition: unset;
                    }
                    .grow:hover {
                        transform: unset;
                    }
                }
            `}</style>
        </>
    );
}
