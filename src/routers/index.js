import FindCoursePage from 'src/pages/findCourse';

// Student
const menuItems = [
  {
    name: 'Tìm kiếm khóa học',
    component: <FindCoursePage />,
    path: '/',
    exact: true,
  },
  {
    name: 'Khóa học của tôi',
    component: <h3>Khóa học của tôi</h3>,
    path: '/my-course',
    exact: true,
  },
  {
    name: null,
    component: <h3>Auth SignIn</h3>,
    path: '/auth/sign-in',
    exact: true,
  },
];

export default menuItems;
