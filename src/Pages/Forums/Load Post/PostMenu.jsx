import { useContext, useEffect, useState } from "react";
import { Card, CardContent, Typography, Box, Divider, Avatar, Button, Chip, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
// eslint-disable-next-line no-unused-vars
import { ChatBubbleOutline, ReportProblemOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { AuthContext } from "../../../Authentication/Authprovider/Authprovider";
import moment from "moment/moment";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const PostMenu = () => {
    const { userInfos } = useContext(AuthContext);
    const [postCollections, setPostCollections] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null); 

    const axiosPublic = useAxiosPublic();

    // Comment hooks
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false); 
    const [commentText, setCommentText] = useState('');

    // Report hooks
    const [reportText, setReportText] = useState('');
    const [isReportModalOpen, setIsReportModalOpen] = useState(false);

    const navigate = useNavigate(); 

    useEffect(() => {
        fetch('https://book-palace-server.vercel.app/24141236/allposts')
            .then(res => res.json())
            .then(data => setPostCollections(data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    const handleCloseModal = () => {
        setIsCommentModalOpen(false);
        setIsReportModalOpen(false);
        setCommentText('');
        setReportText('');
    };

    // Functions to handle Comment modal
    const handleCommentOpenModal = (post) => {
        setSelectedPost(post);
        setIsCommentModalOpen(true);
    };

    const handleSubmitComment = async () => {
        if (selectedPost) {
            const commentData = {
                userId: userInfos._id,
                userEmail: userInfos.email,
                comment: commentText,
                date: moment().format("YYYY-MM-DD")
            }
            const response = await axiosPublic.patch(`/24141236/commentpost/${selectedPost._id}`, commentData);
            if (response.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Comment Submitted',
                    text: 'Your comment has been submitted successfully.'
                });
            }
        }
        handleCloseModal();
    };

    // Functions to handle Report modal
    const handleReportOpenModal = (post) => {
        setSelectedPost(post);
        setIsReportModalOpen(true);
    };

    const handleSubmitReport = async () => {
        if (selectedPost) {
            const reportData = {
                userId: userInfos._id,
                userEmail: userInfos.email,
                comment: reportText,
                date: moment().format("YYYY-MM-DD")
            }
            const response = await axiosPublic.patch(`/24141236/reportpost/${selectedPost._id}`, reportData);
            if (response.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Report Submitted',
                    text: 'Your report has been submitted successfully.'
                });
            }
        }
        handleCloseModal();
    };

    
    const handleRedirectToCommunityForums = () => {
        navigate('/createpost');
    };

    return (
        <Box sx={{ p: 4 }}>
            {/* Create Post Button */}
            <Box display="flex" justifyContent="flex-end" mb={3}>
                <Button variant="contained" color="primary" onClick={handleRedirectToCommunityForums}>
                    Create Post
                </Button>
            </Box>

            {postCollections.length > 0 ? (
                postCollections.map((post, idx) => (
                    <Card key={idx} sx={{ mb: 4, boxShadow: 3 }}>
                        <CardContent>
                            <Box display="flex" alignItems="center">
                                <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>{post.userId[0].toUpperCase()}</Avatar>
                                <Box>
                                    <Typography variant="h6" fontWeight="bold">
                                        {post.userName}
                                    </Typography>
                                    <Typography variant="caption" color="textSecondary">
                                        {new Date(post.publishDate).toDateString()}
                                    </Typography>
                                </Box>
                            </Box>

                            <Divider sx={{ my: 2 }} />

                            <Typography variant="body1" color="textSecondary">
                                Post Type: <Chip label={post.postType} color="primary" size="small" />
                            </Typography>
                            <p>
                              {post.postText}
                            </p>

                            <Divider sx={{ my: 2 }} />

                            {/* Comments Section */}
                            <Typography variant="subtitle1" fontWeight="bold">
                                <ChatBubbleOutline sx={{ mr: 1 }} /> Comments
                            </Typography>
                            {post.comments.length > 0 ? (
                                post.comments.map((comment, cIdx) => (
                                    <Box key={cIdx} sx={{ ml: 3, mt: 1 }}>
                                        <Typography variant="body2">
                                            &quot;{comment.comment}&quot; - by <strong>{comment.userEmail.split("@")[0]}</strong> on {new Date(comment.date).toDateString()}
                                        </Typography>
                                    </Box>
                                ))
                            ) : (
                                <Typography variant="body2" color="textSecondary" sx={{ ml: 3 }}>
                                    No comments yet.
                                </Typography>
                            )}

                            <Divider sx={{ my: 2 }} />

                            <Box display="flex" justifyContent="flex-end" mt={2}>
                                <Button 
                                    variant="outlined" 
                                    size="small" 
                                    color="primary" 
                                    sx={{ mr: 1 }}
                                    onClick={() => handleCommentOpenModal(post)}
                                >
                                    Comment
                                </Button>
                                <Button 
                                    variant="contained" 
                                    size="small" 
                                    color="error"
                                    sx={{ mr: 1 }}
                                    onClick={() => handleReportOpenModal(post)}>
                                    Report
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                ))
            ) : (
                <Typography variant="h6" color="textSecondary" align="center">
                    Loading posts...
                </Typography>
            )}

            {/* Comment Modal */}
            <Dialog open={isCommentModalOpen} onClose={handleCloseModal} fullWidth maxWidth="sm">
                <DialogTitle>Leave a Comment</DialogTitle>
                <DialogContent>
                    <Typography variant="body1" gutterBottom>
                        You are commenting on the post by <strong>{selectedPost?.userName}</strong>
                    </Typography>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="comment"
                        label="Your Comment"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseModal} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmitComment} color="primary" variant="contained">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Report Modal */}
            <Dialog open={isReportModalOpen} onClose={handleCloseModal} fullWidth maxWidth="sm">
                <DialogTitle>Leave a Report</DialogTitle>
                <DialogContent>
                    <Typography variant="body1" gutterBottom>
                        You are Reporting on the post by <strong>{selectedPost?.userName}</strong>
                    </Typography>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="Report"
                        label="Your Report"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={reportText}
                        onChange={(e) => setReportText(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseModal} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmitReport} color="primary" variant="contained">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default PostMenu;
