import React, { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core';
import Bookmark from '@material-ui/icons/Bookmark'
import { ToggleButton } from '@material-ui/lab';

interface BookmarkableProps {
    children: ReactElement;
    isBookmarked?: boolean;
    isTeaser : boolean;
    teaserText: string;
    onBookmarkChange: (isBookmarked: boolean) => void;
}

export const Bookmarkable = ({ children, isBookmarked = false, isTeaser, teaserText, onBookmarkChange,  }: BookmarkableProps) => {
    const classes = useStyle();
    const handleBookmarkChange = () => {
        if (isTeaser) {
            // TBD use snackbar
            alert(teaserText);
            return;
        }

        onBookmarkChange(!isBookmarked);
    }

    return (
        <section className={classes.bookmarkContainer}>
            <ToggleButton
                value="check"
                selected={isBookmarked}
                onChange={handleBookmarkChange}
                className={classes.bookmark}
            >
                <Bookmark />
            </ToggleButton>
            <section className={classes.childContainer}>
                {children}
            </section>
        </section>
    );
};

const useStyle = makeStyles({
    bookmark: {
        position: 'absolute',
        right: '1rem',
        top: '-0.4rem',
        zIndex: 1,
        backgroundColor: 'transparent!important',
        border: 'none',
        padding: '0px'
    },
    bookmarkContainer: {
        position: 'relative',
    },
    childContainer: {
        marginTop: '0.4rem'
    }
});