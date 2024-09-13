/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { Box, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { AuthContext } from '../../../Authentication/Authprovider/Authprovider';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const CreatePost = () => {
    const [open, setOpen] = useState(true);
    const [postText, setPostText] = useState('');
    const [postType, setPostType] = useState('');
    const navigate = useNavigate();

    const axiosPublic = useAxiosPublic();

    const { userInfos } = useContext(AuthContext);

    const onClose = () => {
        setOpen(false);
        navigate('/communityforums');
    };

    const onSubmit = async (newPost) => {
        const response = await axiosPublic.post('/24141236/addpost', newPost);
        if (response.status === 200){
            Swal.fire({
                icon: 'success',
                title: 'Post Submitted Successfully',
                showConfirmButton: false,
                timer: 1500
            });
        }
        navigate('/communityforums');
    };

    const handlePostSubmit = () => {
        const newPost = {
            postText,
            postType,
            userId: userInfos._id,
            userName: userInfos.name,
            userEmail: userInfos.email,
            upvote: 0,
            downvote: 0,
            publishDate: moment().format("YYYY-MM-DD"),
            comments: [],
            reports: [],
        };
        onSubmit(newPost); 
        onClose(); 
    };

    return (
        <div>
            <Box display="flex" justifyContent="flex-end" mb={3}>
                <Button variant="contained" color="primary">
                    Create Post
                </Button>
            </Box>
            <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
                <DialogTitle>Create a New Post</DialogTitle>
                <DialogContent>
                    <Box display="flex" flexDirection="column" gap={2}>
                        {/* User ID input */}
                        <TextField
                            label="User Name"
                            variant="outlined"
                            value={userInfos.name}
                            fullWidth
                            aria-readonly
                        />
                        
                        {/* Post type selection */}
                        <FormControl fullWidth>
                            <InputLabel>Post Type</InputLabel>
                            <Select
                                value={postType}
                                onChange={(e) => setPostType(e.target.value)}
                                label="Post Type"
                            >
                                <MenuItem value="Question">Question</MenuItem>
                                <MenuItem value="Discussion">Discussion</MenuItem>
                                <MenuItem value="Announcement">Announcement</MenuItem>
                                <MenuItem value="Review">Review</MenuItem>
                                <MenuItem value="Suggestion">Suggestion</MenuItem>
                                <MenuItem value="Others">Others</MenuItem>
                            </Select>
                        </FormControl>

                        {/* Post text input */}
                        <TextField
                            label="Post Content"
                            multiline
                            rows={4}
                            variant="outlined"
                            value={postText}
                            onChange={(e) => setPostText(e.target.value)}
                            fullWidth
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handlePostSubmit} color="primary" variant="contained">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default CreatePost;
