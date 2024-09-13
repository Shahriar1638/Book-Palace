import { useContext } from "react";
import { AuthContext } from "../../../Authentication/Authprovider/Authprovider";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { MdOutlineDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const MyPendingBooks = () => {
    const axiosPublic = useAxiosPublic();
    const { userInfos } = useContext(AuthContext);

    const { data: myPendingBooks = [], refetch } = useQuery({
        queryKey: ['myPendingBooks'],
        queryFn: async () => {
            const response = await axiosPublic.get(`/24141236/mypendingbooks/${userInfos._id}`);
            return response.data;
        }
    });

    const handleDeleteBook = async (id) => {
        const res = await axiosPublic.delete(`/24141236/deletemypendingbook/${id}`);
        if (res.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Book Deleted',
                text: 'Book has been successfully deleted'
            });
            refetch();
        }
    };


    return (
        <div className="mx-20 mt-10">
            <h1 className="mb-10 text-4xl font-bold uppercase text-[#0c0c0c] text-start">Total pending to publish books</h1>
            <div className="">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="w-12"></th>
                            <th className="w-36 h-10 text-start">Book title</th>
                            <th className="w-32 h-10 text-start">Book ISBN</th>
                            <th className="w-24 h-10 text-start">Book Price</th>
                            <th className="w-36 h-10 text-start">Book Publish Year</th>
                            <th className="w-36 h-10 text-start">Current status</th>
                            <th className="w-28 h-10 text-start"></th>
                        </tr>
                    </thead>
                    <tbody>
                        { myPendingBooks.map((book, index) => (
                            <tr key={index} >
                                <td className="h-8">{index+1}</td>
                                <td className="h-8">{book.bookTitle}</td>
                                <td className="h-8">{book.ISBN}</td>
                                <td className="h-8">{book.price}</td>
                                <td className="h-8">{book.publishYear}</td>
                                <td className="h-8">{book.status}</td>
                                <td className="h-8 text-xl text-red-500 cursor-pointer" onClick={()=>handleDeleteBook(book._id)}><MdOutlineDeleteForever /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPendingBooks;