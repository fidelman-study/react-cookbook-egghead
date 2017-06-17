import React from 'react';

export default ({name, isActive}) => <div className={`fa fa-${name} ${isActive ? 'active' : ''}`}>Hello</div>;