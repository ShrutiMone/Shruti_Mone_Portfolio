function Projectcard({ source, title, desc }) {
    return (
        <div className="card w-[350px] h-[350px] shadow-xl rounded-lg border-solid border-2 bg-white/80 backdrop-blur-lg flex-shrink-0">
            <figure className="px-10 pt-10">
                <img
                    src={source}
                    className="rounded-xl w-full h-full object-cover" // Ensure image takes full width and height, with proper aspect ratio
                    alt={title}
                />
            </figure>
            <div className="card-body items-center text-center py-5 px-10">
                <h2 className="card-title text-2xl pb-2">{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    );
}

export default Projectcard;
