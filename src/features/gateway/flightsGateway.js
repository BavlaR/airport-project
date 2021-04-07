import moment from 'moment';

export default () =>
   fetch(`https://api.iev.aero/api/flights/${moment(new Date()).format('DD-MM-YYYY')}`).then(
      res => {
         if (res.ok) return res.json();
      },
   );
