import bannerImg from '../../assets/books.jpg';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen mt-12 mb-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                src={bannerImg}
                className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold mr-20 mb-12">Books to freshen up <br /> your bookshelf</h1>
                <button className="px-4 py-3 rounded-xl bg-[#23BE0A] text-white hover:bg-[#22be0a63]">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;