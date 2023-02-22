import FindCoursePage from 'src/pages/findCourse';
import SignIn from 'src/pages/signIn';
import MakePaymentPage from 'src/pages/student/makePayment';
import SignUpStudent from 'src/pages/signUpStudent';

// Student
const menuItems = [
  {
    name: 'Tìm kiếm khóa học',
    component: <FindCoursePage />,
    layout: '',
    path: '/',
    exact: true,
    isPrivate: false,
  },
  {
    name: 'Khóa học của tôi',
    component: <h3>Khóa học của tôi</h3>,
    layout: '/student',
    path: '/my-course',
    exact: true,
    isPrivate: false,
  },
  {
    name: 'Nạp xu',
    component: <MakePaymentPage />,
    layout: '/student',
    path: '/make-payment',
    exact: true,
    isPrivate: false,
  },
  {
    name: null,
    component: <SignIn />,
    layout: '',
    path: '/auth/sign-in',
    exact: true,
    isPrivate: false,
  },
  {
    name: null,
    component: <SignUpStudent />,
    layout: '',
    path: '/auth/sign-up-student',
    exact: true,
    isPrivate: false,
  },
  {
    name: null,
    component: <h3>SignUp Teacher</h3>,
    layout: '',
    path: '/auth/sign-up/teacher',
    exact: true,
    isPrivate: false,
  },
];

export default menuItems;
