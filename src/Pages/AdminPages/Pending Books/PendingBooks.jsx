import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { MdDeleteForever } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import Swal from "sweetalert2";

const PendingBooks = () => {
    const axiosPublic = useAxiosPublic();
    const { data: pendingBooks = [], refetch } = useQuery({
        queryKey: ['pendingBooks'],
        queryFn: async () => {
            const response = await axiosPublic.get('/24141181/allpendingbooks');
            return response.data;
        }
    });

    const handleAccept = async (book) => {
        // eslint-disable-next-line no-unused-vars
        const { _id, status, ...rest } = book;
        const newBook = {
            ...rest,
            reviews: [],
            reports: [],
            recommend: [],
            purchaseCount: 0,
            rating: 0
        };
        const res = await axiosPublic.post('/24141181/addbook', newBook);
        const res2 = await axiosPublic.delete(`/24141181/deletependingbook/${_id}`);
        if (res.status === 200 && res2.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Book Accepted',
                text: 'Book has been successfully accepted and published'
            });
            refetch();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Book Acceptance Failed',
                text: 'Book acceptance failed, please try again later'
            });
        }
        // Rest of your code here
    };

    const handleReject = async (book) => {
        const res = await axiosPublic.patch(`/24141181/updatependingbook/${book._id}`, { status: 'rejected' });
        if (res.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Book Rejected',
                text: 'Book has been successfully rejected'
            });
            refetch();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Book Rejection Failed',
                text: 'Book rejection failed, please try again later'
            });
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
                            <th className="w-36 text-start">Author Name</th>
                            <th className="w-64 text-start">Book title</th>
                            <th className="w-24 text-start">Book Price</th>
                            <th className="w-80 text-start">Accept or Reject</th>
                        </tr>
                    </thead>
                    <tbody>
                        { pendingBooks.map((book, index) => (
                            <tr key={index} >
                                <td>{index+1}</td>
                                <td>{book.authorName}</td>
                                <td>{book.bookTitle}</td>
                                <td>{book.price}</td>
                                <td className="flex items-center">
                                    {
                                        book.status === 'pending' ? 
                                        <>
                                            <FaCheckCircle onClick={()=>handleAccept(book)} className="cursor-pointer text-xl mr-6 text-[#7ff839]" />
                                            <MdDeleteForever onClick={()=>handleReject(book)} className="cursor-pointer text-2xl text-[#ff0707]" />
                                        </> :
                                        <p className="text-[#0c0c0c]">Already {book.status}</p>
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PendingBooks;