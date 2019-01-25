// import mockjs from 'mockjs';

export default {
  'POST /api/login': (req, res) => {
    setTimeout(() => {
      res.send({
        success: true,
        data: 'abcdefg',
      });
    }, 2000);
  },
};
