class ApiHelper {

  async loginAPI(request) {
    const response = await request.post(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate',
      {
        form: {
          username: 'Admin',
          password: 'admin123'
        }
      }
    );

    return response;
  }
}


module.exports = { ApiHelper };
