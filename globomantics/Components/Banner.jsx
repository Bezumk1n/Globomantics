import bannerStyles from "./banner.module.css";

const Banner = () => {
    return (
        <header className="row mb-4">
            <div className="col-5">
                <img src="./GloboLogo.png" alt="logo" className={bannerStyles.logo}></img>
            </div>
            <div className="subtitle col-7 mt-5">
                Providing houses all over the world
            </div>
        </header>
    );
};
export default Banner;