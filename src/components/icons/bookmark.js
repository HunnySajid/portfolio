import React from 'react';
import PropTypes from 'prop-types';

const IconBookmark = ({ title }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-bookmark"
  >
    <title>{title ?? 'Bookmark'}</title>
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
  </svg>
);

IconBookmark.propTypes = {
  title: PropTypes.string,
};

export default IconBookmark;
