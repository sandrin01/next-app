import { useRouter } from "next/router";
import { useRef, useState, useEffect } from "react";
import ActiveLink from "../components/ActiveLink";
import useWindowDimensions from "../hooks/useWindowDimensions";
import NavButton from "./NavButton";

export default function NavBar() {
    const { height, width } = useWindowDimensions();
    const { asPath } = useRouter();
    const prevScrollY = useRef(0);
    const [goingUp, setGoingUp] = useState(false);
    const [showFixedBar, setShowFixedBar] = useState(false);
    const [showMobileNavList, setMobileNavList] = useState(false);
    const activeLink = asPath;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (prevScrollY.current < currentScrollY && goingUp) {
                setGoingUp(false);
            }
            if (prevScrollY.current > currentScrollY && !goingUp) {
                setGoingUp(true);
            }

            prevScrollY.current = currentScrollY;
            setShowFixedBar(goingUp && currentScrollY > 106);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [goingUp]);

    const subTitleFontSize = (width * 2) / 100 > 21 ? 21 : (width * 1.5) / 100;
    const mobileSubTitleFontSize = (width * 2) / 100 > 21 ? 21 : (width * 0.5) / 100;

    const toggleMobileNavList = () => {
        setMobileNavList(!showMobileNavList);
    };

    return (
        <>
            <div className="nav-row">
                <div className="logo">
                    <ActiveLink
                        href={"/"}
                        children={
                            <div className="logo-con">
                                <img src="/images/logo.svg" alt="OrionStellar" />
                            </div>
                        }
                    />
                </div>
                <div className="link-list">
                    <div className="button-list">
                        <ActiveLink
                            href="/about-us"
                            children={<NavButton title="About Us" active={asPath === "/about-us"} />}
                        />
                        <ActiveLink
                            href="/services"
                            children={<NavButton title="Our Services" active={asPath === "/services"} />}
                        />
                        <ActiveLink
                            href="/blog"
                            children={<NavButton title="Blog" active={asPath === "/blog"} />}
                        />
                        <ActiveLink
                            href="/contact"
                            children={<NavButton title="Contact Us" active={asPath === "/contact"} />}
                        />
                    </div>

                    <hr className="line" />
                </div>
            </div>
            <div className="mobile-nav-row">
                <div className="nav-wrap">
                    <div className="logo">
                        <ActiveLink
                            href={"/"}
                            children={
                                <div className="logo-con">
                                    <img src="/images/logo.svg" alt="OrionStellar" />
                                </div>
                            }
                        />
                    </div>
                    <div className="menu-btn" onClick={toggleMobileNavList}>
                        <img src="/images/menu.png" alt="menu" />
                    </div>
                </div>
                {showMobileNavList && (
                    <div className="nav-list">
                        <ActiveLink
                            href="/about-us"
                            children={<NavButton title="About Us" active={asPath === "/about-us"} scroll={true} />}
                        />
                        <ActiveLink
                            href="/services"
                            children={<NavButton title="Our Services" active={asPath === "/services"} scroll={true} />}
                        />
                        <ActiveLink
                            href="/blog"
                            children={<NavButton title="Blog" active={asPath === "/blog"} />}
                        />
                        <ActiveLink
                            href="/contact"
                            children={<NavButton title="Contact Us" active={asPath === "/contact"} scroll={true} />}
                        />
                    </div>
                )}
            </div>
            <div className="scroll nav-row">
                <div className="logo">
                    <ActiveLink
                        href={"/"}
                        children={
                            <>
                                <img src="/images/logo.svg" alt="OrionStellar" />
                            </>
                        }
                    />
                </div>
                <div className="link-list">
                    <div className="button-list">
                        <ActiveLink
                            href="/about-us"
                            children={<NavButton title="About Us" active={asPath === "/about-us"} scroll={true} />}
                        />
                        <ActiveLink
                            href="/services"
                            children={<NavButton title="Our Services" active={asPath === "/services"} scroll={true} />}
                        />
                        <ActiveLink
                            href="/blog"
                            children={<NavButton title="Blog" active={asPath === "/blog"} />}
                        />
                        <ActiveLink
                            href="/contact"
                            children={<NavButton title="Contact Us" active={asPath === "/contact"} scroll={true} />}
                        />
                    </div>
                </div>
            </div>
            <style jsx>{`
                .mobile-nav-row {
                    display: none;
                }
                .nav-row {
                    display: flex;
                    justify-content: space-between;
                    flex: 1 1 auto;
                    padding: 0 40px;
                    font-family: "SegoeUI", sans-serif;
                    font-style: normal;
                    color: #ffffff;
                    height: 0;
                }
                h6 {
                    font-family: "SegoeUI";
                    font-style: normal;
                    font-weight: normal;
                    font-size: 20px;
                    letter-spacing: 0.14em;
                    margin-top: 12px;
                }
                .nav-row .logo {
                    margin-top: 48px;
                    flex: 2;
                }
                .nav-row .logo img {
                    max-width: 30vw;
                }
                .nav-row .link-list {
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                }
                .nav-row .button-list {
                    display: flex;
                    align-items: flex-start;
                    justify-content: flex-end;
                    padding-right: 2vw;
                }
                .line {
                    background-color: white;
                    margin-top: 24px;
                    width: 100%;
                }
                .scroll.nav-row {
                    position: fixed;
                    width: 100%;
                    padding: 0 40px;
                    font-family: "SegoeUI", sans-serif;
                    font-style: normal;
                    color: #ffffff;
                    background-color: black;
                    z-index: 100;
                    height: 80px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    transition: top 0.3s;
                    top: ${showFixedBar ? "0" : "-100px"};
                }
                .scroll.nav-row .logo {
                    margin-top: 36px;
                    flex: 2;
                    height: 80px;
                }
                .scroll.nav-row .logo img {
                    height: 36px;
                }
                .scroll.nav-row .logo h6 {
                    font-size: 13.6px !important;
                    letter-spacing: 0.14em;
                    margin-top: 6px !important;
                }
                @media screen and (max-width: 480px) {
                }
                @media screen and (max-width: 768px) {
                    .scroll {
                        display: none !important;
                    }
                }
                @media screen and (max-width: 1024px) {
                    .nav-row {
                        display: none;
                    }
                    .mobile-nav-row {
                        display: block;
                        margin: 8vw 4vw;
                    }
                    .mobile-nav-row .nav-wrap {
                        display: flex;
                        justify-content: space-between;
                        align-content: center;
                        align-items: flex-start;
                    }
                    .mobile-nav-row .logo-con {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: center;
                    }
                    .mobile-nav-row .logo-con img {
                        width: 70vw;
                        max-width: 500px;
                    }
                    .mobile-nav-row .logo-con h6 {
                        font-size: ${mobileSubTitleFontSize + "px"};
                    }
                    .nav-list{
                        background-color: rgb(0 0 0 / 73%);
                    }
                }
                @media screen and (max-width: 1500px) {
                }
            `}</style>
        </>
    );
}
