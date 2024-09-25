import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const BookForm = ({book, onSave, onBack}) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        is (book) {
            setTitle(book.title);
            setAuthor(book.author);
        }
    }, [book]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ id: book ? book.id : null, title, author});
    };

    retur (
        <div>
            <h1>{book ? 'Edit Book' : 'Create Book'}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <lable>Title:</lable>
                    <input
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}></input>
                </div>
                <div>
                    <lable>Author:</lable>
                </div>
            </form>
        </div>
    )
}