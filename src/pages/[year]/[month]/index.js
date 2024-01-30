// this was one of the routing ideas i had 

import { useRouter } from 'next/router';
import Calendar from '../../../app/Calendar';
import NotFoundPage from '../../components/NotFoundPage';

const CalendarPage = () => {
  const router = useRouter();
  const { year, month } = router.query;


  const yearInt = parseInt(year, 10);
  const monthInt = parseInt(month, 10) - 1;

  if (
    isNaN(yearInt) || isNaN(monthInt) ||
    monthInt < 0 || monthInt > 11
  ) {
    return <NotFoundPage />;
  }

  return <Calendar year={yearInt} month={monthInt} />;
};

export default CalendarPage;
