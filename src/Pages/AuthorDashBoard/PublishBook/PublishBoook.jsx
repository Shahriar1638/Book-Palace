import { useContext } from "react";
import { AuthContext } from "../../../Authentication/Authprovider/Authprovider";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import moment from "moment";

const PublishBoook = () => {
    const axiosPublic = useAxiosPublic();   
    const { userInfos } = useContext(AuthContext);
    const handleBookSubmit = async(e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const bookTitle = form.get('bookTitle');
        const bookImage = form.get('bookImage');
        const genre = form.get('genre').replace(/\s/g, '').split(',');
        const ISBN = form.get('ISBN');
        const price = form.get('price');
        const synopsis = form.get('synopsis');
        const authorName = userInfos.name;
        const authorID = userInfos._id;
        const status = 'pending';
        const publishedYear = moment().format('YYYY');
        const rating = 0;
        const data = {
            bookTitle,
            bookImage,
            genre,
            publishedYear,
            ISBN,
            price,
            rating,
            synopsis,
            authorName,
            authorID,
            status
        }
        try {
            const response = await axiosPublic.post('/24141181/addpendingbooks', data);
            if(response.status === 200) {
                Swal.fire({
                    title: 'Success',
                    text: 'Book Published Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
            }
            form.reset();
        }
        catch(err) {
            console.error(err);
        }

    }

    return (
        <div className="mx-20 mt-10">
            <div className="">
                <div className="flex flex-col items-start justify-center h-full">
                    <h1 className="text-4xl font-bold">Enter Information about the book you want to publish to sell</h1>
                    <form onSubmit={handleBookSubmit} className="flex flex-col mt-10 w-[46rem]">
                        <input type="text" placeholder="Your book name" name="bookTitle" className="border-b-[1px] border-solid shadow-lg border-gray-400 rounded-md px-6 py-3" required/>
                        <input type="text" placeholder="Your book image url" name="bookImage" className="border-b-[1px] border-solid shadow-lg border-gray-400 rounded-md mt-4 px-6 py-3" required/>
                        <input type="text" placeholder="Your book genre" name="genre" className="border-b-[1px] border-solid shadow-lg border-gray-400 rounded-md mt-4 px-6 py-3" />
                        <input type="text" placeholder="ISBN of the book" name="ISBN" className="border-b-[1px] border-solid shadow-lg border-gray-400 rounded-md mt-4 px-6 py-3" required/>
                        <input type="text" placeholder="price of the book" name="price" className="border-b-[1px] border-solid shadow-lg border-gray-400 rounded-md mt-4 px-6 py-3" required/>
                        <textarea type="text" placeholder="synopsis of the book" name="synopsis" id="sdaa" className="border-b-[1px] border-solid shadow-lg border-gray-400 rounded-md mt-4 px-6 py-3" required></textarea>
                        <button className={`bg-blue-500 text-white p-2 rounded-md mt-4`}>Submit Form</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PublishBoook;