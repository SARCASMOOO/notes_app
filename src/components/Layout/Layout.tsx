const React = require('react');

const Layout = (props: { children: any; }) => (
  <div className='container'>
      {props.children}
  </div>
);

export default Layout;