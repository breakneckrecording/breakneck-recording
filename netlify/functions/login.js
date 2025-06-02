// netlify/functions/login.js
exports.handler = async function(event, context) {
  const { username, password } = JSON.parse(event.body);

  // Simple hardcoded credentials for illustration (never use hardcoded passwords in production)
  const validUsername = 'byndhuman';
  const validPassword = 'Banana01';

  if (username === validUsername && password === validPassword) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Login successful!' }),
    };
  } else {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'Invalid credentials.' }),
    };
  }
};
