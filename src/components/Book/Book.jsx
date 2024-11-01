import { Link } from "react-router-dom";


const Book = ({ book }) => {

    const {image, bookName, author, tags, category, bookId} = book;

    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-xl p-6">
                <figure className="bg-[#F3F3F3] py-8 rounded-2xl">
                    <img
                    src={image}
                    className="h-[166px] w-[125px]"
                    alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className="flex gap-3">
                        {
                            tags.map(tags => <button className="btn btn-xs text-[#23BE0A] bg-green-200">{tags}</button>)
                        }
                    </div>
                    <h2 className="card-title mb-4 mt-4">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By: {author}</p>
                    <div className="border-t-2 border-dashed border-gray-700 mt-5 mb-5"></div>
                    <div className="card-actions justify-between">
                    <div className="badge badge-outline">{category}</div>
                    <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-300" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-200" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-100" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-50" />
                    </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;