import React, { useState } from 'react';
import { Box, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const CreatePost = ({ open, onClose, onSubmit }) => {
    const [postText, setPostText] = useState('');
    const [postType, setPostType] = useState('');
    const [userId, setUserId] = useState('');

    const handlePostSubmit = () => {
        const newPost = {
            postText,
            postType,
            userId,
            publishDate: new Date().toISOString(),
            comments: []
        };
        onSubmit(newPost); // Trigger the onSubmit callback with the new post data
        onClose(); // Close the dialog after submitting
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Create a New Post</DialogTitle>
            <DialogContent>
                <Box display="flex" flexDirection="column" gap={2}>
                    {/* User ID input */}
                    <TextField
                        label="User ID"
                        variant="outlined"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        fullWidth
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
    );
};

export default CreatePost;
